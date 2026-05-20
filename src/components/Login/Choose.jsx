// import React from 'react'
import { useState } from "react";
export default function Choose() {
  const [docror, setDoctor] = useState(false);
  return (
    <>
      <div className="flex bg-slate-50 p-1 rounded-xl mb-8 border border-slate-100">
        {/* admin = false
            setadmin = false
            if not admin mack active style
            else not active style 
            here i need to do else */}
        <button
          onClick={() => setDoctor(false)}
          className={`w-1/2 py-2 text-xs rounded-lg cursor-pointer transition-all ${
            !docror
              ? "font-semibold bg-white shadow-sm text-[#0052cc] border border-slate-200"
              : "font-medium text-slate-500 hover:text-slate-700"
          }`}
        >
          Patient
        </button>

        <button
          onClick={() => setDoctor(true)}
          className={`w-1/2 py-2 text-xs rounded-lg cursor-pointer transition-all ${
            docror
              ? "font-semibold bg-white shadow-sm text-[#0052cc] border border-slate-200"
              : "font-medium text-slate-500 hover:text-slate-700"
          }`}
        >
          Doctor
        </button>
      </div>
    </>
  );
}
