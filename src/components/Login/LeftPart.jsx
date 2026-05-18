import { RiShieldCheckLine } from "react-icons/ri";
import clinicImage from "../../assets/Background+Border+Shadow.png";

export default function LeftPart() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white px-8 py-16 flex items-center">
      <img
        src={clinicImage}
        alt=""
        className="absolute right-0 top-1/4 w-[76%] max-w-[520px] opacity-[0.06]"
      />

      <div className="relative z-10 max-w-117.5">
        <div className="flex items-center gap-2 text-logo">
          <RiShieldCheckLine className="text-3xl" />
          <h1 className="text-3xl font-bold tracking-tight">D-care</h1>
        </div>

        <h2 className="mt-12 text-4xl font-extrabold leading-tight text-header">
          Precision Healthcare for a Brighter Smile.
        </h2>

        <p className="mt-7 max-w-[430px] text-base leading-7 text-icon">
          Access your clinical records, manage appointments, and connect with
          your dental healthcare providers through our secure, high-precision
          portal.
        </p>

        <div className="mt-9 flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-logo">
            <RiShieldCheckLine className="text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111827]">
              HIPAA Compliant
            </h3>
            <p className="mt-1 max-w-[390px] text-base leading-6 text-icon">
              Your data is encrypted and protected by enterprise-grade security
              protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
