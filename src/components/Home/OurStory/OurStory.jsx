import OfficeImg from "../../../assets/office.png";
import Support from "../../../assets/s-icon.png";
import Verify from "../../../assets/v-icon.png";
export default function OurStory() {
  return (
    <section id="story" className="flex bg-[#F2F3FF] py-16 px-10 items-center">
      <div className="flex lg:justify-between items-center max-lg:flex-col max-w-7xl">
        <div className="lg:max-w-1/2">
          <img src={OfficeImg} className="w-full"></img>
        </div>
        <article className="space-y-6 lg:max-w-2/5">
          <div className=" text-4xl font-bold text-[#0F172A] leading-tight">
            <h2>Our Story: Dedicated to Your Dental Wellness</h2>
          </div>
          <div className="text-body text-lg leading-relaxed">
            <p>
              Founded on the principles of clinical excellence and patient-first
              care, d-care has been serving our community for over 15 years. We
              believe that a trip to the dentist should be more than just a
              check-up—it should be a comfortable, educational, and empowering
              experience.
            </p>
          </div>
          <div className="text-body text-lg leading-relaxed">
            <p>
              Our team of highly experienced doctors utilizes the latest dental
              innovations while maintaining a gentle, compassionate touch. We've
              designed our clinic to feel less like a medical office and more
              like a space where you can feel truly at ease.
            </p>
          </div>

          <div className="flex gap-12 pt-4">
            <article className="flex">
              <img className="w-8 h-8 mb-2" src={Verify}></img>
              <div className="ml-5">
                <h3 className="font-bold text-[#0F172A] ">
                  Clinical Excellence
                </h3>
                <p className="text-body text-sm">Top-tier medical standards</p>
              </div>
            </article>

            <article className="flex">
              <img className="w-8 h-8 mb-2" src={Support}></img>
              <div className="ml-5">
                <h3 className="font-bold text-[#0F172A]">Patient Comfort</h3>
                <p className="text-body text-sm">Anxiety-free environment</p>
              </div>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
}
