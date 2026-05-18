import TitleWithSubTitle from "../UI/TitleWithSubTitle/TitleWithSubTitle";
import { MdOutlineFilterList } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";

const data = [
  {
    patient: "James Wilson",
    id: "#8829",
    time: "10:30",
    treatmentType: "Root Canal",
    doctor: "Michael Ross",
    action: "Check In",
  },
  {
    patient: "Sofia Martinez",
    id: "#9104",
    time: "11:15",
    treatmentType: "Teeth Whitening",
    doctor: "Sarah Chen",
    action: "Waiting",
  },
  {
    patient: "Benjamin Knight",
    id: "#7741",
    time: "11:45",
    treatmentType: "Routine Checkup",
    doctor: "Elena Rodriguez",
    action: "Pending",
  },
];
export default function LiveAppointment() {
  return (
    <section className="dash-wrapper overflow-x-auto">
      <div className="flex max-md:flex-col max-md:space-y-2 md:justify-between items-center p-4">
        <TitleWithSubTitle
          subTitle="Live Appointment Queue"
          titleDescription="Next 5 scheduled appointments for today."
        />
        <div className="flex space-x-2 items-center">
          <button className="main-btn bg-white border border-line text-body flex items-center">
            <MdOutlineFilterList className="text-xl text-body mr-1" />
            Filter
          </button>
          <button className="main-btn bg-link text-white flex items-center">
            <IoMdRefresh className="text-xl text-white mr-1" />
            Refresh
          </button>
        </div>
      </div>
      <table className="w-full min-w-2xl">
        <thead>
          <tr className="bg-secondary-80 border-b border-t border-b-line border-t-line">
            <th scope="col" className="thead-cell">
              PATIENT NAME
            </th>
            <th scope="col" className="thead-cell">
              TIME
            </th>
            <th scope="col" className="thead-cell">
              TREATMENT TYPE
            </th>
            <th scope="col" className="thead-cell">
              ASSIGNED DENTIST
            </th>
            <th scope="col" className="thead-cell">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record.id} className="border-b border-b-line py-4 px-2">
              <th
                scope="row"
                className="flex justify-center items-center py-3 px-2"
              >
                <span className="font-inter font-bold text-xs tracking-normal bg-highlight text-highlight-text rounded-full p-2 mr-2">
                  {record.patient.split(" ")[0].charAt(0).toUpperCase()}
                  {record.patient.split(" ")[1].charAt(0).toUpperCase()}
                </span>
                <div>
                  <p className="font-inter font-normal tracking-normal text-dark-black">
                    {record.patient}
                  </p>
                  <p className="font-inter font-normal text-xs tracking-normal text-body">
                    ID: {record.id}
                  </p>
                </div>
              </th>
              <td className="py-3 px-2 font-inter font-normal tracking-normal text-dark-black text-center">
                {record.time} AM <br />
                <span className="font-inter font-normal text-xs text-badge">
                  In 15 mins
                </span>
              </td>
              <td className="py-3 px-2 text-center">
                <span className="py-1 px-3 bg-highlight font-inter font-bold text-xs text-highlight-text rounded-full">
                  {record.treatmentType}
                </span>
              </td>
              <td className="py-3 px-2 text-center font-inter font-normal text-sm tracking-normal text-body">
                Dr. {record.doctor}
              </td>
              <td className="py-3 px-2 text-center">
                <button
                  className={`main-btn font-bold shadow-avatar ${record.action === "Check In" ? "bg-logo text-white" : "bg-white text-dark-black border border-line"}`}
                >
                  {record.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
