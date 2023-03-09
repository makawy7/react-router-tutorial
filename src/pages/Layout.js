import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";

function Layout() {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
}

export default Layout;
