"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef, useState } from "react";

import { HiArrowRight } from "react-icons/hi";
import { LuArrowLeft } from "react-icons/lu";
import member1 from "/public/img/team/member1.png";
import member2 from "/public/img/team/member2.png";
import member3 from "/public/img/team/member3.png";
import member4 from "/public/img/team/member4.png";
import ClientContent from "./ClientContent";
const ClientSlider = () => {
  const swiperRef = useRef(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  return (
    <div className="relative ">
      <Swiper
        onSlideChange={(swiper) => {
          setIsEnd(swiper.isEnd);
          setIsBeginning(swiper.isBeginning);
        }}
        onReachEnd={() => {
          setIsEnd(true);
        }}
        onReachBeginning={() => {
          setIsBeginning(true);
        }}
        onFromEdge={() => {
          setIsEnd(false);
          setIsBeginning(false);
        }}
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
          <ClientContent
            name="Eugene Freeman"
            title="Tincidunt"
            img={member1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ClientContent name="Kelly Coleman" title="Nulla nec" img={member2} />
        </SwiperSlide>
        <SwiperSlide>
          <ClientContent
            name="Philip Mendez"
            title="Consectetur"
            img={member3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ClientContent name="Martin Joe" title="Tincidunt" img={member4} />
        </SwiperSlide>
      </Swiper>

      {/* Custom Previous Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className={`absolute right-[86px] -top-24   p-6   rounded-full cursor-pointer z-10  ${
          isBeginning ? "bg-[#F0F0FC] text-primary" : "text-white bg-primary"
        } `}
      >
        <LuArrowLeft size={22} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        className={`absolute right-0 -top-24 p-6 bg-primary  rounded-full cursor-pointer  z-10 ${
          isEnd ? "bg-[#F0F0FC] text-primary" : "text-white"
        }`}
      >
        <HiArrowRight size={22} />
      </button>
    </div>
  );
};

export default ClientSlider;
