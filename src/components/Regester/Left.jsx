
import image_tooth from "../../assets/tooth.png";
import image_like from "../../assets/Overlay.png";
export default function LeftPart() {
  return (
    <>
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
    </>
  );
}
