import { Link } from "react-router-dom";
import BaseIcon from "../base-icon";

export const MobileLeftNav = (props: any) => {
  const { setIsMobile } = props;

  return (
    <div className="fixed inset-0 z-40 flex">
      <div
        className="fixed inset-0 bg-white bg-opacity-50"
        onClick={() => setIsMobile(false)}
      />
      <div className="relative w-64 bg-white h-full shadow-xl z-50 flex flex-col">
        <button
          className="self-end m-4 text-black"
          onClick={() => setIsMobile(false)}
        >
          <BaseIcon name="delete" />
        </button>
        <nav className="flex flex-col gap-4 px-6 mt-8">
          <Link
            to="/home"
            className="text-base font-medium text-gray-800 hover:text-black"
            onClick={() => setIsMobile(false)}
          >
            Home
          </Link>
          <Link
            to="/product"
            className="text-base font-medium text-gray-800 hover:text-black"
            onClick={() => setIsMobile(false)}
          >
            Products
          </Link>
        </nav>
      </div>
    </div>
  );
};
