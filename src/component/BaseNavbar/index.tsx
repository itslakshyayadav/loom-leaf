import { useEffect, useRef, useState } from "react";
import { RightNav } from "./rightNav";
import { LeftNav } from "./LeftNav";
import { BaseSearch } from "../base-search/BaseSearch";
import { MobileLeftNav } from "./MobileLeftNav";
import BaseIcon from "../base-icon";

export default function BaseNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-4 border-b " ref={dropdownRef}>
      <header className="relative">
        <nav className="  ">
          <div className="border-gray-200">
            <div className="flex items-center h-16  justify-between w-full">
              {/* Mobile div button (non-functional) */}
              <BaseIcon
                onClick={() => setIsMobile(true)}
                className="text-black rounded border hover:border lg:hidden"
                name="hamburger"
              />

              {/* Mobile Side Dialog */}
              {isMobile && <MobileLeftNav setIsMobile={setIsMobile} />}
              {/* left-side icons */}
              <LeftNav />

              {/* center search */}
              <BaseSearch className="hidden lg:block" />

              {/* Right-side icons */}
              <RightNav isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
