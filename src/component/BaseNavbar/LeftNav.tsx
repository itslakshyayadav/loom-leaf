import { Link } from "react-router-dom";
import logo from "@/assets/white-logo.png";

export const LeftNav = () => {

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
                <Link
                    to="/home"
                    className="text-sm font-medium text-gray-200 hover:text-gray-100"
                >
                    Home
                </Link>
                <Link
                    to="/product"
                    className="text-sm font-medium text-gray-200 hover:text-gray-100"
                >
                    Products
                </Link>
            </div>
        </div>
    )
}