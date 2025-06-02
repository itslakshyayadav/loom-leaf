import BaseInput from "@/component/inputs";
import LoaderButton from "@/component/loaders/LoaderButton";
import { useAuth } from "@/context/AuthContext";
import { useAuthForm } from "@/context/AuthFormContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    loading,
    setLoading,
  } = useAuthForm()!;

  const { SignUpNewUser } = useAuth() ?? {};

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Trim email and validate
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      setError("Please enter valid password.");
      return;
    }

    if (!SignUpNewUser) {
      setError("Authentication service unavailable");
      return;
    }
    setLoading(true);
    try {
      const result = await SignUpNewUser({
        email: trimmedEmail,
        password,
        name,
      });
      if (result.success) {
        navigate("auth/login");
      } else if (result.error?.message) {
        setError(result.error.message);
      }
    } catch (error) {
      setError("An error occurred during sign up");
      console.error("Sign up error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <p className="text-gray-200 text-3xl">Welcome to Looms & Leaf</p>
      <form onSubmit={handleSignUp} className="p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Create your account
        </h2>
        <div className="mb-4">
          <BaseInput
            label="Name"
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=""
          />
        </div>
        <div className="mb-4">
          <BaseInput
            label="Email"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=""
          />
        </div>
        <div className="mb-6">
          <BaseInput
            label="Password"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=""
          />
        </div>
        <LoaderButton loading={loading}>Create Account</LoaderButton>
        {error && (
          <p className="mt-4 text-red-500 text-sm text-center">{error}</p>
        )}
        <p className="mt-4 text-center text-white text-sm">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-lime-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
