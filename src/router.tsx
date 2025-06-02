import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Login from "@/pages/auth/login";
import Home from "@/pages/auth/home";
import SignUp from "@/pages/auth/sign-up";
// import PrivateRoute from "@/component/PrivateRoute";
import AuthLayout from "@/pages/auth/index";
import MainLayout from "@/pages/MainLayout";
import ProductList from "@/pages/products/ProductList";
import MainLayout from "@/pages/MainLayout";
import ProductList from "@/pages/products/ProductList";

const publicRoutes = [
  {
    element: <MainLayout />,
    children: [
      // { path: "/home", element: <Home /> },
      { path: "/product", element: <ProductList /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "auth/login", element: <Login /> },
      { path: "auth/signup", element: <SignUp /> },
    ],
  },
];

const privateRoutes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/home", element: <Home /> },
      { path: "/product", element: <ProductList /> },
    ],
  },
];

export const router = createBrowserRouter([...privateRoutes, ...publicRoutes]);
