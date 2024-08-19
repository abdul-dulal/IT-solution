import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Image from "next/image";
import hero from "/public/img/about/About-hero.jpg";
import rounded from "/public/img/about/rounded.png";
import { RiPlayLargeLine } from "react-icons/ri";
const About = () => {
  return (
    <div>
      <BreadCumb currentPage="about" />

      {/* About Start */}

      <section class="about-section-1 relative py-[120px]">
        <div class="container mx-auto xs:px-6 px-4">
          <div class="grid grid-cols-2">
            <div class="">
              <div class="video_image group relative pt-[27px] z-[2]">
                <Image src={hero} className="rounded-[29px]" alt="About" />
                <div class="bgcolor "></div>
                <a
                  style={{
                    boxShadow: " 0px 10px 30px 0px rgba(0, 0, 0, 0.07)",
                  }}
                  class="popup w-[229px] h-[229px] border-[11px] border-solid border-white rounded-[50%] text-center inline-block text-[34px] text-white absolute right-0 bottom-[120px] z-[2] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:rounded-[50%] after:content-[''] after:bg-[rgba(8,24,69,0.7)]"
                  href="https://player.vimeo.com/video/364758150"
                  data-rel="lightcase:myCollection:slideshow"
                >
                  <Image
                    src={rounded}
                    className="rounded-[50%]"
                    alt="Video Image"
                  />
                  <RiPlayLargeLine className="inline-block absolute left-0 leading-[206px] z-[2] right-0 top-0  bottom-0 m-auto " />
                </a>
              </div>
            </div>

            <div class="ab-content relative">
              <h6 class="sub-title text-base sm:mt-0 mt-8 leading-5 text-primary font-medium uppercase xs:mb-4">
                <span className="w-[81px] h-[3px] inline-block bg-primary mr-[15px] relative -top-[3px]"></span>
                about us
              </h6>
              <h2 class="sec-title">
                We Provide Best Solution For Your Business
              </h2>
              <p class="sec-desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <div class="single_skill" data-parcent="95">
                <h4>Software Development</h4>
                <div class="ss_parent">
                  <div class="ss_child"></div>
                  <span>95%</span>
                </div>
              </div>
              <div class="single_skill" data-parcent="85">
                <h4>Artificial Intelligence</h4>
                <div class="ss_parent">
                  <div class="ss_child"></div>
                  <span>85%</span>
                </div>
              </div>
              <div class="single_skill" data-parcent="80">
                <h4>Web Development</h4>
                <div class="ss_parent">
                  <div class="ss_child"></div>
                  <span>80%</span>
                </div>
              </div>
              <div class="divider"></div>
              <div class="row">
                <div class="col-lg-7">
                  <div class="yearsXP">
                    <h2 data-counter="25" class="timer">
                      25
                    </h2>
                    <h3>Years of Experience</h3>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="service-item-01 bg-transparent pb-[60px] mt-8 shadow-none">
                    <div class="ib-icon">
                      <i class="graptor-call"></i>
                    </div>
                    <h5>Call Us</h5>
                    <p>360-779-2228</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About End */}
    </div>
  );
};

export default About;
