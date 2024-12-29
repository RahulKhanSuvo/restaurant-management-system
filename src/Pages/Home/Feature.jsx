import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featured from "../../assets/home/featured.jpg";
import background from "../../assets/home/featured.jpg";
const Feature = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 0.7)),url(${background})`,
        backgroundAttachment: "fixed",
      }}
      className="bg-cover bg-center text-white pb-32 pt-20 mt-10"
    >
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="md:flex max-w-screen-xl mx-auto justify-center items-center gap-16">
        <div>
          <img src={featured} alt="" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="uppercase border-b-2 rounded-xl hover:bg-[#1F2937] py-5 px-7 font-semibold">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
