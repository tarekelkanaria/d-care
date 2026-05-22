import { Outlet } from "react-router";
import Sidebar from "../../components/Dash/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex max-lg:relative max-lg:container">
      <Sidebar />
      <Outlet />
    </div>
  );
}
