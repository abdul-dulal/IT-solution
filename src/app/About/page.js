import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Image from "next/image";
import hero from "/public/img/about/About-hero.jpg";
import { IoCallSharp } from "react-icons/io5";
import { rubik } from "../fonts";
import ProgressBar from "../../../components/ui/Progressbar";
import AboutCounter from "../../../components/ui/AboutCounter";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
import VideoModalTwo from "../../../components/VideoModal2";
import Work from "../../../components/ui/Work";
import TeamSlider from "../../../components/ui/team/TeamSlider";
import member1 from "/public/img/team/member1.png";
import { FaQuoteLeft } from "react-icons/fa";
import ClientSlider from "../../../components/ui/team/ClientSlider";
import Contact from "../../../components/ui/Contact";
const About = () => {
  return (
    <div>
      <BreadCumb currentPage="about" />

      {/* About Start */}

      <section class="relative py-[120px]">
        <div class="container mx-auto xs:px-6 px-4">
          <div class="grid md:grid-cols-2 xl:gap-4 gap-10 ">
            <div class="relative">
              <div class=" group relative pt-[27px] z-[2]">
                <Image src={hero} className="rounded-[29px]" alt="About" />
                <div class=" w-[298px]  h-[536px] xs:block hidden bg-primary rounded-[29px] absolute right-[13%] top-0 -z-[1] "></div>

                <VideoModalTwo />
              </div>
            </div>

            <div class=" relative">
              <h6 class=" text-base md:mt-0 mt-8 leading-5 text-primary font-medium uppercase xs:mb-4">
                <span className="w-[81px] h-[3px] inline-block bg-primary mr-[15px] relative -top-[3px]"></span>
                about us
              </h6>
              <h2 class="lg:text-[46px] xs:text-4xl text-3xl lg:leading-[58px] xs:leading-[45px] leading-[42px]  mb-5">
                We Provide Best Solution For Your Business
              </h2>
              <p class=" mb-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <div class=" relative mb-[25px]">
                <ProgressBar datacount={95} title="software development" />
                <ProgressBar datacount={85} title="Artificial Intelligence" />
                <ProgressBar datacount={80} title="web development" />
              </div>

              <div class="grid grid-cols-12">
                <div class="xs:col-span-7 col-span-12">
                  <div
                    style={{
                      boxShadow: "0px 6px 50px 0px rgba(37,37,37,0.05)",
                    }}
                    class={`${rubik.className}  relative bg-white flex items-center    py-[5px] xl:px-[40px] px-5 border-l-[5px] border-solid border-primary `}
                  >
                    <div className="w-[150px]">
                      <AboutCounter />
                    </div>

                    <h3
                      className={`${rubik.className} text-[16px] text-[rgb(8,24,69)] leading-[25px] font-bold `}
                    >
                      Years of Experience
                    </h3>
                  </div>
                </div>

                <div className="xs:col-span-5 col-span-12 relative">
                  <div class="   flex gap-3  after:bg-transparent pb-[60px] mt-8 shadow-none">
                    <div class="    w-12 h-12 min-w-12 min-h-12 leading-[48px] text-[22px] text-primary hover:bg-primary hover:text-white transition-all ease-in-out duration-400 cursor-pointer  text-center  border-2 border-solid border-[rgba(25,25,25,0.1)] rounded-[50%] flex items-center justify-center ">
                      <IoCallSharp className="" />
                    </div>
                    <div>
                      <h5 className="text-lg  text-[#565872] leading-[.8] font-normal mb-1">
                        Call Us
                      </h5>
                      <p
                        className={`${rubik.className} text-base text-[#081845] m-0 font-bold`}
                      >
                        360-779-2228
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About End */}

      {/* Work Process */}
      <section className="relative pt-28 pb-[120px]">
        <Work />
      </section>

      {/* Team Start */}
      <section className="bg-[#081845] pt-[116px] pb-[147px] bg-[url('/img/bg/service-bg.png')] bg-center bg-cover bg-no-repeat relative">
        <div className="container mx-auto xl:px-6 px-4">
          <h6 class=" text-capitalize text-white text-center">Meet Our Team</h6>
          <h2 class=" xs:text-5xl text-3xl text-center text-white">
            Our Creative Team
          </h2>
        </div>
      </section>

      {/* Team Slider */}
      <TeamSlider />

      {/* Team End */}

      {/* Footer */}

      {/* Testimonial Start */}
      <section className="relative pt-[116px] pb-[120px] ">
        <div className="container mx-auto xl:px-6 px-4">
          <h6 class=" text-capitalize  ">Client Testimonials</h6>
          <h2 class=" sm:text-5xl text-3xl mb-12 text-[rgb(25,25,25)]">
            What our clients say
          </h2>
          <ClientSlider />
        </div>
      </section>
      {/* Testimonial End */}

      {/* Contact */}
      <Contact />
      <FooterTwo />
    </div>
  );
};

export default About;
