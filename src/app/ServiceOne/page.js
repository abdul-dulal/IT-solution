import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Services from "../../../components/ui/service/ServiceThree";
import { GiMaterialsScience } from "react-icons/gi";
import { BiLogoSlack } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { TbBrandWebflow } from "react-icons/tb";
import { GoProjectSymlink } from "react-icons/go";
import { PiShootingStarThin } from "react-icons/pi";
import Contact from "../../../components/ui/Contact";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
import Work from "../../../components/ui/Work";
const ServiceOne = () => {
  return (
    <div>
      <BreadCumb currentPage="Services" />

      {/* Service Start */}

      <section className=" relative bg-[#f0f4f9] pt-[116px] pb-[90px]">
        <div className="container mx-auto xs:px-6 px-4">
          <div className="text-center">
            <h6 className="">What we do</h6>
            <h2 className="text-5xl leading-[58px] font-bold mb-10 text-[#191919] text-center">
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
        <Work />
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
