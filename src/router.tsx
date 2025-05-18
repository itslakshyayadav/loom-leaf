import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Login from "@/pages/auth/login";
import Home from "@/pages/auth/home";
import SignUp from "@/pages/auth/sign-up";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/signUp", element: <SignUp /> },
]);
