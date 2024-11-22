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
        <div className="container mx-auto xl:px-[30px] xs:px-4 px-3">
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
        <div className="container mx-auto xl:px-[30px] xs:px-4 px-3">
          <h6 className="text-center ">Our Work Process</h6>
          <h2 className="lg:text-[46px] xs:text-4xl text-3xl lg:leading-[58px] xs:leading-[45px] leading-[42px]  mb-5 text-center">
            We Complete Every <br /> Step Carefully
          </h2>
          <Work />
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
