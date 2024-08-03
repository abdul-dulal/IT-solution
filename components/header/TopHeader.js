import { rubik } from "@/app/fonts";
import React from "react";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const TopHeader = () => {
  return (
    <section className="bg-[#686EE2]  ">
      <div className="main-container flex items-center justify-between">
        <div
          className={`${rubik.className}  flex items-center   gap-9  py-4 text-white text-sm font-medium`}
        >
          <div className="flex  gap-3 items-center ">
            <LuPhone size={20} />
            <p>+ 124 569 89 09</p>
          </div>
          <div className="flex gap-3 items-center">
            <IoLocationOutline size={20} />
            <p>2072 Pinnickinick Street, WA 98370</p>
          </div>

          <div className="flex gap-3 items-center">
            <TfiEmail size={20} />
            <p>
              <a href="mailto:example@example.com" target="blank">
                info@website.com
              </a>
            </p>
          </div>
        </div>
        <div>
          <ul className="flex gap-3 text-[#F5F5F5] text-[17px] font-bold">
            <li className="hover:text-black delay-200 cursor-pointer">
              <a href="https://www.facebook.com/" target="blank">
                <FaFacebookF size={18} />
              </a>
            </li>
            <li className="hover:text-black delay-200 cursor-pointer">
              <a href="https://x.com/home" target="blank">
                <FaTwitter size={18} />
              </a>
            </li>
            <li className="hover:text-black delay-200 cursor-pointer">
              <a href="" target="blank">
                <FaWhatsapp size={18} />
              </a>
            </li>
            <li className="hover:text-black delay-200 cursor-pointer">
              <a href="https://www.instagram.com/" target="blank">
                <FaInstagram size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
