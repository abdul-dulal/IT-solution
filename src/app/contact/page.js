import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";

import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import ContactTwo from "../../../components/ui/ContactTwo";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";

export const metadata = {
  title: "Contact-Graptor",
  description: "Technology & IT Solutions ",
};
const Contact = () => {
  return (
    <div>
      <BreadCumb currentPage="Contact" />

      <section className="contactSetion relative pt-[150px] pb-[120px]">
        <div className="container mx-auto xs:px-4 px-3">
          <div className="grid xl:grid-cols-3  sm:grid-cols-2 gap-8">
            <div
              style={{ padding: "59px 40px 27px" }}
              className=" relative  mb-[120px] border border-solid border-[#ececec] transition-all duration-300 ease-in-out"
            >
              <span className="icon flex items-center justify-center w-[76px] h-[65px] bg-primary rounded-[10px] text-center text-[24px] leading-[65px] text-white absolute left-10 -top-[33px]">
                <FaPhoneAlt />
              </span>
              <h5 className="text-[26px] leading-[30px] font-bold mb-3">
                Phone
              </h5>
              <p>
                +(066) 19 5017 800
                <br /> +(088) 29 6027 900
              </p>
            </div>

            <div
              style={{ padding: "59px 40px 27px" }}
              className=" relative  mb-[120px] border border-solid border-[#ececec] transition-all duration-300 ease-in-out"
            >
              <span className="icon flex items-center justify-center w-[76px] h-[65px] bg-primary rounded-[10px] text-center text-[24px] leading-[65px] text-white absolute left-10 -top-[33px]">
                <TfiEmail />
              </span>
              <h5 className="text-[26px] leading-[30px] font-bold mb-3">
                Email
              </h5>
              <p>
                info.contact@gmail.co
                <br /> name@website.com
              </p>
            </div>

            <div
              style={{ padding: "59px 40px 27px" }}
              className=" relative  mb-[120px] border border-solid border-[#ececec] transition-all duration-300 ease-in-out"
            >
              <span className="icon flex items-center justify-center w-[76px] h-[65px] bg-primary rounded-[10px] text-center text-[24px] leading-[65px] text-white absolute left-10 -top-[33px]">
                <SlLocationPin />
              </span>
              <h5 className="text-[26px] leading-[30px] font-bold mb-3">
                Location
              </h5>
              <p>
                420 Love Street 133/2 Mirpur, <br /> Nevis Caribbean Dhaka
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className=" text-center mb-10">Contact Form</h3>
            <ContactTwo />
          </div>
        </div>
      </section>
      <div className="grap-map grayscale relative leading-[.8] overflow-hidden">
        <iframe
          style={{ filter: "grayscale(100%)" }}
          className="w-full h-[550px] border-none"
          src="https://www.google.com/maps/embed/v1/place?q=West+Englewood+Chicago,+IL+60636+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
      <FooterTwo />
    </div>
  );
};

export default Contact;
