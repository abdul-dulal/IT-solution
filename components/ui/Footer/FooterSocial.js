import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { SlSocialPintarest } from "react-icons/sl";
import logo from "/public/img/main-logo.png";
import Link from "next/link";
const FooterSocial = () => {
  return (
    <aside className=" relative mt-[50px] mb-[45px]">
      <div className=" relative pr-5">
        <Link href="/HomeTwo">
          <Image src={logo} alt="Footer-Logo" />
        </Link>
        <p className="text-[rgba(255,255,255,0.8)] mt-7 mb-8 text-lg font-normal xs:pr-10 pr-0">
          We specialize in delivering reliable, innovative technology services
          that drive growth and efficiency
        </p>
        <div className="flex gap-3 relative">
          <Link
            href="https://www.facebook.com/"
            target="blank"
            className="flex items-center justify-center w-[37px] h-[37px] bg-[rgba(255,255,255,0.1)] rounded-[50%] text-center leading-[40px] text-white text-base  hover:bg-primary transition-all ease-in-out duration-300"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://twitter.com/"
            target="blank"
            className="flex items-center justify-center w-[37px] h-[37px] bg-[rgba(255,255,255,0.1)] rounded-[50%] text-center leading-[40px] text-white text-base  hover:bg-primary transition-all ease-in-out duration-300"
          >
            <FaTwitter />
          </Link>
          <Link
            href="http://instagram.com/"
            target="blank"
            className="flex items-center justify-center w-[37px] h-[37px] bg-[rgba(255,255,255,0.1)] rounded-[50%] text-center leading-[40px] text-white text-base  hover:bg-primary transition-all ease-in-out duration-300"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://google.com/"
            target="blank"
            className="flex items-center justify-center w-[37px] h-[37px] bg-[rgba(255,255,255,0.1)] rounded-[50%] text-center leading-[40px] text-white text-base  hover:bg-primary transition-all ease-in-out duration-300"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://google.com/"
            target="blank"
            className="flex items-center justify-center w-[37px] h-[37px] bg-[rgba(255,255,255,0.1)] rounded-[50%] text-center leading-[40px] text-white text-base  hover:bg-primary transition-all ease-in-out duration-300"
          >
            <SlSocialPintarest />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default FooterSocial;
