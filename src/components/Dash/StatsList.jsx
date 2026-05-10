import StatsItem from "../UI/StatsItem/StatsItem";
import { LuCalendarCheck } from "react-icons/lu";
import { MdPersonAddAlt } from "react-icons/md";
import { FaRegHourglass } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";

export default function StatsList() {
  return (
    <section className="flex max-md:flex-col max-md:space-y-2  md:justify-around md:items-center">
      <StatsItem
        Icon={<LuCalendarCheck className="text-2xl text-link " />}
        title="42"
        subTitle="TODAY'S VISITS"
        indicator="+12%"
        color="text-res"
      />
      <StatsItem
        Icon={<MdPersonAddAlt className="text-2xl text-link " />}
        title="08"
        subTitle="NEW PATIENTS"
        indicator="+5%"
        color="text-res"
      />
      <StatsItem
        Icon={<FaRegHourglass className="text-2xl text-link " />}
        title="14m"
        subTitle="AVG. WAIT TIME"
        indicator="-2%"
        color="text-alert-danger"
      />
      <StatsItem
        Icon={<FaMoneyBills className="text-2xl text-link " />}
        title="$3.2k"
        subTitle="REVENUE TODAY"
        indicator="+18%"
        color="text-res"
      />
    </section>
  );
}
