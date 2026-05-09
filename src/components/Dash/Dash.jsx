import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import StatsList from "./StatsList";
export default function Dash() {
  return (
    <main className="container bg-purp p-10">
      <section className=" mb-8">
        <article className="flex justify-between items-center mb-8">
          <div>
            <h2 className="font-manrope font-bold text-4xl text-dark-black mb-2">
              Dashboard Overview
            </h2>
            <p className="font-inter font-normal text-body">
              Track real-time clinic metrics and manage daily operations.
            </p>
          </div>
          <div className="flex items-center justify-around bg-white border border-line shadow-avatar py-2 px-4 rounded-lg">
            <FaCalendarAlt className="text-logo text-2xl" />
            <p className="ml-3 text-sm font-inter font-semibold text-dark-black">
              Oct 24, 2023 - Oct 30, 2023
            </p>
            <IoIosArrowDown className="text-2xl text-placeholder ml-3" />
          </div>
        </article>
        <StatsList />
      </section>
    </main>
  );
}
