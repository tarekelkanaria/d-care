import { MdOutlinePersonSearch } from "react-icons/md";
import {
  IoMdNotificationsOutline,
  IoMdHelpCircleOutline,
} from "react-icons/io";
import AdminAvatar from "../../../assets/admin-avatar.jpg";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-b-line">
      <nav className="container flex justify-between items-center">
        <div className="flex justify-between items-center">
          <h1 className="font-inter font-extrabold text-2xl text-logo tracking-wide">
            D-Care
          </h1>
          <div className="hidden sm:flex items-center bg-secondary rounded-lg my-3 py-2 px-4 ml-10">
            <MdOutlinePersonSearch className="text-2xl text-placeholder" />
            <input
              type="search"
              placeholder="Search patients or records..."
              className=" text-sm p-2 focus:outline-none placeholder:text-placeholdtwo placeholder:font-normal placeholder:text-sm placeholder:font-inter placeholder:tracking-normal"
            />
          </div>
        </div>
        <div className="flex items-center ">
          <IoMdNotificationsOutline className="text-xl text-icon cursor-pointer" />
          <IoMdHelpCircleOutline className="text-xl text-icon cursor-pointer ml-5" />
          <span className="ml-5 text-line">|</span>
          <img
            src={AdminAvatar}
            alt="Admin avatar"
            className="w-9 h-9 shadow-avatar border-2 border-white rounded-full ml-5 cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
}
