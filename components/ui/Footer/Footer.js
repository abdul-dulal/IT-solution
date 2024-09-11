import { rubik } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import { MdOutlineMail } from "react-icons/md";

import footer1 from "/public/img/footer-1.jpg";
import footer2 from "/public/img/footer-2.jpg";
import blog from "/public/Blog.json";
import Link from "next/link";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";
import portfoli from "/public/Portfolio.json";
const Footer = () => {
  return (
    <footer className="footer bg-[url('/img/bg/footer-bg.png')] bg-center bg-auto bg-no-repeat relative bg-[#081845] pt-[60px]">
      <div className="container mx-auto xs:px-6 px-4">
        <div className="mailchimp-area relative w-full sm:flex justify-between border-b border-solid border-[rgba(255,255,255,0.1)] pb-11">
          <h3 className="md:text-[28px] sm:text-xl xs:text-[28px] text-[28px] md:leading-[38px] sm:leading-[30px] text-white font-bold">
            Get notified about the event! <br className="xs:block hidden" />
            Subscribe today
          </h3>

          <form className=" relative md:w-[570px] sm:w-[400px] xs:w-[400px] w-full sm:py-0 py-7">
            <input
              type="email"
              name="EMAIL"
              placeholder="Email Address"
              className={`${rubik.className} w-full h-[73px] border-none bg-[rgba(255,255,255,0.1)] rounded-[10px] outline-none placeholder:text-[15px] placeholder:text-[rgba(255,255,255,0.8)] placeholder:font-normal px-7 mb-4 `}
              required
            />
            <button
              type="submit"
              className={`${rubik.className} h-[60px] text-[15px] leading-[60px] text-white border-none text-center capitalize bg-primary font-bold rounded-[10px] sm:absolute right-[6px] top-[6px] px-11 outline-none transition-all duration-400 hover:bg-[#081845]`}
            >
              <MdOutlineMail size={18} className="inline-block mr-3" />
              Subscribe
            </button>
          </form>
        </div>
        <div className="grid grid-cols-12">
          <div className="lg:col-span-4 xs:col-span-6 col-span-12">
            <FooterSocial />
          </div>
          <div className="lg:col-span-3 xs:col-span-6 col-span-12">
            <aside className=" mt-[60px] mb-[45px]">
              <h3 className=" text-xl leading-[0.8] uppercase relative mt-[13px] mb-[37px] border-none text-white pl-[18px] font-bold after:absolute after:-bottom-[6px] after:left-0 after:h-7 after:w-1 after:bg-primary after:content-['']">
                IT Services
              </h3>
              <ul>
                {portfoli.slice(0, 5).map((item) => {
                  return (
                    <li
                      key={item.id}
                      className={`${rubik.className} block relative text-[15px] leading-[36px] text-[rgba(255,255,255,0.8)] mb-[2px] before:content-['--'] before:text-[rgba(255,255,255,0.8)] before:tracking-[0] before:mr-2 before:transition-all before:ease-in-out before:duration-300 hover:before:mr-[13px] hover:before:text-primary`}
                    >
                      <Link
                        href={`portfolio/${item.title}`}
                        className="inline-block capitalize hover:text-primary "
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
          <div className="lg:col-span-5 col-span-12">
            <aside className="widget relative mt-[60px] mb-[45px]">
              <h3 className=" text-xl leading-[0.8] uppercase relative mt-[13px] mb-[37px] border-none text-white pl-[18px] font-bold after:absolute after:-bottom-[6px] after:left-0 after:h-7 after:w-1 after:bg-primary after:content-['']">
                latest news
              </h3>
              {blog.slice(0, 2).map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`${rubik.className} sf_s1_post relative pl-[100px] mb-5`}
                  >
                    <Image
                      src={item.img}
                      width={80}
                      height={80}
                      className="w-20 h-20 absolute top-0 left-0"
                      alt={item.title}
                    />
                    <h5
                      className={`${rubik.className} text-[rgba(255,255,255,0.8)] text-lg font-medium leading-[26px] mb-[5px]`}
                    >
                      <Link
                        href={`/blog/${item.title}`}
                        className="hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    </h5>
                    <p
                      className={`${rubik.className} text-lg font-normal text-[rgb(86,88,114)]`}
                    >
                      {3 + item.id} days ago
                    </p>
                  </div>
                );
              })}
            </aside>
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
