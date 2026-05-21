import StatsList from "./StatsList";
import AppointmentChart from "./AppointmentChart";
import Appointment from "./Appointment";
import TitleBar from "./TitleBar";
import StaffAvailability from "./StaffAvailability";
import LiveAppointment from "./LiveAppointment";
import Sidebar from "./Sidebar";

export default function Dash() {
  return (
    <div className="flex max-lg:relative max-lg:container">
      <Sidebar />
      <main className="lg:container bg-purp p-5">
        <TitleBar />
        <StatsList />
        <section className="flex max-lg:flex-col max-lg:space-y-4 lg:space-x-2 lg:justify-between mb-5">
          <Appointment>
            <AppointmentChart />
          </Appointment>
          <StaffAvailability />
        </section>
        <LiveAppointment />
      </main>
    </div>
  );
}
