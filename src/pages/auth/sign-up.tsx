import Modal from "@/components/modal";
import { supabase } from "@/supabase";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password: string) {
  return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
}

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [modal, setModal] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors: { email?: string; password?: string } = {};

    if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }
    if (!validatePassword(form.password)) {
      newErrors.password =
        "Password must be at least 8 characters, include at least one letter and one number.";
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    // Supabase sign up
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setModal({ open: true, message: error.message });
      return;
    }

    setModal({ open: true, message: "Sign up successful! Please check your email to confirm." });
    setTimeout(() => {
      setModal({ open: false, message: "" });
      navigate("/login");
    }, 2000);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Modal
        open={modal.open}
        onClose={() => setModal({ open: false, message: "" })}
        title="Sign Up"
      >
        <p>{modal.message}</p>
      </Modal>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}