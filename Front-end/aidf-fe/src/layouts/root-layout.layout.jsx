import { Outlet } from "react-router";
import Navigation from "@/components/Navigation";

const RootLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;