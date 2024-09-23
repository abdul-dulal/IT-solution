"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { LuArrowLeft } from "react-icons/lu";
import portfolio from "/public/Portfolio.json";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
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
        {portfolio?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="">
                <Image
                  src={item.img}
                  width={400}
                  height={400}
                  className="w-full"
                  alt={item.title}
                />
                <div
                  style={{ width: "calc(100% - 30px)" }}
                  className=" relative shadow-sm -top-11 left-4 bg-white rounded-[5px] pt-[23px] pr-[70px] pb-4 pl-5 "
                >
                  <p className="relative text-primary text-lg font-normal hover:text-[#191919] mb-[2px]">
                    <Link href={`/portfolioCategory/${item?.tech}`}>
                      {item.tech}
                    </Link>
                  </p>
                  <h5 className="inline-block text-[#191919] hover:text-primary capitalize text-lg font-bold">
                    <Link href={`portfolio/${item.title}`}>{item.title}</Link>
                  </h5>
                  <Link
                    href={`portfolio/${item.title}`}
                    className="inline-block w-11 h-11 bg-[rgba(104,110,226,0.1)] text-primary text-base rounded-[3px] leading-[47px] text-center absolute top-0 bottom-0 right-5 m-auto hover:bg-primary hover:text-white"
                  >
                    <FaArrowRight className="inline-block m-auto" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

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

export default Portfolio;
