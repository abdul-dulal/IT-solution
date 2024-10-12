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
import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="bg-primary  ">
      <div className="container mx-auto xs:px-4 px-3  xs:flex   items-center justify-between">
        <div
          className={`${rubik.className}  flex items-center   gap-9  py-4 text-white text-sm font-medium`}
        >
          <div className="xs:flex gap-4 mx-auto">
            <div className="flex  gap-3 items-center justify-center ">
              <LuPhone size={20} />
              <p
                className={`${rubik.className} text-[15px] text-white font-normal`}
              >
                + 124 569 89 09
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <IoLocationOutline size={20} />
              <p
                className={`${rubik.className} xs:text-[15px] text-sm text-white font-normal`}
              >
                2072 Pinnickinick Street, WA 98370
              </p>
            </div>
          </div>

          <div className="md:flex hidden gap-3 items-center  ">
            <TfiEmail size={20} />
            <p
              className={`${rubik.className} text-[15px] text-white font-normal`}
            >
              <Link href="mailto:example@example.com" target="blank">
                info@website.com
              </Link>
            </p>
          </div>
        </div>
        <div className="xs:pb-0 pb-5 flex justify-center ">
          <ul className="flex  gap-4 text-[#F5F5F5] text-[17px] font-bold">
            <li className="hover:text-base delay-200 cursor-pointer">
              <Link href="https://www.facebook.com/" target="blank">
                <FaFacebookF size={18} />
              </Link>
            </li>
            <li className="hover:text-base delay-200 cursor-pointer">
              <Link href="https://x.com/home" target="blank">
                <FaTwitter size={18} />
              </Link>
            </li>
            <li className="hover:text-base delay-200 cursor-pointer">
              <Link href="https://web.whatsapp.com/" target="blank">
                <FaWhatsapp size={18} />
              </Link>
            </li>
            <li className="hover:text-base delay-200 cursor-pointer">
              <Link href="https://www.instagram.com/" target="blank">
                <FaInstagram size={18} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
