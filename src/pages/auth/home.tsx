import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const { session, signOut } = useAuth() ?? {};
  const navigate = useNavigate();

  const handleSignOut = async (e: any) => {
    e.preventDefault();
    try {
      if (signOut) {
        await signOut();
        navigate("/login");
      } else {
        console.error("signOut function is not available.");
      }
    } catch (error) {
      console.error("Error signing out:", error);
      // Optionally, you can show an error message to the user
    }

  }
  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p className="text-lg text-gray-700">You must be logged in to view this page.</p>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg text-gray-700">This is a protected route, accessible only after login.</p>
      <p className="text-sm text-gray-500 mt-2">You can now navigate to other parts of the app.</p>
      <p className="text-sm text-gray-500 mt-2">Enjoy your stay!</p>
      <div>{session?.user?.email}</div>
      <button
        onClick={handleSignOut}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  )
}