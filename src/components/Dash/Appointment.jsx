import { IoIosArrowDown } from "react-icons/io";

export default function Appointment({ children }) {
  return (
    <article className="dash-wrapper lg:w-[70%]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="sub-title">Appointment Trends</h3>
          <p className="font-inter font-normal tracking-normal text-body">
            Weekly performance vs. previous month
          </p>
        </div>
        <button className="flex justify-between items-center bg-secondary p-2 rounded-lg cursor-pointer">
          <p className="font-inter font-normal text-xs text-dark-black">
            Last 7 Days
          </p>
          <IoIosArrowDown className="text-lg text-placeholder ml-3" />
        </button>
      </div>
      {children}
    </article>
  );
}
