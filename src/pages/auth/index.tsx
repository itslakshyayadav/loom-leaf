import Carousel from "@/component/carousel";
import { AuthFormProvider } from "@/context/AuthFormContext";
import { Outlet } from "react-router-dom";
import whiteLogo from "@/assets/white-logo.png";
const dummyItems = [
  {
    id: 1,
    content: (
      <div className="text-2xl font-bold">
        <img
          src="https://i.pinimg.com/736x/e1/3a/e5/e13ae5a3adeb2f3c837c3cb3344507f9.jpg"
          alt=""
          className="w-[70%] mx-auto"
        />
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="text-2xl font-bold">
        <img
          src="https://i.pinimg.com/736x/42/3b/b9/423bb91c29a103058602e57684e010af.jpg"
          alt=""
          className="w-[70%] mx-auto"
        />
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="text-2xl font-bold">
        <img
          src="https://i.pinimg.com/736x/03/da/5f/03da5f3d057a89d3eb05e7bb2984f677.jpg"
          className="w-[70%] mx-auto"
          alt=""
        />
      </div>
    ),
  },
];

export default function AuthLayout() {
  return (
    <AuthFormProvider>
      <div
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/66/74/07/667407f7c3b41f6fbf9fa81fdd421453.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex min-h-screen p-4 md:p-8 "
      >
        {/* Left: Image or text */}
        <div className="hidden md:flex w-1/2 items-center gap-4 flex-col justify-center backdrop-blur-sm rounded-l-lg">
          <div className="text-center relative z-10">
            <img src={whiteLogo} className="h-[10rem] mx-auto" alt="" />
            <div className="text-4xl font-semibold mb-6 text-gray-100">
              Walk with confidence, wear with style....
            </div>
            <Carousel items={dummyItems} mode="auto" />
          </div>
        </div>
        {/* Right: Form */}
        <div className="flex flex-1 items-center justify-center backdrop-blur-sm relative rounded-r-lg">
          <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none rounded-r-lg" />
          <div className="relative z-10 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </AuthFormProvider>
  );
}
