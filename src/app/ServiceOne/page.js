import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Services from "../../../components/ui/service/ServiceOne";
import Contact from "../../../components/ui/Contact";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
import Work from "../../../components/ui/Work";

export const metadata = {
  title: "Service 01-Graptor",
  description: "Technology & IT Solutions ",
};

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
          <Services />
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
