"use client";
import React, { useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useRef } from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { LuArrowLeft } from "react-icons/lu";
import homelayer from "/public/img/home3/homelayer2.png";
import homelayer2 from "/public/img/home3/homelayer.png";
import Link from "next/link";
import { PiArrowRightDuotone } from "react-icons/pi";
import { rubik } from "@/app/fonts";
import VideoModal from "../ui/VideoModal";
import SliderVideoModal from "./SliderVideoModal";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);

  return (
    <div className="relative group">
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="relative "
      >
        <SwiperSlide>
          <div
            style={{ transition: "transform 10000ms ease" }}
            className={` bg-img relative transform scale-100 h-[660px] flex items-center bg-[url('/img/home3/home2.jpg')] bg-cover bg-center bg-no-repeat  before:absolute before:inset-0 before:bg-[rgba(8,24,69,0.7)] ${
              activeIndex == 0 ? "xs:scale-[1.3] scale-100" : ""
            }`}
          >
            <div className="container mx-auto px-2">
              <div className=" text-center">
                <h5
                  className={` layer_animated ${
                    rubik.className
                  } text-white font-medium text-base  leading-[22px]  capitalize  mb-3 relative after:relative after:-right-6 after:-top-[3px] after:xs:w-[60px] after:w-[45px] after:h-[2px] after:bg-[#F0F4F9] after:content-[''] after:inline-block ${
                    activeIndex == 0 ? "slider_sub_title" : ""
                  }`}
                >
                  Markets & Resources
                </h5>
                <h2
                  className={`layer_animated text-white md:text-[55px] sm:text-[45px] xs:text-[40px] text-[32px]  md:leading-[65px] sm:leading-[54px] xs:leading-[50px] leading-[38px] font-bold ${
                    activeIndex == 0 ? " slider_title" : ""
                  }`}
                >
                  We Take Care Your <br /> Business Growth
                </h2>
                <div className="flex justify-center flex-wrap gap-4 mt-8 xs:px-0 px-12">
                  <div className="">
                    <Link
                      href="/contact"
                      className={` ${rubik.className} layer_animated ${
                        activeIndex == 0 ? "slider_parag" : ""
                      } h-[48px]  flex gap-4 items-center text-[15px]  leading-[12px] text-white overflow-hidden relative z-[1] text-center capitalize font-medium bg-primary py-[14px] px-[15px]  cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  hover:before:h-full hover:before:top-auto hover:before:bottom-0`}
                    >
                      Get A Quote
                      <PiArrowRightDuotone size={20} className=" ml-2" />
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="/About"
                      className={`${rubik.className} layer_animated ${
                        activeIndex == 0 ? "slider_parag" : ""
                      } h-[48px]  flex items-center text-[15px] leading-[.8] text-white overflow-hidden relative z-[99] text-center capitalize font-medium   border border-primary py-[14px] px-[15px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:content-[''] before:w-full before:h-0 before:absolute before:left-0 before:bottom-0 before:touch-auto before:-z-[99] before:bg-primary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0   hover:before:h-full hover:before:top-0`}
                    >
                      about us
                      <PiArrowRightDuotone size={20} className="ml-7" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`layer_animated sm:block hidden absolute left-0 bottom-0 z-[5] max-w-full h-auto ${
                activeIndex == 0 ? "layer_left" : ""
              } `}
            >
              <Image src={homelayer} alt="Graptor" />
            </div>
            <div
              className={` layer_animated sm:block hidden absolute right-0 bottom-0 z-[5] max-w-full h-auto ${
                activeIndex == 0 ? "layer_right" : ""
              }`}
            >
              <Image src={homelayer2} alt="Graptor" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ transition: "transform 10000ms ease" }}
            className={` bg-img relative transform scale-100 h-[660px] flex items-center bg-[url('/img/home3/home1.jpg')] bg-cover bg-center bg-no-repeat  before:absolute before:inset-0 before:bg-[rgba(8,24,69,0.7)] ${
              activeIndex == 1 ? "xs:scale-[1.3] scale-100" : ""
            }`}
          >
            <div className="container mx-auto xs:px-[13%] px-4">
              <div className="slider-content ">
                <h5
                  className={` layer_animated ${
                    rubik.className
                  } text-white font-medium text-base  leading-[22px]  capitalize  mb-3 relative after:relative after:-right-6 after:-top-[3px] after:xs:w-[60px] after:w-[45px] after:h-[2px] after:bg-[#F0F4F9] after:content-[''] after:inline-block ${
                    activeIndex == 1 ? "slider_sub_title" : ""
                  }`}
                >
                  Modern. Professional. Reliable.
                </h5>
                <h2
                  className={`layer_animated text-white md:text-[55px] sm:text-[45px] xs:text-[40px] text-[32px]  md:leading-[65px] sm:leading-[54px] xs:leading-[50px] leading-[38px] font-bold ${
                    activeIndex == 1 ? " slider_title" : ""
                  }`}
                >
                  We Are Digital Agency
                  <br className="xs:block hidden" /> Technology Solution
                </h2>
                <div
                  className={`  mt-8 ${
                    activeIndex == 1
                      ? "opacity-100 visible transition-all delay-[1.9s]   duration-500 ease-in-out"
                      : "opacity-0 invisible"
                  }`}
                >
                  <SliderVideoModal />
                </div>
              </div>
            </div>
            <div
              className={`layer_animated sm:block hidden absolute left-0 bottom-0 z-[5] max-w-full h-auto ${
                activeIndex == 1 ? "layer_left" : ""
              } `}
            >
              <Image src={homelayer} alt="Graptor" />
            </div>
            <div
              className={` layer_animated sm:block hidden absolute right-0 bottom-0 z-[5] max-w-full h-auto ${
                activeIndex == 1 ? "layer_right" : ""
              }`}
            >
              <Image src={homelayer2} alt="Graptor" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ transition: "transform 10000ms ease" }}
            className={` bg-img relative transform scale-100 h-[660px] flex items-center bg-[url('/img/home3/home3.jpg')] bg-cover bg-center bg-no-repeat  before:absolute before:inset-0 before:bg-[rgba(8,24,69,0.7)] ${
              activeIndex == 2 ? "xs:scale-[1.3] scale-100" : ""
            }`}
          >
            <div className="container mx-auto xs:px-12 px-5">
              <div className=" xs:text-center text-left">
                <h5
                  className={` layer_animated ${
                    rubik.className
                  } text-white font-medium text-base leading-[22px] capitalize  mb-3 relative after:relative after:-right-6 after:-top-[3px] after:xs:w-[60px] after:w-[45px] after:h-[2px] after:bg-[#F0F4F9] after:content-[''] after:inline-block ${
                    activeIndex == 2 ? "slider_sub_title" : ""
                  }`}
                >
                  Develope & Deploy
                </h5>
                <h2
                  className={`layer_animated text-white md:text-[55px] sm:text-[45px] xs:text-[40px] text-[32px]  md:leading-[65px] sm:leading-[54px] xs:leading-[50px] leading-[38px] font-bold ${
                    activeIndex == 2 ? " slider_title" : ""
                  }`}
                >
                  We Are Digital Agency
                  <br className="xs:block hidden" /> Technology Solution
                </h2>
                <p
                  className={`layer_animated text-white  mt-3 ${
                    activeIndex == 2 ? "slider_parag" : ""
                  }`}
                >
                  We are leading technology solutions proving company all
                  <br className="xs:block hidden" /> over the world doing over
                  30 years.
                </p>
              </div>
            </div>
            <div
              className={`layer_animated sm:block hidden absolute left-0 bottom-0 z-[5] max-w-full h-auto ${
                activeIndex == 2 ? "layer_left" : ""
              } `}
            >
              <Image src={homelayer} alt="Graptor" />
            </div>
            <div
              className={` layer_animated sm:block hidden absolute right-0 bottom-0 z-[5] max-w-full h-auto ${
                activeIndex == 2 ? "layer_right" : ""
              }`}
            >
              <Image src={homelayer2} alt="Graptor" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="slider-button xs:block hidden absolute left-0 top-[50%] transform -translate-y-1/2 p-4 bg-white text-primary rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all ease-out duration-300    group-hover:left-14 group-hover:transition-all group-hover:ease-out group-hover:duration-300 z-10  after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:content-[''] after:rounded-[50%] after:text-center after:w-0 after:h-0 after:-z-[1] after:transition-all after:ease-out-out after:duration-300 after:bg-[#081845]"
      >
        <LuArrowLeft size={22} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="slider-button xs:block hidden absolute right-0 top-[50%] border-none transform -translate-y-1/2 p-4 bg-white text-primary rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all ease-out duration-300 z-10 hover:bg-primary  group-hover:right-14 group-hover:transition-all group-hover:ease-out group-hover:duration-300 after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:content-[''] after:rounded-[50%] after:text-center after:w-0 after:h-0 after:-z-[1] after:transition-all after:ease-out-out after:duration-300 after:bg-[#081845]"
      >
        <HiArrowRight size={22} />
      </button>
    </div>
  );
};

export default Slider;
