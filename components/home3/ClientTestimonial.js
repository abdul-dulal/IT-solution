"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import member1 from "/public/img/team/member1.png";
import member2 from "/public/img/team/member2.png";
import member3 from "/public/img/team/member3.png";
import member4 from "/public/img/team/member4.png";
import SliderContent from "./SliderContent";

const ClientTestimonial = () => {
  return (
    <div className="relative ">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        className="relative "
        breakpoints={{
          620: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          880: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <SliderContent img={member1} name="Kelly Coleman" title="Nulla nec" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent
            name="Philip Mendez"
            title="Consectetur"
            img={member3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent name="Kelly Coleman" title="Nulla nec" img={member2} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent name="Martin Joe" title="Tincidunt" img={member4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientTestimonial;
