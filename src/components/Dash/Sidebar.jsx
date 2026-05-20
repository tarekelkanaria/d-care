import { BsFillBagPlusFill, BsGear } from "react-icons/bs";
import TitleWithSubTitle from "../UI/TitleWithSubTitle/TitleWithSubTitle";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { MdPersonSearch, MdBarChart, MdGroups2 } from "react-icons/md";
import { NavLink } from "react-router";

const links = [
  {
    Icon: (
      <MdOutlineDashboard className="mr-2 text-body text-xl group-hover:text-logo-text" />
    ),
    text: "Dashboard",
    path: "",
  },
  {
    Icon: (
      <FaRegCalendar className="mr-2 text-body text-xl group-hover:text-logo-text" />
    ),
    text: "Schedule",
    path: "schedule",
  },
  {
    Icon: (
      <MdPersonSearch className="mr-2 text-body text-xl group-hover:text-logo-text" />
    ),
    text: "Patients",
    path: "patients",
  },
  {
    Icon: (
      <MdBarChart className="mr-2 text-body text-xl group-hover:text-logo-text" />
    ),
    text: "Analytics",
    path: "analytics",
  },
  {
    Icon: (
      <MdGroups2 className="mr-2 text-body text-xl group-hover:text-logo-text" />
    ),
    text: "Staff",
    path: "staff",
  },
  {
    Icon: (
      <BsGear className="mr-2 text-body text-xl group-hover:text-logo-text" />
    ),
    text: "Settings",
    path: "settings",
  },
];
export default function Sidebar() {
  return (
    <aside className="bg-white hidden lg:block lg:w-80 min-h-screen p-2">
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
          >
            <p className="flex mb-2 py-4 px-2 items-center font-inter font-medium text-sm text-body capitalize tracking-tight group-hover:text-logo-text group-hover:bg-high transition-colors duration-300 rounded-lg">
              {link.Icon} {link.text}
            </p>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
