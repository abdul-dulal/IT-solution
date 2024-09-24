import React from "react";
import { rubik } from "../fonts";
import Link from "next/link";
import Image from "next/image";

import feature from "/public/img/home1/feature.png";
import ring from "/public/img/home1/ring.png";
import round from "/public/img/home1/round.png";
import { PiArrowRightDuotone } from "react-icons/pi";
import { HiLightBulb } from "react-icons/hi";
import { IoMdBug, IoIosPaper } from "react-icons/io";
import { TbFileAnalytics } from "react-icons/tb";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdAutoMode } from "react-icons/md";

import { FaAward } from "react-icons/fa6";
import { MdOutlineWorkspacePremium } from "react-icons/md";

import VideoModal from "../../../components/ui/VideoModal";

import ContactForm from "../../../components/ui/ContactForm";
import cLogo1 from "/public/img/client/techlogo1.png";
import cLogo2 from "/public/img/client/brandname1.png";
import cLogo3 from "/public/img/client/brandname2.png";
import cLogo4 from "/public/img/client/techlogo2.png";
import Client from "../../../components/ui/Client";
import PricePlan from "../../../components/ui/PricePlan";

import Portfolio from "../../../components/ui/Portfolio";
import Counter from "../../../components/ui/Counter";

import Footer from "../../../components/ui/Footer/Footer";
import Accrodian from "../../../components/ui/Accrodian";
import HomeBlog from "../../../components/ui/blog/HomeBlog";
import Services from "../../../components/ui/service/Services";

import CardImage from "../../../components/ui/CardImage";
export const metadata = {
  title: "Home Two-Graptor",
  description: "Technology & IT Solutions ",
};
const HomeOne = () => {
  return (
    <div>
      {/* Hero Banner Start --- */}
      <section className=" relative overflow-hidden bg-[url('/img/home1/home-banner.jpg')] bg-no-repeat bg-cover bg-center py-11 bg-secondary">
        <div className="container mx-auto grid grid-cols-12 xs:px-3 px-0">
          <div className="sm:col-span-7 xs:col-span-8 col-span-10 items-center">
            <div className="relative  mt-20 ml-6">
              <h5
                className={`${rubik.className} text-white font-medium text-md leading-[22px] capitalize  mb-6 relative after:relative after:-right-6 after:-top-[3px] after:w-[60px] after:h-[2px] after:bg-[#F0F4F9] after:content-[''] after:inline-block`}
              >
                Markets & Resources
              </h5>
              <h2 className="xl:text-[80px] lg:text-[72px] mb-[38px] md:text-[55px] sm:text-5xl text-4xl xl:leading-[96px] lg:leading-[80px] md:leading-[65px] text-white font-bold animated">
                Excellent IT services for your success
              </h2>
              <div className="flex flex-wrap mt-12 ">
                <Link
                  href="/contact"
                  className={`${rubik.className}  h-[58px] flex gap-6 items-center text-[16px]  leading-[.8] text-white overflow-hidden relative z-[1] text-center capitalize font-medium bg-primary py-[14px] px-[25px]  cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  hover:before:h-full hover:before:top-auto hover:before:bottom-0`}
                >
                  Get A Quote
                  <PiArrowRightDuotone size={20} className=" " />
                </Link>
                <VideoModal />
              </div>
            </div>
          </div>
          <div
            style={{ backgroundClip: "border-box" }}
            className="col-span-5 bg-transparent border-none rounded-[0]"
          >
            <CardImage />
          </div>
        </div>
      </section>
      {/*  Hero Banner Start---- */}

      {/*   About--Start */}
      <section className="relative py-[120px]">
        <div className="container mx-auto grid sm:grid-cols-2 ">
          <div className=" relative sm:px-1.5 px-6">
            <Image
              className="animated-img rounded-[5px] absolute sm:right-7 right-10  top-[73px] -z-[1] "
              src={ring}
              draggable={false}
              alt="Feature"
            />
            <Image
              src={feature}
              className=" rounded-[5px]"
              alt="Animation Ring"
            />
            <Image
              className="animated-img2  rounded-[5px] absolute sm:-left-[42px]   bottom-[50px] -z-[1]"
              src={round}
              alt="Animation Round"
            />
          </div>
          <div className="relative pl-7 ">
            <h6 className=" text-base sm:mt-0 mt-8 leading-5 text-primary font-medium uppercase xs:mb-4">
              <span className="w-[81px] h-[3px] inline-block bg-primary mr-[15px] relative -top-[3px]"></span>
              Our Specialty
            </h6>
            <h2 className=" lg:text-5xl md:text-4xl sm:text-3xl xs:text-[28px] text-2xl  font-bold lg:leading-[58px] md:leading-[48px] sm:leading-[40px] xs:leading-[36px] sm:mb-6 mb-3">
              Over 25+ Years Helping Brands to Reach Full Potential
            </h2>
            <p className=" mb-5 text-[17px] leading-[26px] text-secondary font-normal ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo.
            </p>
            <div className="grid lg:grid-cols-2 space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 bg-primary rounded-full flex items-center justify-center font-bold">
                  <HiLightBulb size={20} color="white" />
                </span>
                <p className="capitalize text-base text-secondary font-bold">
                  Experts Problem Solvers
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 bg-primary rounded-full flex items-center justify-center font-bold">
                  <IoMdBug size={20} color="white" />
                </span>
                <p className="capitalize text-base text-secondary font-bold">
                  Regular Updates & Bug fixes
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 bg-primary rounded-full flex items-center justify-center font-bold">
                  <TbFileAnalytics size={20} color="white" />
                </span>
                <p className="capitalize text-base text-secondary font-bold">
                  Creative Product Analitic
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 bg-primary rounded-full flex items-center justify-center font-bold">
                  <BsFillQuestionCircleFill size={20} color="white" />
                </span>
                <p className="capitalize text-base text-secondary font-bold">
                  High-Rated Quick Support
                </p>
              </div>
            </div>
            <Link
              href="/About"
              className={`${rubik.className} h-[50px]  flex items-center text-[15px] leading-[.8] text-white overflow-hidden relative z-[1] text-center capitalize font-medium w-[170px] mt-10 bg-primary py-[14px] px-[25px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:content-[''] before:w-full before:h-0 before:absolute before:left-0 before:bottom-0 before:touch-auto before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0   hover:before:h-full hover:before:top-0`}
            >
              about us <PiArrowRightDuotone size={20} className="ml-7" />
            </Link>
          </div>
        </div>
      </section>

      {/* About--End */}

      {/* Service--Start */}
      <section className="  bg-secondary pt-[116px] pb-[345px]  relative bg-[url('/img/bg/service-bg.png')] bg-center bg-cover bg-no-repeat ">
        <div className="container mx-auto xs:px-6 px-3">
          <div className=" grid grid-cols-12">
            <div className="xs:col-start-3 xs:col-span-8 col-start-2 col-span-10 text-center">
              <h6 className="title text-white">What we do</h6>
              <h2 className=" lg:text-[48px] md:text-[40px] sm:text-[36px] xs:text-[30px] text-[23px] md:leading-[58px] sm:leading-[50px] xs:leading-[45px] font-bold mb-10 text-white">
                We Are Offering All Kinds of IT Solutions Services
              </h2>
            </div>
          </div>

          <Services />
        </div>
      </section>

      {/* Service--End */}

      {/* FAQ--Start */}
      <section className=" bg-[#f0f4f9]  pb-11">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12  bg-white relative rounded-[10px] py-[65px] lg:px-[45px] px-4 z-[3] -mt-[260px]">
            <div className="md:col-span-5 col-span-12">
              <h2 className="lg:text-[25px] text-[22px] text-center leading-[30px] mb-[12px] font-bold text-[#191919]">
                Schedule Your Appointment
              </h2>
              <p className="text-lg font-normal text-secondary text-center mb-7">
                We here to help you 24/7 with experts
              </p>
              <ContactForm />
            </div>
            <div className="md:col-span-7 col-span-12">
              <Accrodian />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ--End */}

      {/* Client--Start */}
      <section className="bg-[#f0f4f9] relative pt-[75px] pb-[68px] ">
        <div className="container mx-auto px-6">
          <div className="grid gap-5 justify-center md:grid-cols-4  xs:grid-cols-2  ">
            <Client logo={cLogo3} />
            <Client logo={cLogo2} />
            <Client logo={cLogo4} />
            <Client logo={cLogo1} />
          </div>
        </div>
      </section>

      {/* Client--End */}

      {/* Price--Start */}
      <section className="relative pt-[116px] pb-[85px]">
        <div className="container mx-auto xs:px-3 px-4">
          <h6 className="  text-center">Let’s Work</h6>
          <h2 className="text-5xl leading-[58px] font-bold mb-10 text-[#191919] text-center">
            Pricing Plans
          </h2>
          <div className="grid  md:grid-cols-3 xs:grid-cols-2  gap-8">
            <PricePlan icon={<MdAutoMode />} title="basic plan" price="49.00" />
            <PricePlan icon={<FaAward />} title="premimum plan" price="69.00" />
            <PricePlan
              icon={<MdOutlineWorkspacePremium />}
              title="business plan"
              price="89.00"
            />
          </div>
        </div>
      </section>

      {/* Price--End */}

      {/* Portfolio--Start */}
      <section className="relative bg-[#f0f4f9] pt-[120px] xl:px-8 px-4 pb-[244px]">
        <Portfolio />
      </section>

      {/* Portfolio--End */}

      {/* Counter--Start */}
      <section className="relative -mt-[150px]">
        <div className="container mx-auto xl:px-6 px-3">
          <div className="bg-[url('/img/bg/counter-bg.png')] relative   w-full rounded-[10px] bg-[#686ee2] z-[2]  py-10 bg-center bg-auto bg-no-repeat">
            <Counter />
          </div>
        </div>
      </section>

      {/* Counter--End */}

      {/* Blog--Start  */}

      <section
        style={{ padding: "116px 0 90px" }}
        className="relative pt-[116px]"
      >
        <div className="container mx-auto xs:px-6 px-3">
          <div>
            <h6 className="title  text-center">Blogs</h6>
            <h2 className="text-5xl leading-[58px] font-bold mb-10 text-[#191919] text-center">
              Out Latest Articles
            </h2>
          </div>
          <HomeBlog />
        </div>
      </section>

      {/* Blog--End  */}

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default HomeOne;
