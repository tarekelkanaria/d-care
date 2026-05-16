import StatsList from "./StatsList";
import AppointmentChart from "./AppointmentChart";
import Appointment from "./Appointment";
import TitleBar from "./TitleBar";
import StaffAvailability from "./StaffAvailability";

export default function Dash() {
  return (
    <main className="container bg-purp p-10">
      <TitleBar />
      <StatsList />
      <div className="flex max-lg:flex-col max-lg:space-y-4 lg:space-x-2 lg:justify-between">
        <Appointment>
          <AppointmentChart />
        </Appointment>
        <StaffAvailability />
      </div>
    </main>
  );
}
