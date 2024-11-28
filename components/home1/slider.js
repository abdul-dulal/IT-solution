"use client";
import React, { useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useRef } from "react";

import { BiLogoSlack } from "react-icons/bi";
import { PiShootingStarThin } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { TbBrandWebflow } from "react-icons/tb";
import IconBox from "./IconBox";
import SliderContent from "./sliderContent";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className=" group">
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <SliderContent
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            title="It Service &"
            titleTwo="Solutions"
            subTitle="For Startup Business"
            index={0}
            bgImg="/img/home2/homeslider1.jpg"
            swiperRef={swiperRef}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            title="Leading It &"
            titleTwo="Software"
            subTitle="It Software & Design"
            index={1}
            bgImg="/img/home3/home2.jpg"
            swiperRef={swiperRef}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            title="Business Growth &"
            titleTwo="Success"
            subTitle="We Increse Your"
            index={2}
            bgImg="/img/home2/homeslider2.jpg"
            swiperRef={swiperRef}
          />
        </SwiperSlide>
      </Swiper>

      <div className="relative pb-[26px] -mt-[100px] z-[2] sm:block hidden">
        <div className="container mx-auto xl:px-[30px] xs:px-6 px-4">
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 xl:gap-0 gap-10 relative bg-primary  rounded-t-[10px] py-3">
            <IconBox icon={<BiLogoSlack />} title="Profit Planning" />
            <IconBox icon={<PiShootingStarThin />} title="Business Analysis" />
            <IconBox icon={<GoProjectSymlink />} title="Reports Analysis" />
            <IconBox icon={<TbBrandWebflow />} title="Project Reporting" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
