import { Outlet } from "react-router-dom";
import BaseNavbar from "@/component/BaseNavbar";
export default function MainLayout() {
  return (
    <>
      <BaseNavbar></BaseNavbar>

      {/* <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}

      <Outlet></Outlet>
    </>
  );
}
