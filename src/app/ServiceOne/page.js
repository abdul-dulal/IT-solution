import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Services from "../../../components/ui/service/ServiceThree";
import { GiMaterialsScience } from "react-icons/gi";
import { BiLogoSlack } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { TbBrandWebflow } from "react-icons/tb";
import { GoProjectSymlink } from "react-icons/go";
import { PiShootingStarThin } from "react-icons/pi";
import WorkProcess from "../../../components/ui/WorkProcess";
import { PiTargetLight } from "react-icons/pi";
import { PiUserSwitchDuotone } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import Contact from "../../../components/ui/Contact";
import FooterSocial from "../../../components/ui/Footer/FooterSocial";
import FooterBottom from "../../../components/ui/Footer/FooterBottom";
import { rubik } from "../fonts";
import Link from "next/link";
const ServiceOne = () => {
  return (
    <div>
      <BreadCumb currentPage="Services" />

      {/* Service Start */}

      <section class=" relative bg-[#f0f4f9] pt-[116px] pb-[90px]">
        <div className="container mx-auto xs:px-6 px-4">
          <div class="text-center">
            <h6 class="">What we do</h6>
            <h2 class="text-5xl leading-[58px] font-bold mb-10 text-[#191919] text-center">
              Service for You
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
            <Services
              title="Software Development"
              icon={<GiMaterialsScience />}
            />
            <Services title="SEO Optimized Expert" icon={<BiLogoSlack />} />
            <Services title="Analytic Solutions" icon={<FiSettings />} />
            <Services title="Web Development" icon={<TbBrandWebflow />} />
            <Services title="Project Reporting" icon={<GoProjectSymlink />} />
            <Services title="Business Analysis" icon={<PiShootingStarThin />} />
          </div>
        </div>
      </section>

      {/* Service End */}

      {/* Work Process Start */}
      <section className="relative pt-28 pb-[120px]">
        <div className="container mx-auto xs:px-6 px-4">
          <h6 class="text-center ">Our Work Process</h6>
          <h2 class="text-center">
            We Complete Every <br /> Step Carefully
          </h2>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-9">
            <WorkProcess
              title="Collecting Info Data"
              serial="01"
              icon={<PiUserSwitchDuotone />}
            />
            <WorkProcess
              title="Setup Work Target"
              serial="02"
              icon={<PiTargetLight />}
            />
            <WorkProcess
              title="Creative Ideas"
              serial="03"
              icon={<FaRegLightbulb />}
            />
          </div>
        </div>
      </section>

      {/* Work Process End*/}

      {/* Contact Start */}

      <Contact />
      {/* Contact End */}

      {/* Footer Start */}

      <footer class="footer bg-[url('/img/bg/footer-bg.png')] bg-center bg-auto bg-no-repeat relative bg-[#081845] pt-[60px]">
        <div class="container mx-auto xs:px-6 px-4">
          <div class="grid grid-cols-12 ">
            <div class="lg:col-span-4 xs:col-span-6 col-span-12">
              <FooterSocial />
            </div>
            <div class="lg:col-span-3 xs:col-span-6 col-span-12">
              <aside class=" mt-[60px] mb-[45px]">
                <h3 class=" text-xl leading-[0.8] uppercase relative mt-[13px] mb-[37px] border-none text-white pl-[18px] font-bold after:absolute after:-bottom-[6px] after:left-0 after:h-7 after:w-1 after:bg-primary after:content-['']">
                  Contact us
                </h3>
                <div class=" relative pl-7 mb-6">
                  <IoLocation className="text-lg text-white absolute left-0 top-[5px]" />

                  <p class="text-[rgba(255,255,255,0.8)]">
                    <Link
                      href="https://www.google.com/maps"
                      className="hover:text-primary"
                    >
                      2072 Pinnickinick Street, WA 98370
                    </Link>
                  </p>
                </div>
                <div class=" relative pl-7 mb-6">
                  <FaPhone className="text-lg text-white absolute left-0 top-[5px]" />

                  <p class="text-[rgba(255,255,255,0.8)]">
                    <Link href="tel:1245698909" className="hover:text-primary">
                      + 124 569 89 09
                    </Link>
                  </p>
                </div>
                <div class=" relative pl-7 mb-6">
                  <TfiEmail className="text-lg text-white absolute left-0 top-[5px]" />

                  <p class="text-[rgba(255,255,255,0.8)]">
                    <Link
                      href="mailto:yourname@mail.com"
                      className="hover:text-primary"
                    >
                      Yourname@mail.com
                    </Link>
                  </p>
                </div>
              </aside>
            </div>
            <div class="lg:col-span-4 col-span-12 lg:ml-24">
              <aside class=" mt-[60px] mb-[45px]">
                <h3 class=" text-xl leading-[0.8] uppercase relative mt-[13px] mb-[37px] border-none text-white pl-[18px] font-bold after:absolute after:-bottom-[6px] after:left-0 after:h-7 after:w-1 after:bg-primary after:content-['']">
                  Newsletters
                </h3>
                <p className="text-white ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at est
                </p>
                <form class="relative xs:w-[350px] w-[300px] mt-10">
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Email Address"
                    required=""
                    className={`${rubik.className} w-full h-[68px] border-none bg-[rgba(255,255,255,0.1)] rounded-full outline-none text-[16px] text-[rgba(255,255,255,0.8)] font-normal px-7 mb-4`}
                  />
                  <button
                    type="submit"
                    className="absolute  right-2 top-1 h-[54px] text-[15px] leading-[60px] text-white border-none font-bold bg-primary hover:bg-secondary rounded-full     px-5 outline-none transition-all duration-400"
                  >
                    <TfiEmail />
                  </button>
                </form>
              </aside>
            </div>
          </div>

          <FooterBottom />
        </div>
      </footer>

      {/* Footer End */}
    </div>
  );
};

export default ServiceOne;
