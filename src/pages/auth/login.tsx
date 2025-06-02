import { useAuth } from "@/context/AuthContext";
import { useAuthForm } from "@/context/AuthFormContext";
import { Link, useNavigate } from "react-router-dom";
import BaseInput from "@/component/inputs";
import LoaderButton from "@/component/loaders/LoaderButton";

export default function Login() {
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
  const { signInUser } = useAuth() ?? {};
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
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
      setError("Please use correct Password.");
      return;
    }

    if (!signInUser) {
      setError("Authentication service unavailable");
      return;
    }
    setLoading(true);
    try {
      const result = await signInUser({ email: trimmedEmail, password });
      if (result.success) {
        navigate("/");
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
    <div className="flex items-center flex-col justify-center ">
      <p className="text-gray-200 text-3xl">Welcome to Loom & Leaf</p>
      <form onSubmit={handleSignIn} className="p-8 rounded w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Login
        </h2>
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
        {/* <button
          type="submit"
          disabled={loading}
          className="w-full text-black bg-white py-2 rounded font-medium transition"
        >
          Sign In
        </button> */}
        <LoaderButton loading={loading}>Login</LoaderButton>
        {error && (
          <p className="mt-4 text-red-500 text-sm text-center">{error}</p>
        )}
        <p className="mt-4 text-center text-white text-sm">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-lime-500 font-medium hover:underline"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
