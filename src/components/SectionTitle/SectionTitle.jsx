function SectionTitle({ heading, subHeading }) {
  return (
    <div className="md:w-4/12 mx-auto my-12">
      <p className="text-purple-500 mb-2 text-center">---{subHeading}---</p>
      <h3 className="text-3xl uppercase text-center border-y-4">{heading}</h3>
    </div>
  );
}

export default SectionTitle;
