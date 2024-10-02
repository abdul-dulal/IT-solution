import React from "react";
import Slider from "../../../components/home3/Slider";
import Services from "../../../components/ui/service/ServiceTwo";
import Image from "next/image";
import layer from "/public/img/home3/layer.png";
import { CiSettings } from "react-icons/ci";
import Work from "../../../components/ui/Work";

import portfolio from "/public/Portfolio.json";

import ClientTestimonial from "../../../components/home3/ClientTestimonial";
import PricePlanTwo from "../../../components/ui/PricePlanTwo";
import { MdAutoMode, MdOutlineWorkspacePremium } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import Contact from "../../../components/home3/Contact";

import FooterTwo from "../../../components/ui/Footer/FooterTwo";
import HomeBlogGrid from "../../../components/home3/HomeBlogGrid";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
export const metadata = {
  title: "Home Three-Graptor",
  description: "Technology & IT Solutions ",
};
const HomeThree = () => {
  const allPortfolio = portfolio.slice(0, 6);
  return (
    <div>
      {/* Slider--Start */}
      <section className="relative overflow-hidden">
        <Slider />
      </section>
      {/* Slider--End */}

      {/* Service--Start */}
      <section className="service-section-3 relative bg-[#f0f4f9] pt-[116px] pb-[90px]">
        <div className="container mx-auto xs:px-6 px-4">
          <div className="text-center">
            <h6 className="">What we do</h6>
            <h2 className=" mb-10 text-[#191919] text-center">
              Service for You
            </h2>
          </div>
          <Services />
        </div>
      </section>
      {/* Service--End */}

      {/* About--Start */}

      <section className="about-section-2 relative pt-[120px] pb-[10px]">
        <div className="container mx-auto xs:px-6 px-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="">
              <Image src={layer} alt="Layer" />
            </div>

            <div className="">
              <h6 className=" text-base sm:mt-0 mt-8 leading-5 text-primary font-medium uppercase xs:mb-4">
                <span className="w-[81px] h-[3px] inline-block bg-primary mr-[15px] relative -top-[3px]"></span>
                About us
              </h6>
              <h2 className="lg:text-[46px] xs:text-4xl text-3xl lg:leading-[58px] xs:leading-[45px] leading-[42px]  mb-5">
                Eliminate the IT challenges your business is facing
              </h2>
              <p className="">
                Lorem Ipsum is simply dummy text of free available in market
                typesetting industry has been the industrys standard dummy text
                ever. Lorem Ipsum is simply dummy text of free available in
                market
              </p>
              <div className=" flex xs:gap-6 gap-4 my-10">
                <div>
                  <span className="flex items-center justify-center w-[99px] h-[99px] text-[40px] leading-[103px] rounded-[50%] bg-[#f0f4f9] text-primary">
                    <CiSettings className="inline-block" />
                  </span>
                </div>
                <div>
                  <h5>Company Details Gather. </h5>
                  <p className="text-lg leading-[30px] font-normal text-[#565872]">
                    Lorem Ipsum is simply dummy free available typesetting
                    industry been the industry standard
                  </p>
                </div>
              </div>
              <div
                style={{
                  boxShadow: " 0px 0 20px 0px rgb(152 152 152 / 16%)",
                  padding: "25px 60px 30px",
                }}
                className="ab-quote bg-white rounded-[3px] relative after:absolute after:-left-[3px] after:w-[6px] after:h-[65px] after:content-[''] after:bg-primary after:top-0 after:bottom-0 after:m-auto after:rounded-[10px]"
              >
                Lorem Ipsum simply dummy available industry been the industry
                standard.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About--End */}

      {/* Work--Process--Start */}
      <section className="relative pt-28 pb-[120px]">
        <Work />
      </section>
      {/* Work--Process--End*/}

      {/* Portfolio--Start */}
      <section className="relative bg-[#f0f4f9] py-[120px]">
        <div className="container mx-auto xs:px-6 px-4">
          <h6 className="text-center ">Case Study</h6>
          <h2 className="lg:text-[46px] xs:text-4xl text-3xl lg:leading-[58px] xs:leading-[45px] leading-[42px]  mb-8 text-center">
            Our Recent Launched Projects
            <br /> Available into Market
          </h2>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3">
            {allPortfolio?.map(({ id, img, tech, title }) => {
              const encTitle = encodeURIComponent(title);
              const encTech = encodeURIComponent(tech);
              return (
                <div
                  key={id}
                  className=" group relative overflow-hidden m-[-2.5px]"
                >
                  <Image
                    src={img}
                    width={500}
                    height={500}
                    className="w-full rounded-[10px]"
                    alt=""
                  />
                  <div
                    style={{
                      transition:
                        "transform 0.4s cubic-bezier(0.34, 0.66, 0.79, 0.58), opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
                    }}
                    className="fs-hover absolute content-[''] left-0 top-0 w-full h-full rounded-[10px] bg-[rgba(104,110,226,0.8)] opacity-0 group-hover:opacity-100"
                  >
                    <div className="fs-content absolute left-0 top-[50%] -translate-y-[50%] w-full text-center pb-[15px] z-[2]">
                      <Link
                        href={`portfolio/${encTitle}`}
                        style={{
                          boxShadow: "0px 1px 54px 0px rgb(47 84 238 / 46%)",
                        }}
                        className="fm-more relative right-auto inline-block bg-white w-[57px] h-[57px] text-center rounded-[50%] text-2xl text-primary leading-[60px] mb-[22px]  scale-75 opacity-0 invisible transition-all ease-in-out duration-300 group-hover:scale-100 group-hover:visible group-hover:opacity-100"
                      >
                        <span className="w-full h-full flex items-center justify-center">
                          <AiOutlinePlus className="" />
                        </span>
                      </Link>
                      <h5 className="text-xl leading-[30px] text-white mb-[3px] invisible opacity-0 translate-y-[30px] transition-all ease-in-out duration-700 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
                        <Link
                          href={`portfolio/${encTitle}`}
                          className="hover:text-[#191919] hover:transition-all hover:ease-linear hover:duration-300"
                        >
                          {title}
                        </Link>
                      </h5>
                      <p className="cats text-[rgba(255,255,255,0.8)] m-0 translate-y-[30px] opacity-0 invisible transition-all ease-in-out duration-1000 hover:text-[#191919] group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
                        <Link href={`/portfolioCategory/${encTech}`}>
                          {tech}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Portfolio--End */}

      {/* Testimonial--Start */}

      <section
        style={{ padding: "123px 0 172px" }}
        className="testibg-section -z-20 bg-[url('/img/home3/shadowbg.jpg')] bg-center bg-cover bg-fixed bg-no-repeat relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(8,24,69,0.9)] after:-z-10"
      >
        <div className="container mx-auto xs:px-0 px-3 z-[33]">
          <div className=" text-center">
            <h6 className=" text-white capitalize">Client Testimonials</h6>
            <h2 className=" text-white">What our clients say</h2>
          </div>
        </div>
      </section>

      <section className=" -mt-[135px] z-[99]">
        <div className="container mx-auto px-3">
          <ClientTestimonial />
        </div>
      </section>

      {/* Testimonial--End */}

      {/* Price--Start */}
      <section className="relative pt-[116px] pb-[85px]">
        <div className="container mx-auto xs:px-9 px-3">
          <h6 className="  text-center">Let’s Work</h6>
          <h2 className=" mb-10 text-[#191919] text-center">Pricing Plans</h2>
          <div className="grid  lg:grid-cols-3 sm:grid-cols-2  gap-8">
            <PricePlanTwo title="Basic Plan" icon={<MdAutoMode />} price="49" />
            <PricePlanTwo title="Premium Plan" icon={<FaAward />} price="69" />
            <PricePlanTwo
              title="Business Plan"
              icon={<MdOutlineWorkspacePremium />}
              price="89"
            />
          </div>
        </div>
      </section>
      {/* Price--End */}

      {/* Contact--Start */}
      <section className="bg-secondary pt-[120px] pb-[115px] bg-center  bg-cover bg-no-repeat relative bg-[url('/img/home3/contact-bg.png')]">
        <Contact />
      </section>
      {/* Contact--End */}

      {/* Blog--start */}

      <section
        style={{ padding: "116px 0 90px" }}
        className="relative pt-[116px]"
      >
        <div className="container mx-auto xs:px-6 px-3">
          <div>
            <h6 className="title  text-center">Blogs</h6>
            <h2 className="mb-10  text-center">Out Latest Articles</h2>
          </div>
          <HomeBlogGrid />
        </div>
      </section>
      {/* Blog--End */}

      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default HomeThree;
