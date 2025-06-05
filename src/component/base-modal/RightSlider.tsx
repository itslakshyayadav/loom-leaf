// CartModal.tsx
import { useEffect } from "react";
import BaseIcon from "@/component/base-icon";

interface RightSliderProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function RightSlider({
  isOpen,
  onClose,
  children,
  title,
}: RightSliderProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-700 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="absolute right-10 top-11 h-[40rem] w-full max-w-xl rounded-2xl bg-[#F3F4F6] shadow-lg p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <BaseIcon
            onClick={onClose}
            name="crossIcon"
            color="text-black"
            className="cursor-pointer h-7 w-7 p-1 border border-black hover:bg-black hover:text-white rounded-full duration-700 ease-out"
          ></BaseIcon>
        </div>
        {children}
      </div>
    </div>
  );
}
