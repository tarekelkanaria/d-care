export default function StatsItem({ Icon, title, subTitle, indicator, color }) {
  return (
    <article className="bg-white border border-line shadow-avatar p-4 rounded-xl max-md:w-full md:w-[22.5%] max-w-xl">
      <div className="flex justify-between items-center mb-6">
        <div className="p-2 bg-highlight">{Icon}</div>
        <span className={`font-inter font-medium text-xs ${color}`}>
          {indicator}
        </span>
      </div>
      <p className="font-inter font-medium text-xs text-body uppercase mb-2">
        {subTitle}
      </p>
      <h3 className="font-manrope font-semibold text-3xl text-dark-black">
        {title}
      </h3>
    </article>
  );
}
