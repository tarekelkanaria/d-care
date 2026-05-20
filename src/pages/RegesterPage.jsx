// import React from 'react'
import Scrol from '../components/Regester/Scrol'
import Right from '../components/Regester/Right'
import Left from '../components/Regester/Left'
export default function RegesterPage() {
  return (
     <div className="min-h-screen flex bg-gray-50 font-sans text-gray-800">
          <Left />
          {/* chosee */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center relative p-6">
            <div className="w-full max-w-420px bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-10 z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Welcome back</h2>
                
              </div>
    
              <Scrol/>
    
              <Right />
    
              
            </div>
          </div>
        </div>
  )
}
