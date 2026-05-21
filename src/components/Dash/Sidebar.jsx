import { BsFillBagPlusFill, BsGear } from "react-icons/bs";
import TitleWithSubTitle from "../UI/TitleWithSubTitle/TitleWithSubTitle";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { MdPersonSearch, MdBarChart, MdGroups2 } from "react-icons/md";
import { GoSidebarCollapse } from "react-icons/go";
import { NavLink } from "react-router";
import { useState } from "react";

const links = [
  {
    Icon: MdOutlineDashboard,

    text: "Dashboard",
    path: "",
  },
  {
    Icon: FaRegCalendar,
    text: "Schedule",
    path: "schedule",
  },
  {
    Icon: MdPersonSearch,
    text: "Patients",
    path: "patients",
  },
  {
    Icon: MdBarChart,
    text: "Analytics",
    path: "analytics",
  },
  {
    Icon: MdGroups2,
    text: "Staff",
    path: "staff",
  },
  {
    Icon: BsGear,
    text: "Settings",
    path: "settings",
  },
];
export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <aside
      className={`bg-white min-h-screen p-2 ${isSidebarOpen ? "max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:z-10 lg:w-80" : ""}`}
    >
      <button className="p-2" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <GoSidebarCollapse className="text-logo text-3xl cursor-pointer" />
      </button>
      <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
        <div className="flex justify-center items-center space-x-2 mb-10">
          <div className="bg-logo p-2.5 rounded-lg">
            <BsFillBagPlusFill className="text-xl text-white" />
          </div>
          <TitleWithSubTitle
            subTitle="Admin dashboard"
            titleDescription="Dentist booking appointments"
          />
        </div>
        <nav className="px-1">
          {links.map((link, index) => (
            <NavLink
              to={link.path}
              key={`${link.text}${index}`}
              className="group"
              end={link.path === ""}
            >
              {({ isActive, isPending }) => (
                <p
                  className={`flex mb-2 py-4 px-2 items-center font-inter font-medium text-sm  capitalize tracking-tight group-hover:text-logo-text group-hover:bg-high transition-colors duration-300 rounded-lg ${isActive ? "bg-high text-logo-text" : isPending ? "bg-amber-200 text-blue-300" : "text-body"}`}
                >
                  <link.Icon
                    className={`mr-2  text-2xl group-hover:text-logo-text ${isActive ? "text-logo-text" : isPending ? "bg-amber-200 text-blue-300" : "text-body"}`}
                  />
                  {link.text}
                </p>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
