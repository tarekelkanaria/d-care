export default function ServiceItem({ Image, title, text }) {
  return (
    <article className="border border-line rounded-lg bg-white p-8 lg:max-w-[22.5%]">
      <img src={Image} alt="Image1" className="mx-auto mb-6" />
      <h3 className="text-center font-semibold font-manrope text-xl text-title mb-3">
        {title}
      </h3>
      <p className="font-inter font-normal text-sm text-body text-center mb-5">
        {text}
      </p>
      <div className="text-center">
        <a href="#" className="text-link">
          Learn More →
        </a>
      </div>
    </article>
  );
}
