import React from "react";
import Slider from "../../components/home1/slider";
import AboutBottom from "../../components/about/AboutBottom";
import ProgressBar from "../../components/ui/Progressbar";
import AboutLeft from "../../components/about/AboutLeft";
import feature from "/public/img/home2/feature.jpg";
import ServiceSlider from "../../components/home1/ServiceSlider";
import Image from "next/image";
import Link from "next/link";
import { PiArrowRightDuotone } from "react-icons/pi";
import { rubik } from "./fonts";
import { FaCheck } from "react-icons/fa";
import Client from "../../components/ui/Client";
import TeamSlider from "../../components/ui/team/TeamSlider";
import ClientSlider from "../../components/ui/team/ClientSlider";
import Contact from "../../components/ui/Contact";
import FooterTwo from "../../components/ui/Footer/FooterTwo";
import HomeShuffle from "../../components/home1/homeShuffle";

export const metadata = {
  title: "Home One-Graptor",
  description: "Technology & IT Solutions ",
};
const HomeOne = () => {
  return (
    <div>
      <section>
        <Slider />
      </section>

      {/* About--Start */}

      <section className="relative py-[120px]">
        <div className="container mx-auto xl:px-[30px] xs:px-4 px-3">
          <div className="grid sm:grid-cols-2 xl:gap-4 gap-10 ">
            <AboutLeft />

            <div className=" relative xs:mt-0 mt-20">
              <h6 className=" text-base md:mt-0 mt-8 leading-5 text-primary font-medium uppercase xs:mb-4">
                <span className="w-[81px] h-[3px] inline-block bg-primary mr-[15px] relative -top-[3px]"></span>
                about us
              </h6>
              <h2 className="lg:text-[46px] xs:text-4xl text-3xl lg:leading-[58px] xs:leading-[45px] leading-[42px]  mb-5">
                We Provide Best Solution For Your Business
              </h2>
              <p className=" mb-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <div className=" relative mb-[25px]">
                <ProgressBar datacount={95} title="software development" />
                <ProgressBar datacount={85} title="Artificial Intelligence" />
                <ProgressBar datacount={80} title="web development" />
              </div>

              <AboutBottom />
            </div>
          </div>
        </div>
      </section>
      {/* About--End */}

      {/* Service--Start */}
      <section className=" relative bg-secondary pt-[30px] pb-[120px]">
        <div className="px-4">
          <ServiceSlider />
        </div>
        <div className="container mx-auto xl:px-[30px] xs:px-4 px-3"></div>
        <div className="container mx-auto xl:px-[30px] xs:px-4 px-3">
          <div className=" relative bg-[#1a2a57] border-2 border-solid border-[rgba(255,255,255,0.1)] rounded-[10px] py-20 lg:px-[50px] px-6 mt-[90px]">
            <div className="grid grid-cols-12 gap-5">
              <div className="lg:col-span-7 col-span-12">
                <h2 className=" text-white mt-[-5px] mb-[48px]">
                  We build and transform businesse strategy
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative mb-[33px]">
                    <div className=" flex items-center justify-center bg-primary h-[60px] w-[60px] rounded-[10px] text-center text-[24px] leading-[64px] mb-[17px]">
                      <FaCheck color="white" />
                    </div>
                    <h5 className="text-white text-xl mb-[5px]">
                      Quality Control System
                    </h5>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy
                    </p>
                  </div>
                  <div className="icon-box-2">
                    <div className=" flex items-center justify-center bg-primary h-[60px] w-[60px] rounded-[10px] text-center text-[24px] leading-[64px] mb-[17px]">
                      <FaCheck color="white" />
                    </div>
                    <h5 className="text-white text-xl mb-[5px]">
                      Quality Control System
                    </h5>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className={`${rubik.className} lg:my-0 my-8  h-[50px] w-[180px]  flex items-center text-[15px]  leading-[.8] text-white overflow-hidden relative z-[99] text-center capitalize font-medium   border-2 border-[rgba(255,255,255,0.2)] hover:border-primary py-[14px] px-5 cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:content-[''] before:w-full before:h-0 before:absolute before:left-0 before:bottom-0 before:touch-auto before:-z-[99] before:bg-primary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  hover:before:h-full hover:before:top-0`}
                >
                  get a quote
                  <PiArrowRightDuotone size={20} className="ml-7" />
                </Link>
              </div>
              <div className="lg:col-span-5 col-span-12">
                <Image
                  src={feature}
                  className="w-full rounded-[10px]"
                  alt="Feature"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service--End */}

      {/* Client--Start */}
      <div className="bg-[#f0f4f9] relative pt-[75px] pb-[68px] ">
        <div className="container mx-auto xl:px-[30px] xs:px-4 px-3">
          <Client />
        </div>
      </div>

      {/* Client--End */}
      {/* Portfolio */}

      <section className=" pt-[116px] pb-[147px] bg-[url('/img/bg/service-bg.png')] bg-center bg-cover bg-no-repeat relative">
        <div className="container mx-auto xl:px-6 px-4">
          <h6 className=" text-capitalize text-primary text-center">
            Portfolio
          </h6>
          <h2 className="text-center  mb-12">Case Study</h2>
        </div>
        <HomeShuffle />
      </section>

      {/* Team--Sart */}
      <section className="bg-[#081845] pt-[116px] pb-[147px] bg-[url('/img/bg/service-bg.png')] bg-center bg-cover bg-no-repeat relative">
        <div className="container mx-auto xl:px-[30px] xs:px-4 px-3">
          <h6 className=" text-capitalize text-white text-center">
            Meet Our Team
          </h6>
          <h2 className=" text-center text-white">Our Creative Team</h2>
        </div>
      </section>

      <TeamSlider />

      {/* Team--End */}

      {/* Testimonial--Start */}
      <section className="relative pt-[116px] pb-[120px] ">
        <div className="container mx-auto xl:px-[30px] xs:px-4 px-3">
          <h6 className=" text-capitalize  ">Client Testimonials</h6>
          <h2 className=" mb-12 text-[rgb(25,25,25)]">What our clients say</h2>
          <ClientSlider />
        </div>
      </section>
      {/* Testimonial--End */}

      {/* Contact */}
      <Contact />
      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default HomeOne;
