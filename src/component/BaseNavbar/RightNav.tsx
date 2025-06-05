import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import BaseIcon from "../base-icon";
import { ProfileSection } from "./ProfileSection";
import { useState } from "react";
import RightSlider from "@/component/base-modal/RightSlider";
import CartBody from "@/pages/cart/CartBody";

interface RightNavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const RightNav = (props: RightNavProps) => {
  const { isOpen, toggleMenu } = props;
  const { session } = useAuth() ?? {};

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      {!session ? (
        <div className=" flex items-center gap-4">
          <Link
            to="/auth/login"
            className="px-2 py-1 rounded bg-black text-white font-small hover:text-black hover:bg-white border transition"
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="px-2 py-1 rounded bg-white text-black font-small  transition"
          >
            Signup
          </Link>
        </div>
      ) : (
        <div className="flex items-center">
          <BaseIcon
            className="hidden lg:block m-4 cursor-pointer"
            name="heart"
            color="text-black"
          />
          <BaseIcon
            className="hidden lg:block m-4 cursor-pointer"
            name="cart"
            color="text-black"
            onClick={() => setCartOpen(true)}
          />
          <ProfileSection isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      )}
      <RightSlider
        isOpen={cartOpen}
        title="Your Cart"
        onClose={() => setCartOpen(false)}
      >
        <CartBody></CartBody>
      </RightSlider>
    </>
  );
};
