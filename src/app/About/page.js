import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import ProgressBar from "../../../components/ui/Progressbar";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
import VideoModalTwo from "../../../components/VideoModal2";
import Work from "../../../components/ui/Work";
import TeamSlider from "../../../components/ui/team/TeamSlider";
import ClientSlider from "../../../components/ui/team/ClientSlider";
import Contact from "../../../components/ui/Contact";
import AboutLeft from "../../../components/about/AboutLeft";
import AboutBottom from "../../../components/about/AboutBottom";

export const metadata = {
  title: "About Us-Graptor",
  description: "Technology & IT Solutions ",
};

const About = () => {
  return (
    <div>
      <BreadCumb currentPage="about" />

      {/* About--Start */}

      <section className="relative pt-[120px]">
        <div className="container mx-auto xs:px-6 px-4">
          <div className="grid md:grid-cols-2 xl:gap-4 gap-10 ">
            <AboutLeft />

            <div className=" relative">
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

      {/* Work Process */}
      <section className="relative pt-28 pb-[120px]">
        <Work />
      </section>

      {/* Team--Sart */}
      <section className="bg-[#081845] pt-[116px] pb-[147px] bg-[url('/img/bg/service-bg.png')] bg-center bg-cover bg-no-repeat relative">
        <div className="container mx-auto xl:px-6 px-4">
          <h6 className=" text-capitalize text-white text-center">
            Meet Our Team
          </h6>
          <h2 className=" xs:text-5xl text-3xl text-center text-white">
            Our Creative Team
          </h2>
        </div>
      </section>

      <TeamSlider />

      {/* Team--End */}

      {/* Testimonial--Start */}
      <section className="relative pt-[116px] pb-[120px] ">
        <div className="container mx-auto xl:px-6 px-4">
          <h6 className=" text-capitalize  ">Client Testimonials</h6>
          <h2 className=" sm:text-5xl text-3xl mb-12 text-[rgb(25,25,25)]">
            What our clients say
          </h2>
          <ClientSlider />
        </div>
      </section>
      {/* Testimonial--End */}

      {/* Contact */}
      <Contact />
      <FooterTwo />
    </div>
  );
};

export default About;
