import { rubik } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { PiArrowRightDuotone } from "react-icons/pi";

const SliderContent = ({
  activeIndex,
  setActiveIndex,
  title,
  titleTwo,
  subTitle,
  index,
  bgImg,
  swiperRef,
}) => {
  return (
    <div>
      <div
        className={`  relative transform scale-100 md:h-[700px] sm:h-[550px] xs:h-[410px] h-[380px] flex items-center    before:absolute before:inset-0 before:bg-[rgba(8,24,69,0.7)] `}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto xl:px-10 px-6 relative">
          <div className="">
            <h5
              className={` ${
                rubik.className
              } text-white font-medium text-base  leading-[22px]  capitalize  mb-3 relative after:relative after:-right-6 after:-top-[3px] after:xs:w-[60px] after:w-[45px] after:h-[2px] after:bg-[#F0F4F9] after:content-[''] after:inline-block ${
                activeIndex == index
                  ? "opacity-100 visible transition-all delay-[1.6s]   duration-500 ease-in-out"
                  : "opacity-0 invisible"
              }`}
            >
              {subTitle}
            </h5>
            <h2
              className={`${
                rubik.className
              }  text-white lg:text-[80px] md:text-[60px] sm:text-[50px]  xs:text-[36px] text-[32px]  lg:leading-[90px] md:leading-[70px] sm:leading-[60px] xs:leading-[50px] leading-[45px] font-bold  capitalize  mb-3 relative   ${
                activeIndex == index
                  ? "opacity-100 visible transition-all delay-[1.8s]   duration-500 ease-in-out"
                  : "opacity-0 invisible"
              }`}
            >
              {title} <br className="sm:block hidden" /> {titleTwo}
            </h2>

            <div className="flex  flex-wrap gap-4 mt-8 ">
              <div className="">
                <Link
                  href="/contact"
                  className={` ${rubik.className}  ${
                    activeIndex == index
                      ? "opacity-100 visible transition-all delay-[1.9s]   duration-500 ease-in-out"
                      : "opacity-0 invisible"
                  } h-[48px]  flex gap-4 items-center text-[15px]  leading-[12px] text-white overflow-hidden relative z-[1] text-center capitalize font-medium bg-primary py-[14px] px-[15px]  cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  hover:before:h-full hover:before:top-auto hover:before:bottom-0`}
                >
                  Get A Quote
                  <PiArrowRightDuotone size={20} className=" ml-2" />
                </Link>
              </div>
              <div className="">
                <Link
                  href="/About"
                  className={`${rubik.className}  ${
                    activeIndex == index
                      ? "opacity-100 visible transition-all delay-[1.9s]   duration-500 ease-in-out"
                      : "opacity-0 invisible"
                  } h-[48px]  flex items-center text-[15px] leading-[.8] text-white overflow-hidden relative z-[99] text-center capitalize font-medium   border border-primary py-[14px] px-[15px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:content-[''] before:w-full before:h-0 before:absolute before:left-0 before:bottom-0 before:touch-auto before:-z-[99] before:bg-primary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0   hover:before:h-full hover:before:top-0`}
                >
                  about us
                  <PiArrowRightDuotone size={20} className="ml-7" />
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="slider-button absolute   sm:top-[65%] xs:top-[43%] top-[42%]   transform -translate-y-1/2 p-4 bg-primary text-white rounded-full cursor-pointer  transition-all ease-out duration-300     xs:right-5 right-3 group-hover:transition-all group-hover:ease-out group-hover:duration-300 z-10  after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:content-[''] after:rounded-[50%] after:text-center after:w-0 after:h-0 after:-z-[1] after:transition-all after:ease-out-out after:duration-300 after:bg-[#081845]"
            >
              <FaAngleLeft size={22} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="slider-button absolute    sm:top-[92%] xs:top-[85%] top-[83%] transform -translate-y-1/2  p-4 bg-primary text-white rounded-full cursor-pointer  transition-all ease-out duration-300 z-10 hover:bg-primary   xs:right-5 right-3 group-hover:transition-all group-hover:ease-out group-hover:duration-300 after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:content-[''] after:rounded-[50%] after:text-center after:w-0 after:h-0 after:-z-[1] after:transition-all after:ease-out-out after:duration-300 after:bg-[#081845]"
            >
              <FaAngleRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderContent;
