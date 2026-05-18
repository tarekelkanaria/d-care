import image_tooth from "../assets/tooth.png";
import image_like from "../assets/Overlay.png";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

export default function Login() {
  const [admin, setAdmin] = useState(false);
  return (
    <div className="min-h-screen flex bg-gray-50 font-sans text-gray-800">
      <div className="hidden lg:flex w-1/2 bg-slate-50 flex-col justify-center px-20 relative border-r border-slate-200 overflow-hidden">
        <img
          src={image_tooth}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        />

        <div className="absolute top-10 left-20 flex items-center gap-2 text-[#0052cc] font-bold text-xl z-10">
          D-care
        </div>

        <div className="max-w-lg mt-10 z-10">
          <h1 className="text-[40px] font-bold text-#0f172a leading-[1.15] mb-5 tracking-tight font-manrope">
            Precision Healthcare for a Brighter Smile.
          </h1>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-10">
            Access your clinical records, manage appointments, and connect with
            your dental healthcare providers through our secure, high-precision
            portal.
          </p>

          <div className="flex gap-4 items-start backdrop-blur-sm p-4 w-max">
            <img
              src={image_like}
              alt="Shield"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h3 className="font-semibold text-sm text-slate-800">
                HIPAA Compliant
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-62.5">
                Your data is encrypted and protected by enterprise-grade
                security protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center relative p-6">
        <div className="w-full max-w-420px bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-10 z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Welcome back</h2>
            <p className="text-sm text-slate-500 mt-2">
              Please enter your details to sign in
            </p>
          </div>

          {/* Select Role */}
          <div className="flex bg-slate-50 p-1 rounded-xl mb-8 border border-slate-100">
            {/* admin = false
            setadmin = false
            if not admin mack active style
            else not active style 
            here i need to do else */}
            <button
              onClick={() => setAdmin(false)}
              className={`w-1/2 py-2 text-xs rounded-lg transition-all ${
                !admin
                  ? "font-semibold bg-white shadow-sm text-[#0052cc] border border-slate-200"
                  : "font-medium text-slate-500 hover:text-slate-700"
              }`}
            >
              Patient
            </button>

            <button
              onClick={() => setAdmin(true)}
              className={`w-1/2 py-2 text-xs rounded-lg transition-all ${
                admin
                  ? "font-semibold bg-white shadow-sm text-[#0052cc] border border-slate-200"
                  : "font-medium text-slate-500 hover:text-slate-700"
              }`}
            >
              Administrator
            </button>
          </div>
          {/*           
         <div className="flex bg-slate-50 p-1 rounded-xl mb-8 border border-slate-100">

            <button className="w-1/2 py-2 text-xs font-semibold rounded-lg bg-white shadow-sm text-[#0052cc] border border-slate-200">
              Patient
            </button>
            <button className="w-1/2 py-2 text-xs font-medium rounded-lg text-slate-500 hover:text-slate-700 transition-colors">
              Administrator
            </button>
          </div> */}

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-5">
              <label className="block text-[13px] font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <CiMail />
                </div>
                <input
                  type="email"
                  placeholder="name@clinic.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 focus:border-[#0052cc] transition-all"
                />
              </div>
            </div>

            <div className="mb-5">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[13px] font-medium text-slate-700">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[12px] font-medium text-[#0052cc] hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <CiLock />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 focus:border-[#0052cc] transition-all tracking-widest"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                ></button>
              </div>
            </div>

            <div className="flex items-center mb-6 mt-6">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-logo bg-white border-slate-300 rounded focus:ring-[#0052cc]"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-[12px] text-slate-500 cursor-pointer"
              >
                Remember this device
              </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#0052cc] hover:bg-blue-700 text-white font-medium py-3 border-b-blue-700 rounded-2xl text-sm flex justify-center items-center gap-2 transition-all shadow-md shadow-blue-500/20"
            >
              Sign In
              <FaArrowRightLong />
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-8 text-center text-[12px] text-slate-500">
            Don't have an account?
            <button
              type="button"
              className="text-[#0052cc] hover:underline font-semibold ml-1"
            >
              Register with your clinic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
