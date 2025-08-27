import Navbar from "@/components/navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className=" space-y-2">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
