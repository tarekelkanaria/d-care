import image from "../../src/assets/Background+Border+Shadow.png";
import Navbar from "../components/Home/Navbar/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex flex-col lg:flex-row items-center justify-between my-10 gap-10">
        <div className="w-full lg:w-1/2">
          <p className="text-header bg-[#DAE1FF] w-fit px-4 py-1 rounded-2xl text-center">
            COMPASSIONATE CARE
          </p>

          <h1 className="font-manrope font-extrabold text-2xl sm:text-3xl lg:text-4xl text-header my-5">
            Experience a Healthier Smile with
            <span className="text-logo"> D-Care</span> Expertise.
          </h1>

          <p className="text-[#475569] font-inter text-sm sm:text-base">
            Our dedicated team of professionals provides personalized dental
            solutions in a relaxing environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 my-10 w-full">
            <button className="bg-logo p-3 w-full sm:w-auto border-0 rounded-2xl text-white drop-shadow-lg hover:bg-blue-500">
              Schedule Appointment
            </button>

            <button className="w-full sm:w-auto text-center border rounded-2xl drop-shadow-lg p-3">
              Our Services
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={image} alt="" className="w-full max-w-md drop-shadow-lg" />
        </div>
      </main>
    </>
  );
}
