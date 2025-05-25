import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Login from "@/pages/auth/login";
import Home from "@/pages/auth/home";
import SignUp from "@/pages/auth/sign-up";
import PrivateRoute from "@/component/PrivateRoute";

const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
];

const privateRoutes = [
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
];

export const router = createBrowserRouter([...privateRoutes, ...publicRoutes]);
