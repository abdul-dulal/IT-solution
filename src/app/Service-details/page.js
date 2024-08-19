import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Image from "next/image";
import hero from "/public/img/bg/blog-hero.jpg";
import blog from "/public/img/bg/blog-3.jpg";
import Link from "next/link";
import { rubik } from "../fonts";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { VscTriangleRight } from "react-icons/vsc";
import { LuQuote } from "react-icons/lu";
import ServiceContact from "../../../components/ui/service/ServiceContact";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
import allService from "/public/AllService.json";
const ServiceDetails = () => {
  return (
    <div>
      <BreadCumb currentPage="Software Development" />
      <section class=" relative  py-[120px]">
        <div class="container mx-auto xs:px-6 px-4">
          <div class="grid grid-cols-12 gap-5">
            <div class="lg:col-span-8 col-span-12">
              <div class=" relative">
                <div class=" relative mb-7">
                  <Image src={hero} alt="Hero" className="rounded-[10px]" />
                </div>
                <h3 className="sm:text-[40px] xs:text-[36px] text-[30px] sm:leading-[52px] xs:leading-[45px] leading-[40px] font-bold text-[#191919] mb-[22px]">
                  Responsive Pixel Perfect Design
                </h3>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est.
                </p>
                <div class="grid sm:grid-cols-2 gap-7">
                  <Image
                    className="rounded-[5px] mt-[19px] mb-[35px]"
                    src={blog}
                    alt="Service"
                  />

                  <div class="">
                    <h4 className="text-xl font-bold leading-[30px] text-[#222] mt-5 mb-[22px]">
                      Quality Control System
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est.
                    </p>
                  </div>
                </div>
                <h4 className="text-xl font-bold leading-[30px] text-[#222] mt-4 mb-[22px]">
                  Highly Professional Staff
                </h4>
                <ul>
                  <li className="inline-block relative text-lg pl-[30px] mb-2 after:absolute after:left-0 after:text-[15px] after:top-[6px] after:text-white after:content-['\2713']  after:h-[18px] after:w-[18px] after:bg-primary after:rounded-full after:flex after:items-center after:justify-center">
                    Sed ut perspiciatis unde omnis iste natus error
                  </li>
                  <li className="inline-block relative text-lg pl-[30px] mb-2 after:absolute after:left-0 after:text-lg after:top-[6px] after:text-white after:content-['\2713']  after:h-[18px] after:w-[18px] after:bg-primary after:rounded-full after:flex after:items-center after:justify-center">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                  </li>
                  <li className="inline-block relative text-lg pl-[30px] mb-2 after:absolute after:left-0 after:text-lg after:top-[6px] after:text-white after:content-['\2713']  after:h-[18px] after:w-[18px] after:bg-primary after:rounded-full after:flex after:items-center after:justify-center">
                    Accusamus et iusto odio dignissimos ducimus qui blanditiis
                  </li>
                  <li className="inline-block relative text-lg pl-[30px] mb-2 after:absolute after:left-0 after:text-lg after:top-[6px] after:text-white after:content-['\2713']  after:h-[18px] after:w-[18px] after:bg-primary after:rounded-full after:flex after:items-center after:justify-center">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque
                  </li>
                </ul>

                <blockquote class="relative py-[50px] md:px-[100px] sm:px-[70px] xs:px-[35px] px-6 bg-[#f0f4f9] rounded-[10px] text-center mt-[30px]">
                  <LuQuote className="text-[54px] text-primary w-full block mx-auto mb-7" />
                  <p class=" text-[#222] text-xl  relative leading-[30px]  font-medium italic mb-[22px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <br className="md:block hidden" /> Quis ipsum suspendisse
                    ultrices
                  </p>
                  <div class=" relative">
                    <span className="block text-primary leading-[.8] text-lg font-normal mb-[10px]">
                      David Martin
                    </span>
                    <p className="text-sm leading-[.8]">Ceo - nsstheme</p>
                  </div>
                </blockquote>
              </div>
            </div>
            <div class="lg:col-span-4 col-span-12">
              <div class=" relative pl-[10px]">
                <aside class=" bg-[#f0f4f9] rounded-[5px] p-[25px]">
                  <h3 class=" capitalize relative text-[28px] font-bold leading-[36px] mb-6">
                    Popular Service
                  </h3>
                  <ul className="relative">
                    {allService.map((item) => {
                      {
                        /* const active = item.title === paramsTitle; */
                      }
                      return (
                        <li
                          key={item.id}
                          className="relative block mb-[15px] z-[1]"
                        >
                          <Link
                            href={`service/${item.title}`}
                            className={`${rubik.className} relative flex justify-between items-center capitalize text-lg leading-[32px] font-medium py-2 px-[20px] bg-white rounded-[5px] text-[#222222] border border-solid border-[#e3e3e3] hover:border-primary  transition-all ease-in-out duration-400 `}
                          >
                            {item.title} <VscTriangleRight />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </aside>
                <aside class=" relative my-[50px] p-0">
                  <h3 class="  text-[28px] text-[rgb(25,25,25)] font-bold leading-[30px] mb-7">
                    Get a Quote
                  </h3>
                  <ServiceContact />
                </aside>
                <aside class=" bg-[#f0f4f9] rounded-[5px] p-[25px]">
                  <h3 class=" text-[28px] text-[rgb(25,25,25)] font-bold leading-[30px] mb-6">
                    Brochures
                  </h3>
                  <p style={{ margin: "-7px 0 30px" }}>
                    Existence its certainly explained how improving household
                    pretended.
                  </p>
                  <a
                    class=" flex gap-2 text-lg font-medium text-[#191919] mt-5 hover:text-primary"
                    href="javascript:void(0)"
                  >
                    <BsFileEarmarkPdf className="text-5xl  -mt-[5px] text-primary " />
                    Download Service
                  </a>
                  <a
                    class=" flex gap-2 text-lg font-medium text-[#191919] mt-5 hover:text-primary"
                    href="javascript:void(0)"
                  >
                    <BsFileEarmarkPdf className="text-5xl  -mt-[5px] text-primary " />
                    Download Feature
                  </a>
                </aside>
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

export default ServiceDetails;
