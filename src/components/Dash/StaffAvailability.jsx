import { CiMenuKebab } from "react-icons/ci";
import Staff01 from "../../assets/staff-01.png";
import Staff02 from "../../assets/staff-02.png";
import Staff03 from "../../assets/staff-03.png";
const StaffList = [
  {
    id: "01",
    drName: "Sarah Chen",
    speciality: "Orthodontics",
    avatar: Staff01,
    isActive: true,
  },
  {
    id: "02",
    drName: "Michael Ross",
    speciality: "Endodontics",
    avatar: Staff02,
    isActive: true,
  },
  {
    id: "03",
    drName: "Elena Rodriguez",
    speciality: "General Care",
    avatar: Staff03,
    isActive: false,
  },
  {
    id: "04",
    drName: "Sarah Chen",
    speciality: "Orthodontics",
    avatar: Staff01,
    isActive: true,
  },
  {
    id: "05",
    drName: "Michael Ross",
    speciality: "General Care",
    avatar: Staff02,
    isActive: false,
  },
];
export default function StaffAvailability() {
  return (
    <article className="dash-wrapper lg:w-[28%]">
      <div className="flex space-x-4 items-center justify-between mb-16">
        <h3 className="sub-title">Staff Availability</h3>
        <CiMenuKebab className="text-2xl text-placeholder" />
      </div>
      <ul className="space-y-16">
        {StaffList.map((doctor) => (
          <li
            key={doctor.id}
            className="flex space-x-2 justify-between items-center"
          >
            <div className="flex space-x-4">
              <div className="relative w-8 h-8 rounded-full">
                <img
                  src={doctor.avatar}
                  alt={`Avatar for doctor ${doctor.drName}`}
                  className="w-8 h-8 rounded-full"
                />
                <span
                  className={`w-3 h-3 absolute right-0.5 bottom-0.5 rounded-full ${doctor.isActive ? "bg-res" : "bg-inactive"}`}
                />
              </div>
              <div>
                <h4 className="font-inter font-normal tracking-normal text-dark-black">
                  Dr. {doctor.drName}
                </h4>
                <p className="font-inter font-normal text-xs tracking-normal text-body">
                  {doctor.speciality}
                </p>
              </div>
            </div>

            <span
              className={`${doctor.isActive ? "text-res bg-activebg" : "text-icon bg-inactivebg"} font-inter font-bold text-[10px] uppercase p-1 rounded-sm `}
            >
              {doctor.isActive ? "Active" : "Busy"}
            </span>
          </li>
        ))}
        <li className="text-center rounded-lg py-2 border border-light-link font-inter font-medium text-xs tracking-normal text-link cursor-pointer">
          Manage Shift Schedule
        </li>
      </ul>
    </article>
  );
}
