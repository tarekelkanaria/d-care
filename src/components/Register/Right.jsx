// import React from 'react'

import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

export default function RightPart() {
  return (
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
        <label className="block text-[13px] font-medium text-slate-700 mb-2">
          User Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <CiMail />
          </div>
          <input
            type="text"
            placeholder="user name"
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 focus:border-[#0052cc] transition-all"
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-[13px] font-medium text-slate-700 mb-2">
         password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <CiMail />
          </div>
          <input
            type="password"
            placeholder="your password"
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 focus:border-[#0052cc] transition-all"
          />
        </div>
      </div>
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-[13px] font-medium text-slate-700">
           confirm Password
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
        className="w-full bg-[#0052cc] hover:bg-blue-700 text-white font-medium py-3 cursor-pointer border-b-blue-700 rounded-2xl text-sm flex justify-center items-center gap-2 transition-all shadow-md shadow-blue-500/20"
      >
      Register
        <FaArrowRightLong />
      </button>
    </form>
  );
}
