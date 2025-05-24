import Modal from "@/component/modal";
import React, { useState } from "react";
import { supabase } from "../../supabase";
import { Link, useNavigate } from "react-router-dom"; // Add this import

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [modal, setModal] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });
  const [showPassword, setShowPassword] = useState(false); // Add this state

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setModal({ open: true, message: "Invalid credentials!" });
      return;
    }

    setModal({ open: true, message: "Login successful!" });
    setTimeout(() => {
      setModal({ open: false, message: "" });
      navigate("/home");
    }, 1200);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Modal
        open={modal.open}
        onClose={() => setModal({ open: false, message: "" })}
        title="Login"
      >
        <p>{modal.message}</p>
      </Modal>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 pr-10"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? (
                // Eye open icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                // Eye closed icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95m3.25-2.6A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.043 5.197M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}