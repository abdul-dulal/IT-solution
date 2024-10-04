import React from "react";
import Image from "next/image";
import hero from "/public/img/bg/blog-hero.jpg";
import blog from "/public/img/bg/blog-3.jpg";
import Link from "next/link";
import { VscTriangleRight } from "react-icons/vsc";
import BreadCumb from "../../../../components/ui/BreadCumb";
import ServiceContact from "../../../../components/ui/service/ServiceContact";
import FooterTwo from "../../../../components/ui/Footer/FooterTwo";
import { rubik } from "@/app/fonts";
import allServcie from "/public/AllService.json";
import DownloadBtn from "../../../../components/ui/service/DownloadBtn";
import BlockQuote from "../../../../components/ui/service/BlockQuote";

export async function generateMetadata({ params }) {
  const paramsTitle = params.title.replace(/%20/g, " ");
  return {
    title: paramsTitle + "-Graptor",
    description: "Technology & IT Solutions ",
  };
}

export default function ServiceDetails({ params }) {
  const paramsTitle = params.title.replace(/%20/g, " ");

  const single = allServcie.find((item) => item.title === paramsTitle);
  const uniqueService = [...new Set(allServcie)];
  return (
    <div>
      <BreadCumb currentPage={paramsTitle} />
      <section className=" relative  py-[120px]">
        <div className="container mx-auto xs:px-6 px-4">
          <div className="grid grid-cols-12  gap-5">
            <div className="lg:col-span-8 col-span-12">
              <div className=" relative">
                <div className=" relative mb-7">
                  {single ? (
                    <Image
                      src={single.img}
                      alt="Hero"
                      height={500}
                      width={750}
                      className="rounded-[10px]"
                    />
                  ) : (
                    <Image src={hero} alt="Hero" className="rounded-[10px]" />
                  )}
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
                <div className="grid sm:grid-cols-2 gap-7">
                  <Image
                    className="rounded-[5px] mt-[19px] mb-[35px]"
                    src={blog}
                    alt={paramsTitle}
                  />

                  <div className="">
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

                <BlockQuote />
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <div className=" relative pl-[10px]">
                <aside className=" bg-[#f0f4f9] rounded-[5px] p-[25px]">
                  <h3 className=" capitalize relative text-[28px] font-bold leading-[36px] mb-6">
                    Popular Service
                  </h3>

                  <ul className="relative">
                    {allServcie?.map(({ id, title }) => {
                      const active = title === paramsTitle;
                      const encTitle = encodeURIComponent(title);
                      return (
                        <li key={id} className="relative block mb-[15px] z-[1]">
                          <Link
                            href={`/service/${encTitle}`}
                            className={`${rubik.className} ${
                              active ? "border border-solid border-primary" : ""
                            } relative flex justify-between items-center capitalize xs:text-lg text-base leading-[32px] font-medium py-2 px-[20px] bg-white rounded-[5px] text-[#222222] border border-solid border-[#e3e3e3] hover:border-primary  transition-all ease-in-out duration-400 `}
                          >
                            {title} <VscTriangleRight />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </aside>
                <aside className=" relative my-[50px] p-0">
                  <h3 className="  text-[28px] text-[rgb(25,25,25)] font-bold leading-[30px] mb-7">
                    Get a Quote
                  </h3>
                  <ServiceContact />
                </aside>
                <DownloadBtn />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterTwo />
    </div>
  );
}
