import React from "react";
import FooterTwo from "../../../../components/ui/Footer/FooterTwo";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import ps1 from "/public/img/portfolio/psingle.jpg";
import ps2 from "/public/img/portfolio/psinlge2.jpg";
import BreadCumb from "../../../../components/ui/BreadCumb";

import portfolio from "/public/Portfolio.json";
import Image from "next/image";
import { rubik } from "@/app/fonts";

export async function generateMetadata({ params }) {
  const paramsTitle = params.title
    ?.replace(/%20/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  return {
    title: paramsTitle + "-Graptor",
    description: "Technology & IT Solutions ",
  };
}
const Portfolio = ({ params }) => {
  const title = params.title?.replace(/%20/g, " ");

  const single = portfolio.find((item) => item?.title === title);
  return (
    <div>
      <BreadCumb currentPage={title} />

      <section className="portfolio-single relative py-[120px]">
        <div className="container mx-auto xl:px-6 px-4">
          <div className="folio-thumb relative">
            <Image
              src={single?.img2}
              width={1130}
              height={200}
              className=" h-auto mb-[30px]"
              alt=""
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <Image src={ps1} alt="" />
            <Image src={ps2} alt="" />
          </div>

          <div className="grid grid-cols-12 gap-11">
            <div className="sm:col-span-4 col-span-12">
              <div className="detils-folio relative pt-6">
                <span className="block mb-[5px] text-lg text-[#565872] leading-[30px]">
                  Mockup
                </span>
                <h3 className="xl:text-[36px] text-[22px] xl:leading-[42px] leading-[35px] text-[#191919] font-bold">
                  PSD Resource: Notebook Mockup
                </h3>
                <div className="flex items-center">
                  <p className="uppercase texg-base leading-[36px] font-bold text-[#191919]">
                    share
                  </p>
                  <div className="">
                    <Link
                      href="https://www.facebook.com/"
                      className="inline-block text-[rgba(8,24,69,0.4)] text-xl xl:ml-5 ml-3 hover:text-primary"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      href="https://twitter.com/"
                      className="inline-block text-[rgba(8,24,69,0.4)] text-xl xl:ml-5 ml-3 hover:text-primary"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      href="https://web.whatsapp.com/"
                      className="inline-block text-[rgba(8,24,69,0.4)] text-xl xl:ml-5 ml-3 hover:text-primary"
                    >
                      <IoLogoWhatsapp />
                    </Link>
                    <Link
                      href="http://instagram.com/"
                      className="inline-block text-[rgba(8,24,69,0.4)] text-xl xl:ml-5 ml-3 hover:text-primary"
                    >
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
                <Link
                  href=""
                  className={`${rubik.className} h-[50px]  flex items-center text-[15px] leading-[.8] text-white overflow-hidden relative z-[1] text-center capitalize font-medium w-[200px] mt-10 bg-primary py-[14px] px-[25px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:content-[''] before:w-full before:h-0 before:absolute before:left-0 before:bottom-0 before:touch-auto before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0   to_bottom`}
                >
                  view project <FaCircleArrowRight size={20} className="ml-7" />
                </Link>
              </div>
            </div>
            <div className=" sm:col-span-5 col-span-11">
              <div className=" pt-6">
                <p className="text-lg leading-[30px] text-[#565872] font-normal">
                  Qestigationes demonstraverunt lectores legere me lius quod ii
                  legunt saepius. Claritas est etiam processus dynamicus, qui
                  sequitur mutationem consuetudium lectorum est notare quam
                  littera gothica, quam nunc putamus est notare quam littera
                  gothica, quam nunc putamus parum claram, anteposuerit
                  litterarum quarta decima et quinta decima. quam littera
                  gothica, quam nunc putamus parum claram, anteposuerit
                  litterarum quarta decima et quinta decima. anteposuerit
                  litterarum quarta decima et quinta decima.
                </p>
              </div>
            </div>
            <div className="sm:col-span-3 col-span-12 pt-6">
              <div className="mb-4">
                <h5 className=" text-xl leading-[30px] text-[#8a8a8a] uppercase mb-[1px]">
                  Date:
                </h5>
                <p>10 Feburary 2021</p>
              </div>
              <div className="mb-4">
                <h5 className=" text-xl leading-[30px] text-[#8a8a8a] uppercase mb-[1px]">
                  client:
                </h5>
                <p>Mark Thompson</p>
              </div>
              <div className="mb-4">
                <h5 className=" text-xl leading-[30px] text-[#8a8a8a] uppercase mb-[1px]">
                  services:
                </h5>
                <p>
                  <Link href={`/portfolioCategory/${single?.tech}`}>
                    {single?.tech}
                  </Link>
                </p>
              </div>
              <div className="mb-4">
                <h5 className=" text-xl leading-[30px] text-[#8a8a8a] uppercase mb-[1px]">
                  Address:
                </h5>
                <p>California, TX 70240</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default Portfolio;
