import { rubik } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { SlSocialPintarest } from "react-icons/sl";
import footer1 from "/public/img/footer-1.jpg";
import footer2 from "/public/img/footer-2.jpg";
import logo from "/public/img/main-logo.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer class="footer bg-[url('/img/bg/footer-bg.png')] bg-center bg-auto bg-no-repeat relative bg-[#081845] pt-[60px]">
      <div class="container mx-auto xs:px-6 px-4">
        <div class="mailchimp-area relative w-full sm:flex justify-between border-b border-solid border-[rgba(255,255,255,0.1)] pb-11">
          <h3 className="md:text-[28px] sm:text-xl xs:text-[28px] text-[28px] md:leading-[38px] sm:leading-[30px] text-white font-bold">
            Get notified about the event! <br className="xs:block hidden" />
            Subscribe today
          </h3>

          <form
            class="mc4wp-form relative md:w-[570px] sm:w-[400px] xs:w-[400px] w-full sm:py-0 py-7"
            method="post"
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="Email Address"
              className={`${rubik.className} w-full h-[73px] border-none bg-[rgba(255,255,255,0.1)] rounded-[10px] outline-none placeholder:text-[15px] placeholder:text-[rgba(255,255,255,0.8)] placeholder:font-normal px-7 mb-4 `}
              required=""
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
        <div class="grid grid-cols-12">
          <div class="lg:col-span-4 xs:col-span-6 col-span-12">
            <aside class="widget relative mt-[60px] mb-[45px]">
              <div class="about-widget relative pr-5">
                <a href="index.html">
                  <Image src={logo} alt="Footer-Logo" />
                </a>
                <p className="text-[rgba(255,255,255,0.8)] mt-7 mb-8 text-lg font-normal">
                  Sedut perspiciatis unde omnis iste natus error sitlutem acc
                  usantium doloremque denounce with illo inventore veritatis
                </p>
                <div class="flex gap-3 relative">
                  <Link
                    href="https://www.facebook.com/"
                    className="flex items-center justify-center w-[37px] h-[37px] bg-[rgba(255,255,255,0.1)] rounded-[50%] text-center leading-[40px] text-white text-base  hover:bg-primary transition-all ease-in-out duration-300"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href="https://twitter.com/"
                    className="flex items-center justify-center w-[37px] h-[37px] bg-[rgba(255,255,255,0.1)] rounded-[50%] text-center leading-[40px] text-white text-base  hover:bg-primary transition-all ease-in-out duration-300"
                  >
                    <FaTwitter />{" "}
                  </Link>
                  <Link
                    href="http://instagram.com/"
                    className="flex items-center justify-center w-[37px] h-[37px] bg-[rgba(255,255,255,0.1)] rounded-[50%] text-center leading-[40px] text-white text-base  hover:bg-primary transition-all ease-in-out duration-300"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="https://google.com/"
                    className="flex items-center justify-center w-[37px] h-[37px] bg-[rgba(255,255,255,0.1)] rounded-[50%] text-center leading-[40px] text-white text-base  hover:bg-primary transition-all ease-in-out duration-300"
                  >
                    <FaLinkedinIn />{" "}
                  </Link>
                  <Link
                    href="https://google.com/"
                    className="flex items-center justify-center w-[37px] h-[37px] bg-[rgba(255,255,255,0.1)] rounded-[50%] text-center leading-[40px] text-white text-base  hover:bg-primary transition-all ease-in-out duration-300"
                  >
                    <SlSocialPintarest />{" "}
                  </Link>
                </div>
              </div>
            </aside>
          </div>
          <div class="lg:col-span-3 xs:col-span-6 col-span-12">
            <aside class="widget mt-[60px] mb-[45px]">
              <h3 class="widget-title text-xl leading-[0.8] uppercase relative mt-[13px] mb-[37px] border-none text-white pl-[18px] font-bold after:absolute after:-bottom-[6px] after:left-0 after:h-7 after:w-1 after:bg-primary after:content-['']">
                IT Services
              </h3>
              <ul>
                <li
                  className={`${rubik.className} block relative text-[15px] leading-[36px] text-[rgba(255,255,255,0.8)] mb-[2px] before:content-['--'] before:text-[rgba(255,255,255,0.8)] before:tracking-[0] before:mr-2 before:transition-all before:ease-in-out before:duration-300`}
                >
                  <Link href="" className="inline-block hover:text-primary ">
                    Web Development
                  </Link>
                </li>
                <li
                  className={`${rubik.className} block relative text-[15px] leading-[36px] text-[rgba(255,255,255,0.8)] mb-[2px] before:content-['--'] before:text-[rgba(255,255,255,0.8)] before:tracking-[0] before:mr-2 before:transition-all before:ease-in-out before:duration-300`}
                >
                  <a href="" className="inline-block hover:text-primary">
                    Analytic Solutions
                  </a>
                </li>
                <li
                  className={`${rubik.className} block relative text-[15px] leading-[36px] text-[rgba(255,255,255,0.8)] mb-[2px] before:content-['--'] before:text-[rgba(255,255,255,0.8)] before:tracking-[0] before:mr-2 before:transition-all before:ease-in-out before:duration-300`}
                >
                  <a href="" className="inline-block hover:text-primary ">
                    Software Development
                  </a>
                </li>
                <li
                  className={`${rubik.className} block relative text-[15px] leading-[36px] text-[rgba(255,255,255,0.8)] mb-[2px] before:content-['--'] before:text-[rgba(255,255,255,0.8)] before:tracking-[0] before:mr-2 before:transition-all before:ease-in-out before:duration-300`}
                >
                  <a href="" className="inline-block hover:text-primary">
                    Cloud and DevOps
                  </a>
                </li>
                <li
                  className={`${rubik.className} block relative text-[15px] leading-[36px] text-[rgba(255,255,255,0.8)] mb-[2px] before:content-['--'] before:text-[rgba(255,255,255,0.8)] before:tracking-[0] before:mr-2 before:transition-all before:ease-in-out before:duration-300 `}
                >
                  <a href="" className="inline-block hover:text-primary">
                    Project Design
                  </a>
                </li>
              </ul>
            </aside>
          </div>
          <div class="lg:col-span-5 col-span-12">
            <aside class="widget relative mt-[60px] mb-[45px]">
              <h3 class="widget-title text-xl leading-[0.8] uppercase relative mt-[13px] mb-[37px] border-none text-white pl-[18px] font-bold after:absolute after:-bottom-[6px] after:left-0 after:h-7 after:w-1 after:bg-primary after:content-['']">
                latest news
              </h3>
              <div
                class={`${rubik.className} sf_s1_post relative pl-[100px] mb-5`}
              >
                <Image
                  src={footer1}
                  className="w-20 h-20 absolute top-0 left-0"
                  alt="Footer-blog"
                />
                <h5
                  className={`${rubik.className} text-[rgba(255,255,255,0.8)] text-lg font-medium leading-[26px] mb-[5px]`}
                >
                  <Link href="" className="hover:text-primary">
                    Tech Products That Makes Its Easier to Stay at Home
                  </Link>
                </h5>
                <p
                  className={`${rubik.className} text-lg font-normal text-[rgb(86,88,114)]`}
                >
                  3 days ago
                </p>
              </div>
              <div
                class={`${rubik.className} sf_s1_post relative pl-[100px] mb-5`}
              >
                <Image
                  src={footer2}
                  className="w-20 h-20 absolute top-0 left-0"
                  alt="Footer-blog"
                />
                <h5
                  className={`${rubik.className} text-[rgba(255,255,255,0.8)] text-lg font-medium leading-[26px] mb-[5px]`}
                >
                  <Link href="" className="hover:text-primary">
                    Servo Project Joins The Linux Foundation Fold Desco{" "}
                  </Link>
                </h5>
                <p
                  className={`${rubik.className} text-lg font-normal text-[rgb(86,88,114)]`}
                >
                  4 days ago
                </p>
              </div>
            </aside>
          </div>
        </div>

        <div class="">
          <div class="grid grid-cols-12 copyright relative pt-[22px] pb-7 border-t border-solid border-[rgba(255,255,255,0.1)]">
            <div class="xs:col-span-7 col-span-12 text-center">
              <p className="text-[rgba(255,255,255,0.5)] text-lg font-normal leading-[30px]">
                &copy;{" "}
                <Link
                  href="https://psdtowpwork.com/"
                  className="hover:text-primary"
                >
                  Nsstheme
                </Link>
                2021 | All Rights Reserved.
              </p>
            </div>
            <div class="xs:col-span-5 col-span-12">
              <ul className="m-0 p-0 xs:text-right text-center xs:my-0 my-5">
                <li className="relative mb-5 inline-block after:absolute after:-right-4 after:top-[6px] after:h-3 after:w-[2px] after:content-[''] after:bg-[rgba(255,255,255,0.5)] after:mr-1">
                  <Link
                    href=""
                    className="text-[rgba(255,255,255,0.5)] hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li className="relative px-6 mb-5 inline-block after:absolute after:-right-[6px] after:top-[6px] after:h-3 after:w-[2px] after:content-[''] after:bg-[rgba(255,255,255,0.5)] after:mr-4">
                  <Link
                    href="https://www.google.com/maps"
                    className="text-[rgba(255,255,255,0.5)] hover:text-primary"
                  >
                    Sitemap
                  </Link>
                </li>
                <li className="relative mb-5 inline-block ">
                  <Link
                    href=""
                    className="text-[rgba(255,255,255,0.5)] hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
