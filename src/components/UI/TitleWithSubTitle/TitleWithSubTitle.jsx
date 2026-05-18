export default function TitleWithSubTitle({ subTitle, titleDescription }) {
  return (
    <div>
      <h3 className="sub-title">{subTitle}</h3>
      <p className="font-inter font-normal tracking-normal text-body">
        {titleDescription}
      </p>
    </div>
  );
}
