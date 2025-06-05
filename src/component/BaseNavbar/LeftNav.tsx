import { Link } from "react-router-dom";
import logo from "@/assets/black-logo.png";

export const LeftNav = () => {
  const menuItems = [
    { name: "Product", path: "/product" },
    { name: "Company", path: "/#" },
  ];
  return (
    <div className="flex items-center">
      {/* Logo */}
      <div className="ml-4 flex lg:ml-0">
        <Link to="/">
          <img alt="Logo" src={logo} className="h-16 w-auto" />
        </Link>
      </div>

      {/* Desktop navigation links */}
      <div className="hidden lg:flex lg:space-x-8">
        {menuItems.map((item) => {
          return (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-black hover:text-gray-800"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
