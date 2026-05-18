import { IoIosArrowDown } from "react-icons/io";
import TitleWithSubTitle from "../UI/TitleWithSubTitle/TitleWithSubTitle";

export default function Appointment({ children }) {
  return (
    <article className="dash-wrapper lg:w-[70%]">
      <div className="flex justify-between items-center mb-4">
        <TitleWithSubTitle
          subTitle="Appointment Trends"
          titleDescription="Weekly performance vs. previous month"
        />
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
