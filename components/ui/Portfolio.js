"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import portfolio from "/public/img/portfolio/portfolio1.jpg";
import portfolio2 from "/public/img/portfolio/portfolio2.jpg";
import portfolio3 from "/public/img/portfolio/portfolio3.jpg";
import portfolio4 from "/public/img/portfolio/portfolio4.jpg";
import portfolio5 from "/public/img/portfolio/portfolio5.jpg";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { LuArrowLeft } from "react-icons/lu";
import PortfolioContent from "./PortfolioContent";
const CustomSwiper = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative group">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        lazy={true}
        speed={1000}
        className="relative "
        breakpoints={{
          620: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          880: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="">
            <Image src={portfolio} className="w-full" alt="Portfolio" />
            <PortfolioContent tech="Technology" title="platform integration" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image src={portfolio2} className="w-full" alt="Portfolio" />
            <PortfolioContent tech="Printing" title="product engineering" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image src={portfolio3} className="w-full" alt="Portfolio" />
            <PortfolioContent tech="UX/UI" title="growth startegies" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image src={portfolio4} className="w-full" alt="Portfolio" />
            <PortfolioContent tech="Branding" title="innovative interface" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image src={portfolio5} className="w-full" alt="Portfolio" />
            <PortfolioContent tech="Web Design" title="product design" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Previous Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="slider-button absolute left-0 top-1/2 transform -translate-y-1/2 p-4 bg-primary text-white rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all ease-out duration-300    group-hover:left-5 group-hover:transition-all group-hover:ease-out group-hover:duration-300 z-10  after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:content-[''] after:rounded-[50%] after:text-center after:w-0 after:h-0 after:-z-[1] after:transition-all after:ease-out-out after:duration-300 after:bg-[#081845]"
      >
        <LuArrowLeft size={22} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="slider-button absolute right-0 top-1/2 transform -translate-y-1/2 p-4 bg-primary text-white rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all ease-out duration-300 z-10 hover:bg-primary  group-hover:right-5 group-hover:transition-all group-hover:ease-out group-hover:duration-300 after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:content-[''] after:rounded-[50%] after:text-center after:w-0 after:h-0 after:-z-[1] after:transition-all after:ease-out-out after:duration-300 after:bg-[#081845]"
      >
        <HiArrowRight size={22} />
      </button>
    </div>
  );
};

export default CustomSwiper;
