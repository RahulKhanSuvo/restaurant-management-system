const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center md:w-4/12 my-8 mx-auto">
      <p className="text-[#D99904] mb-2">{subHeading}</p>
      <h2 className="text-3xl  py-3 border-y-4">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
