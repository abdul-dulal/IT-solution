import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Services from "../../../components/ui/service/ServiceTwo";
import {
  PiShootingStarThin,
  PiTargetLight,
  PiUserSwitchDuotone,
} from "react-icons/pi";
import WorkProcess from "../../../components/ui/WorkProcess";
import { FaRegLightbulb } from "react-icons/fa";
import Contact from "../../../components/ui/Contact";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";

export const metadata = {
  title: "Service 02-Graptor",
  description: "Technology & IT Solutions ",
};

const ServiceTwo = () => {
  return (
    <div>
      <BreadCumb currentPage="Service" />
      {/* Service Start */}
      <section className="service-section-3 relative bg-[#f0f4f9] pt-[116px] pb-[90px]">
        <div className="container mx-auto xs:px-6 px-4">
          <div className="text-center">
            <h6 className="">What we do</h6>
            <h2 className="mb-10  text-center">Service for You</h2>
          </div>
          <Services />
        </div>
      </section>

      {/* Service End */}

      {/* Work Process Start */}

      <section className="relative pt-28 pb-[120px]">
        <div className="container mx-auto xs:px-6 px-4">
          <h6 className="text-center ">Our Work Process</h6>
          <h2 className="text-center">
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
      {/* Work Process End */}

      {/* Contact */}
      <Contact />

      {/* Footer2 */}
      <FooterTwo />
    </div>
  );
};

export default ServiceTwo;
