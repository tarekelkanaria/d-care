import { MdOutlinePersonSearch } from "react-icons/md";
import { LuCircleUserRound } from "react-icons/lu";
import { GoListUnordered } from "react-icons/go";

import {
  IoMdNotificationsOutline,
  IoMdHelpCircleOutline,
} from "react-icons/io";
import AdminAvatar from "../../../assets/admin-avatar.jpg";
import { useHref } from "react-router";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const href = useHref();
  const isDashBoard = href === "/dashboard";
  return (
    <header className="bg-white border-b border-b-line">
      <nav className="container relative flex justify-between items-center">
        <div
          className={`flex justify-between items-center ${!isDashBoard ? "w-3/5 py-5" : ""}`}
        >
          <h1 className="font-inter font-extrabold text-2xl text-logo tracking-wide">
            D-Care
          </h1>
          {isDashBoard ? (
            <div className="hidden sm:flex items-center bg-secondary rounded-lg my-3 py-2 px-4 ml-10">
              <MdOutlinePersonSearch className="text-2xl text-placeholder" />
              <input
                type="search"
                placeholder="Search patients or records..."
                className=" text-sm p-2 focus:outline-none placeholder:text-placeholdtwo placeholder:font-normal placeholder:text-sm placeholder:font-inter placeholder:tracking-normal"
              />
            </div>
          ) : (
            <ul
              className={`text-icon ${openMenu ? "flex flex-col absolute top-10.5 right-5 bg-white shadow-md p-5 md:hidden space-y-2 rounded-md z-10" : "hidden md:flex space-x-5"}`}
            >
              <li>
                <a href="#services" className="hover:text-logo">
                  Services
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-logo">
                  Your Story
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-logo">
                  Testimonials
                </a>
              </li>
            </ul>
          )}
        </div>
        <div className="flex items-center ">
          <IoMdNotificationsOutline className="text-xl text-icon cursor-pointer" />
          <IoMdHelpCircleOutline className="text-xl text-icon cursor-pointer ml-5" />
          <span className="ml-5 text-line">|</span>
          {isDashBoard ? (
            <img
              src={AdminAvatar}
              alt="Admin avatar"
              className="w-9 h-9 shadow-avatar border-2 border-white rounded-full ml-5 cursor-pointer"
            />
          ) : (
            <>
              <LuCircleUserRound size={22} className="cursor-pointer ml-5" />
              <button
                className="md:hidden ml-5 cursor-pointer"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <GoListUnordered size={25} />
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
