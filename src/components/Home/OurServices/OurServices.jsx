import Image1 from "../../../assets/Background (3).png";
import Image2 from "../../../assets/Background (2).png";
import Image3 from "../../../assets/Background (1).png";
import Image4 from "../../../assets/Background.png";
import ServiceItem from "../../UI/ServiceItem/ServiceItem";

function OurServices() {
  return (
    <section id="services" className="bg-body-secondary py-10">
      <h2 className="font-manrope font-semibold text-3xl text-center text-title mb-5">
        Our Comprehensive Services
      </h2>
      <p className="font-inter font-normal text-center text-body mb-10">
        From routine check-ups to advanced restorations, we offer a full range
        of dental
        <br />
        treatments tailored to your unique needs.
      </p>

      <div className="flex max-lg:flex-col max-lg:space-y-3 lg:justify-around items-center">
        <ServiceItem
          Image={Image1}
          title="Preventive Care"
          text="Professional cleanings and exams to keep your natural teeth healthy for a lifetime."
        />
        <ServiceItem
          Image={Image2}
          title="Restorative"
          text="High-quality fillings, crowns, and bridges designed to look and feel like natural teeth."
        />
        <ServiceItem
          Image={Image3}
          title="Cosmetic"
          text="Whitening, veneers, and bonding to help you achieve the confident smile you've always wanted."
        />
        <ServiceItem
          Image={Image4}
          title="Orthodontics"
          text="Straighten your teeth with modern solutions including Invisalign and traditional braces."
        />
      </div>
    </section>
  );
}

export default OurServices;
