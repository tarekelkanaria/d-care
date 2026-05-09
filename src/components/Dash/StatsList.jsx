import StatsItem from "../UI/StatsItem/StatsItem";
import { LuCalendarCheck } from "react-icons/lu";

export default function StatsList() {
  return (
    <div className="flex">
      <StatsItem
        Icon={<LuCalendarCheck className="text-2xl text-link " />}
        title={42}
        subTitle="TODAY'S VISITS"
        indicator="+12%"
        color="text-res"
      />
      <StatsItem
        Icon={<LuCalendarCheck className="text-2xl text-link " />}
        title={42}
        subTitle="TODAY'S VISITS"
        indicator="+12%"
        color="text-res"
      />
    </div>
  );
}
