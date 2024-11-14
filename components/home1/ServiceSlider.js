"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { FiSettings } from "react-icons/fi";
import { TbBrandWebflow } from "react-icons/tb";
import { BiLogoSlack } from "react-icons/bi";
import { GiMaterialsScience } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { PiShootingStarThin } from "react-icons/pi";
import AllSerive from "/public/AllService.json";
import Link from "next/link";
const ServiceSlider = () => {
  const allIcons = {
    FiSettings,
    TbBrandWebflow,
    BiLogoSlack,
    GiMaterialsScience,
    GoProjectSymlink,
    PiShootingStarThin,
  };
  return (
    <div className="relative">
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          speed={1000}
          loop={true}
          className="relative"
          breakpoints={{
            620: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
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
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {AllSerive?.map(({ id, title, icon }) => {
            const encTitle = encodeURIComponent(title);
            const IconComponent = allIcons[icon];
            return (
              <SwiperSlide key={id}>
                <div>
                  <div className="service group relative bg-[#1a2a57] rounded-[10px] z-[1] pt-[34px] pr-[30px] pb-[30px] xs:pl-[125px] pl-5 mb-[30px] transition-all ease-in-out duration-400 shadow-[0px_6px_50px_0px_rgba(37,37,37,0.05)] after:content-[''] after:absolute after:left-auto after:right-0 after:bottom-0 after:h-full after:-z-[1] after:rounded-[10px] after:w-0 after:bg-primary after:transition-[width] after:duration-[400ms] after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0 hover:after:right-auto">
                    <div className=" slider xs:absolute left-[30px]  top-[34px] min-w-[62px] xs:mb-0 mb-3 ">
                      <span className="text-[62px] text-white group-hover:text-white">
                        <IconComponent />
                      </span>
                    </div>
                    <h3 className="text-xl font-bold leading-[30px] text-white mb-3 transition-all ease-in-out duration-200 ">
                      <Link href={`service/${encTitle}`}>{title}</Link>
                    </h3>
                    <p className="text-white m-0 transition-all duration-200 ease-in-out">
                      Lorem ipsum dolor sit amet, conset etur sadipscing elitr,
                      sed diam nonumy eirmod
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceSlider;
