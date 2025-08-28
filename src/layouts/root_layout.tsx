import Navbar from "@/components/navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className=" space-y-2">
      <Navbar />
      <div className=" p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
