import { Parallax } from "react-parallax";
const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={img}
      bgImageAlt="menu"
      strength={-200}
    >
      <div className="pt-[100px]">
        <div
          style={{ background: "rgba(21, 21, 21, 0.6)" }}
          className="py-36 mt-28  text-white max-w-screen-xl mx-auto text-center "
        >
          <h1 className="font-bold text-7xl uppercase">{title}</h1>
          <p className="font-semibold mt-6 uppercase">{subTitle}</p>
        </div>
      </div>
      <div style={{ height: "200px" }} />
    </Parallax>
  );
};

export default Cover;
