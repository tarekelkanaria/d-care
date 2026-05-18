import { Outlet } from "react-router";
import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
