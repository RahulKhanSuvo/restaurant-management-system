import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="mb-24">
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={24}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full" src={slide1} alt="" />
          <h3 className="text-3xl uppercase -mt-20 text-center text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide2} alt="" />
          <h3 className="text-3xl uppercase -mt-20 text-center text-white">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide3} alt="" />
          <h3 className="text-3xl uppercase -mt-20 text-center text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide4} alt="" />
          <h3
            style={{ textShadow: "0 1px 0 var(--tw-shadow-color)" }}
            className="text-3xl uppercase -mt-20 text-center  text-white"
          >
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide5} alt="" />
        </SwiperSlide>
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination   translate-y-5  text-center z-10" />
    </section>
  );
};

export default Category;
