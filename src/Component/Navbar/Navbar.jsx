import { LuCircleUserRound } from "react-icons/lu";
import { GoBell } from "react-icons/go";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex items-center justify-between py-5 px-4 shadow">
      
      {/* Logo */}
      <h1 className="text-logo font-inter font-extrabold text-xl sm:text-2xl cursor-pointer">
        D-Care
      </h1>

   
      <ul className="sm:flex gap-6 text-navlist font-inter  ">
        <li className="cursor-pointer hover:text-logo">Services</li>
        <li className="cursor-pointer hover:text-logo">Your Story</li>
        <li className="cursor-pointer hover:text-logo">Testimonials</li>
      </ul>

      {/* Icons */}
      <div className="flex gap-5 text-navlist">
        <GoBell size={22} className="cursor-pointer" />
        <LuCircleUserRound size={22} className="cursor-pointer" />
      </div>

    </nav>
  );
}