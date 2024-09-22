"use client";
import React, { useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useRef } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";
import { PiArrowRightDuotone } from "react-icons/pi";
import { rubik } from "@/app/fonts";
import { BiLogoSlack } from "react-icons/bi";
import { PiShootingStarThin } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { TbBrandWebflow } from "react-icons/tb";
import IconBox from "./IconBox";
const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="relative group">
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="relative "
      >
        <SwiperSlide>
          <div
            class={`  relative transform scale-100 h-[660px] flex items-center bg-[url('/img/home2/homeslider1.jpg')] bg-cover bg-center bg-no-repeat  before:absolute before:inset-0 before:bg-[rgba(8,24,69,0.7)] `}
          >
            <div class="container mx-auto xl:px-10 px-6">
              <div class="">
                <h5
                  class={` layer_animated ${
                    rubik.className
                  } text-white font-medium text-base  leading-[22px]  capitalize  mb-3 relative after:relative after:-right-6 after:-top-[3px] after:xs:w-[60px] after:w-[45px] after:h-[2px] after:bg-[#F0F4F9] after:content-[''] after:inline-block ${
                    activeIndex == 0 ? "slider_sub_title" : ""
                  }`}
                >
                  For Startup Business
                </h5>
                <h2
                  class={`layer_animated text-white md:text-[80px] sm:text-[60px]   xs:text-[45px] text-[30px]  md:leading-[80px] sm:leading-[70px] xs:leading-[90px] leading-[30px] font-bold ${
                    activeIndex == 0 ? " slider_title" : ""
                  }`}
                >
                  It Service & <br className="xs:block hidden" /> Solutions
                </h2>
                <div className="flex  flex-wrap gap-4 mt-8 xs:px-0 px-12">
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
                      } h-[48px]  flex items-center text-[15px] leading-[.8] text-white overflow-hidden relative z-[99] text-center capitalize font-medium   border border-primary py-[14px] px-[15px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:content-[''] before:w-full before:h-0 before:absolute before:left-0 before:bottom-0 before:touch-auto before:-z-[99] before:bg-primary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0   to_bottom`}
                    >
                      about us
                      <PiArrowRightDuotone size={20} className="ml-7" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class={`  relative transform scale-100 h-[660px] flex items-center bg-[url('/img/home3/home2.jpg')] bg-cover bg-center bg-no-repeat  before:absolute before:inset-0 before:bg-[rgba(8,24,69,0.7)] `}
          >
            <div class="container mx-auto xs:px-10 px-6">
              <div class=" ">
                <h5
                  class={` layer_animated ${
                    rubik.className
                  } text-white font-medium text-base  leading-[22px]  capitalize  mb-3 relative after:relative after:-right-6 after:-top-[3px] after:xs:w-[60px] after:w-[45px] after:h-[2px] after:bg-[#F0F4F9] after:content-[''] after:inline-block ${
                    activeIndex == 1 ? "slider_sub_title" : ""
                  }`}
                >
                  IT Software & Design
                </h5>
                <h2
                  class={`layer_animated text-white md:text-[80px] sm:text-[60px]  xs:text-[40px] text-[25px]  md:leading-[90px] sm:leading-[70px] xs:leading-[50px] leading-[30px] font-bold ${
                    activeIndex == 1 ? " slider_title" : ""
                  }`}
                >
                  Leading It & <br className="xs:block hidden" /> Software
                </h2>
                <div className="flex  flex-wrap gap-4 mt-8 xs:px-0 px-12">
                  <div className="">
                    <Link
                      href="/contact"
                      className={` ${rubik.className} layer_animated ${
                        activeIndex == 1 ? "slider_parag" : ""
                      } h-[48px]  flex gap-4 items-center text-[15px]  leading-[12px] text-white overflow-hidden relative z-[1] text-center capitalize font-medium bg-primary py-[14px] px-[15px]  cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  grap-btn`}
                    >
                      Get A Quote
                      <PiArrowRightDuotone size={20} className=" ml-2" />
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="/About"
                      className={`${rubik.className} layer_animated ${
                        activeIndex == 1 ? "slider_parag" : ""
                      } h-[48px]  flex items-center text-[15px] leading-[.8] text-white overflow-hidden relative z-[99] text-center capitalize font-medium   border border-primary py-[14px] px-[15px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:content-[''] before:w-full before:h-0 before:absolute before:left-0 before:bottom-0 before:touch-auto before:-z-[99] before:bg-primary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0   to_bottom`}
                    >
                      about us
                      <PiArrowRightDuotone size={20} className="ml-7" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class={`  relative transform scale-100 h-[660px] flex items-center bg-[url('/img/home2/homeslider2.jpg')] bg-cover bg-center bg-no-repeat  before:absolute before:inset-0 before:bg-[rgba(8,24,69,0.7)] `}
          >
            <div class="container mx-auto xs:px-10 px-6">
              <div class="  ">
                <h5
                  class={` layer_animated ${
                    rubik.className
                  } text-white font-medium text-base leading-[22px] capitalize  mb-3 relative after:relative after:-right-6 after:-top-[3px] after:xs:w-[60px] after:w-[45px] after:h-[2px] after:bg-[#F0F4F9] after:content-[''] after:inline-block ${
                    activeIndex == 2 ? "slider_sub_title" : ""
                  }`}
                >
                  We Increase Your
                </h5>
                <h2
                  class={`layer_animated text-white md:text-[80px] sm:text-[60px] xs:text-[40px] text-[25px]  md:leading-[90px] sm:leading-[70px] xs:leading-[50px] leading-[30px] font-bold ${
                    activeIndex == 2 ? " slider_title" : ""
                  }`}
                >
                  Business Growth & <br className="xs:block hidden" /> Success
                </h2>
                <div className="flex  flex-wrap gap-4 mt-8 xs:px-0 px-12">
                  <div className="">
                    <Link
                      href="/contact"
                      className={` ${rubik.className} layer_animated ${
                        activeIndex == 2 ? "slider_parag" : ""
                      } h-[48px]  flex gap-4 items-center text-[15px]  leading-[12px] text-white overflow-hidden relative z-[1] text-center capitalize font-medium bg-primary py-[14px] px-[15px]  cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  grap-btn`}
                    >
                      Get A Quote
                      <PiArrowRightDuotone size={20} className=" ml-2" />
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="/About"
                      className={`${rubik.className} layer_animated ${
                        activeIndex == 2 ? "slider_parag" : ""
                      } h-[48px]  flex items-center text-[15px] leading-[.8] text-white overflow-hidden relative z-[99] text-center capitalize font-medium   border border-primary py-[14px] px-[15px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:content-[''] before:w-full before:h-0 before:absolute before:left-0 before:bottom-0 before:touch-auto before:-z-[99] before:bg-primary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0   to_bottom`}
                    >
                      about us
                      <PiArrowRightDuotone size={20} className="ml-7" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="slider-button absolute  lg:top-[50%] xs:top-[35%] top-[25%] transform -translate-y-1/2 p-4 bg-primary text-white rounded-full cursor-pointer  transition-all ease-out duration-300    xs:right-20 right-5 group-hover:transition-all group-hover:ease-out group-hover:duration-300 z-10  after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:content-[''] after:rounded-[50%] after:text-center after:w-0 after:h-0 after:-z-[1] after:transition-all after:ease-out-out after:duration-300 after:bg-[#081845]"
      >
        <FaAngleLeft size={22} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="slider-button absolute  lg:top-[60%] xs:top-[45%] top-[32%] transform -translate-y-1/2  p-4 bg-primary text-white rounded-full cursor-pointer  transition-all ease-out duration-300 z-10 hover:bg-primary  xs:right-20 right-5 group-hover:transition-all group-hover:ease-out group-hover:duration-300 after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:content-[''] after:rounded-[50%] after:text-center after:w-0 after:h-0 after:-z-[1] after:transition-all after:ease-out-out after:duration-300 after:bg-[#081845]"
      >
        <FaAngleRight size={22} />
      </button>

      <section class="relative pb-[26px] -mt-[100px] z-[2]">
        <div class="container mx-auto xl:px-0 px-6">
          <div class="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2  relative bg-primary  rounded-t-[10px] py-5">
            <IconBox icon={<BiLogoSlack />} title="Profit Planning" />
            <IconBox icon={<PiShootingStarThin />} title="Business Analysis" />
            <IconBox icon={<GoProjectSymlink />} title="Reports Analysis" />
            <IconBox icon={<TbBrandWebflow />} title="Project Reporting" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
