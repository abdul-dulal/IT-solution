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
import Contact from "../../../components/ui/Contact";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
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

      {/* Contact */}

      <Contact />

      {/*Footer  */}

      <FooterTwo />
    </div>
  );
};

export default ServiceOne;
