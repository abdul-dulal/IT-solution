import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneVolume,
  FaTwitter,
} from "react-icons/fa";
import { IoClose, IoLogoWhatsapp, IoSearchOutline } from "react-icons/io5";
import { PiMapPinLineBold } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import logo from "/public/img/secondary.png";
import Link from "next/link";
import Image from "next/image";
const Sider = ({ isVisible, setIsVisible }) => {
  return (
    <div>
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.6)] w-full h-full  transition-transform duration-[.8s]   ${
          isVisible
            ? "translate-x-0 delay-100"
            : "translate-x-full   delay-500 "
        }`}
        style={{ zIndex: 999, cursor: "url(/img/close-sider.png), auto" }}
        onClick={() => setIsVisible(false)}
      >
        <div className="max-w-[360px] h-full z-[999] cursor-auto  bg-white pt-10 px-[30px] overflow-y-auto fixed right-0 top-0  ">
          <div
            className={`${
              isVisible
                ? "opacity-100 visible translate-y-0 transition-all duration-300 ease-in-out delay-[.9s]"
                : "translate-y-[25px] transition-all duration-300 ease-in-out invisible opacity-0  "
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              onClick={() => setIsVisible(false)}
              className=" absolute right-0 -top-[20px] text-xl w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] z-[99] text-[#1e2843] leading-[38px]  flex justify-center items-center hover:text-primary hover:border-primary"
            >
              <IoClose />
            </span>
            <div className="center_align">
              <div className=" relative">
                <div className=" relative mb-12">
                  <Link href="">
                    <Image src={logo} alt="Logo" />
                  </Link>
                </div>
                <p className="mb-7">
                  Graptor quisque placerat vitae lacus ut scelerisque. Fusce
                  luctus odio ac nibh luctus, in porttitor theo lacus egestas
                  etiusto odio data center.
                </p>
                <div className=" mb-[30px]">
                  <div className=" relative pl-[60px] mb-7">
                    <div className="text-center absolute left-0 top-[7px] text-[30px] text-[#1E2843] leading-[60px]">
                      <span className=" inline-block">
                        <FaPhoneVolume />
                      </span>
                    </div>
                    <h5 className="mb-[6px] text-[#191919]">Call Us</h5>
                    <Link href="tel:1.800.321.9876" target="blank">
                      <p className="hover:text-primary">1.800.321.9876</p>
                    </Link>
                  </div>
                </div>
                <div className=" mb-[20px]">
                  <div className=" relative pl-[60px] mb-7">
                    <div className="text-center absolute left-0 top-[7px] text-[30px] text-[#1E2843] leading-[60px]">
                      <span className=" inline-block">
                        <TfiEmail />
                      </span>
                    </div>
                    <h5 className="mb-[6px] text-[#191919]">Write us</h5>
                    <Link href="mailto:contact@website.com" target="blank">
                      <p className="hover:text-primary">contact@website.com</p>
                    </Link>
                  </div>
                </div>
                <div className=" mb-[30px]">
                  <div className=" relative pl-[60px] mb-7">
                    <div className="text-center absolute left-0 top-[7px] text-[30px] text-[#1E2843] leading-[60px]">
                      <span className=" inline-block">
                        <PiMapPinLineBold />
                      </span>
                    </div>
                    <h5 className="mb-[6px] text-[#191919]"> Address</h5>

                    <p className="hover:text-primary">
                      2416 Mapleview Drive Tampa, FL 33634
                    </p>
                  </div>
                </div>

                <ul className=" p-0 mt-[54px] flex mb-12">
                  <li className="inline-block">
                    <Link
                      href="https://www.facebook.com/"
                      target="blank"
                      className="w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] text-[#1e2843] leading-[38px] flex justify-center items-center text-[16px]  mr-3 hover:bg-primary hover:border-primary hover:text-white"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/"
                      target="blank"
                      className="w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] text-[#1e2843] leading-[38px] flex justify-center items-center text-[16px]  mr-3 hover:bg-primary hover:border-primary hover:text-white"
                    >
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://whatsapp.com/"
                      target="blank"
                      className="w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] text-[#1e2843] leading-[38px] flex justify-center items-center text-[16px]  mr-3 hover:bg-primary hover:border-primary hover:text-white"
                    >
                      <IoLogoWhatsapp />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://instagram.com/"
                      target="blank"
                      className="w-9 h-9 border border-solid border-[rgba(0,0,0,0.1)] rounded-[50%] text-[#1e2843] leading-[38px] flex justify-center items-center text-[16px]  mr-3 hover:bg-primary hover:border-primary hover:text-white"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sider;
