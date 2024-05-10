type BreadcrumbProps = {
  heading: string;
  subHeading: string;
};

export default function Breadcrumb({ heading, subHeading }: BreadcrumbProps) {
  return (
    <div className="bg-background2 flex h-[450px] items-center justify-center">
      <div className="text-center">
        <p className="font-open font-bold uppercase tracking-[7px] text-accent">
          {subHeading}
        </p>
        <h1 className="mt-5 font-poppins text-5xl font-extrabold text-white">
          {heading}
        </h1>
      </div>
    </div>
  );
}
