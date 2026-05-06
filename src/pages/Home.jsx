// importing images that in public:
import officeimg from "../../public/office.png"
import supporti from "../../public/s-icon.png"
import verifyi from "../../public/v-icon.png"

export default function Home() {
  return(

    <>
 
 <div className="main-our-story flex bg-[#F2F3FF] py-16 px-10 min-h-screen items-center">
        <div className="os grid grid-flow-col items-center gap-12 max-w-7xl mx-auto" >
          <div className="os-img grid justify-items-start" >
            <img src = {officeimg}></img>
          </div>
          <div className="os-p space-y-6">
            <div className="os-h text-4xl font-bold text-[#0F172A] leading-tight">
              <h1>Our Story: Dedicated to Your Dental Wellness</h1>
            </div>
            <div className="osp1 text-[#475569] text-lg leading-relaxed">
              <p>Founded on the principles of clinical excellence and patient-first care, d-care
                 has been serving our community for over 15 years. We believe that a trip to
                 the dentist should be more than just a check-up—it should be a comfortable,
                 educational, and empowering experience.</p>
            </div>
            <div className="os-p2 text-[#475569] text-lg leading-relaxed">
              <p>Our team of highly experienced doctors utilizes the latest dental innovations
                 while maintaining a gentle, compassionate touch. We've designed our clinic
                 to feel less like a medical office and more like a space where you can feel
                 truly at ease.</p>
            </div>
      
            <div className="os-icons flex gap-12 pt-4">
              <div className="icon1 flex">
              <img className="w-8 h-8 mb-2" src={verifyi}></img>
              <div>

              <h3 className="font-bold text-[#0F172A] ">Clinical Excellence</h3>
              <p cclassName="text-[#475569] text-sm">Top-tier medical standards</p>
              </div>
              </div>

              <div className="icon2">
              <img className="w-8 h-8 mb-2" src={supporti}></img>
              <h3 className="font-bold text-[#0F172A]">Patient Comfort</h3>
              <p className="text-[#475569] text-sm">Anxiety-free environment</p>
              </div>

            </div>
          </div>
        </div>
      </div>



  </>

)
}