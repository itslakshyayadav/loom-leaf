import Carousel from "@/component/carousel";
import { AuthFormProvider } from "@/context/AuthFormContext";
import { Outlet } from "react-router-dom";

const dummyItems = [
    { id: 1, content: <div className="text-2xl font-bold">Slide 1</div> },
    { id: 2, content: <div className="text-2xl font-bold">Slide 2</div> },
    { id: 3, content: <div className="text-2xl font-bold">Slide 3</div> },
];

export default function AuthLayout() {
    return (
        <AuthFormProvider>
            <div
                style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1675342786681-e33a19414cfd?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: "cover", backgroundPosition: "center" }}
                className="flex min-h-screen p-4 md:p-8 ">
                {/* Left: Image or text */}
                <div className="hidden md:flex w-1/2 items-center justify-center backdrop-blur-sm rounded-l-lg">
                    <Carousel items={dummyItems} mode="auto" />
                    <div className="text-center relative z-10">
                        <div className="text-4xl font-bold mb-2 text-white">I don't do fashion. I am fashion...</div>
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