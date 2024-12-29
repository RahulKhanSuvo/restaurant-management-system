import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/home/01.jpg";
import image2 from "../../assets/home/02.jpg";
import image3 from "../../assets/home/03.png";
import image4 from "../../assets/home/04.jpg";
import image5 from "../../assets/home/05.png";
import image6 from "../../assets/home/06.png";
import { useState } from "react";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className=" ">
      <Carousel
        selectedItem={activeIndex}
        onChange={(index) => setActiveIndex(index)}
        showStatus={false}
        autoPlay
        stopOnHover={false}
        infiniteLoop
        showThumbs={false}
        dynamicHeight={false}
        interval={3000}
        className=""
      >
        <div>
          <img
            src={image1}
            alt="Slide 1"
            className="h-[780px] w-full object-cover" // Adjust height
          />
        </div>
        <div>
          <img
            src={image2}
            alt="Slide 2"
            className="h-[780px] w-full object-cover" // Adjust height
          />
        </div>
        <div>
          <img
            src={image3}
            alt="Slide 3"
            className="h-[780px] w-full object-cover" // Adjust height
          />
        </div>
        <div>
          <img
            src={image4}
            alt="Slide 4"
            className="h-[780px] w-full object-cover" // Adjust height
          />
        </div>
        <div>
          <img
            src={image5}
            alt="Slide 5"
            className="h-[780px] w-full object-cover" // Adjust height
          />
        </div>
        <div>
          <img
            src={image6}
            alt="Slide 6"
            className="h-[780px] w-full object-cover" // Adjust height
          />
        </div>
      </Carousel>

      {/* Custom Thumbnail Slider */}
      <div className="py-6 flex justify-center items-center z-10">
        <div className="flex space-x-4 overflow-hidden">
          <img
            src={image1}
            alt="Thumbnail 1"
            className={`w-24 h-14 object-cover cursor-pointer transition-all duration-300 ${
              activeIndex === 0
                ? "opacity-100 border-4 border-[#343432]"
                : "opacity-95"
            }`}
            onClick={() => handleThumbnailClick(0)}
          />
          <img
            src={image2}
            alt="Thumbnail 2"
            className={`w-24 h-14 object-cover cursor-pointer transition-all duration-300 ${
              activeIndex === 1
                ? "opacity-100 border-4 border-[#343432]"
                : "opacity-95"
            }`}
            onClick={() => handleThumbnailClick(1)}
          />
          <img
            src={image3}
            alt="Thumbnail 3"
            className={`w-24 h-14 object-cover cursor-pointer transition-all duration-300 ${
              activeIndex === 2
                ? "opacity-100 border-4 border-[#343432]"
                : "opacity-95"
            }`}
            onClick={() => handleThumbnailClick(2)}
          />
          <img
            src={image4}
            alt="Thumbnail 4"
            className={`w-24 h-14 object-cover cursor-pointer transition-all duration-300 ${
              activeIndex === 3
                ? "opacity-100 border-4 border-[#343432]"
                : "opacity-95"
            }`}
            onClick={() => handleThumbnailClick(3)}
          />
          <img
            src={image5}
            alt="Thumbnail 5"
            className={`w-24 h-14 object-cover cursor-pointer transition-all duration-300 ${
              activeIndex === 4
                ? "opacity-100 border-4 border-[#343432]"
                : "opacity-95"
            }`}
            onClick={() => handleThumbnailClick(4)}
          />
          <img
            src={image6}
            alt="Thumbnail 6"
            className={`w-24 h-14 object-cover cursor-pointer transition-all duration-300 ${
              activeIndex === 5
                ? "opacity-100 border-4 border-[#343432]"
                : "opacity-95"
            }`}
            onClick={() => handleThumbnailClick(5)}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
