import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ProfileSection = (props: any) => {
  const { isOpen, toggleMenu } = props;

  const [loading, setLoading] = useState(false);
  const { signOut, session } = useAuth() ?? {};

  const name = (session?.user?.user_metadata as { name?: string })?.name;
  const navigate = useNavigate();

  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (signOut) {
        setLoading(true);
        await signOut();
        setLoading(false);
        navigate("/");
      } else {
        console.error("signOut function is not available.");
      }
    } catch (error) {
      console.error("Error signing out:", error);
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className="relative ml-4">
      <div onClick={toggleMenu}>
        <div className="relative cursor-pointer flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user div</span>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-11 border  rounded-full"
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
          <Link
            to="/profile"
            className="block text-xs lowercase font-semibold text-gray-700  px-4 py-2 data-focus:bg-gray-100 data-focus:outline-hidden hover:bg-gray-100"
          >
            {session && name}
          </Link>

          <Link
            to="/order"
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden hover:bg-gray-100 hover:font-medium"
          >
            My Profile
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden hover:bg-gray-100 hover:font-medium"
          >
            Settings
          </Link>

          <button
            onClick={handleSignOut}
            disabled={loading}
            className={`block px-4 w-full text-left py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden hover:font-medium 
                                ${
                                  loading
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:bg-gray-100"
                                }`}
          >
            {loading ? "Signing out..." : "Sign out"}
          </button>
        </div>
      )}
    </div>
  );
};
