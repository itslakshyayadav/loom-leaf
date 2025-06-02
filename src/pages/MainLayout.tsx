import { Outlet } from "react-router-dom";
// import BaseNavbar from "../components/base-components/BottomBaseNavbar";

import BaseNavbar from "@/component/BaseNavbar/index";
// import BottomBaseNavbar from "@/components/base-components/BottomBaseNavbar";

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
