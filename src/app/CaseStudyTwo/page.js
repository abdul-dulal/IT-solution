"use client";
import React from "react";
import { usePathname } from "next/navigation";
import BreadCumb from "../../../components/ui/BreadCumb";
import portfolios from "/public/Portfolio.json";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
import CasePaginationTwo from "../../../components/CaseStudy/CasePaginationTwo";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
const CaseStudyTwo = () => {
  const pathname = usePathname();
  const portfolio = portfolios.slice(0, 6);
  return (
    <div>
      <BreadCumb currentPage="case study" />

      <section className="py-[120px] relative">
        <div className="container mx-auto xs:px-4 px-3">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3">
            {portfolio.map((item) => (
              <div key={item.id} className=" group relative overflow-hidden  ">
                <Image
                  src={item?.img}
                  width={500}
                  height={500}
                  className="w-full rounded-[10px]"
                  alt={item.title}
                />
                <div
                  style={{
                    transition:
                      "transform 0.4s cubic-bezier(0.34, 0.66, 0.79, 0.58), opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
                  }}
                  className=" absolute content-[''] left-0 top-0 w-full h-full rounded-[10px] bg-[rgba(104,110,226,0.8)] opacity-0 group-hover:opacity-100"
                >
                  <div className=" absolute left-0 top-[50%] -translate-y-[50%] w-full text-center pb-[15px] z-[2]">
                    <Link
                      href={`/portfolio/${item.title}`}
                      style={{
                        boxShadow: "0px 1px 54px 0px rgb(47 84 238 / 46%)",
                      }}
                      className="fm-more relative right-auto inline-block bg-white w-[57px] h-[57px] text-center rounded-[50%] text-2xl text-primary leading-[60px] mb-[22px]  scale-75 opacity-0 invisible transition-all ease-in-out duration-300 group-hover:scale-100 group-hover:visible group-hover:opacity-100"
                    >
                      <span className="w-full h-full flex items-center justify-center">
                        <AiOutlinePlus className="" />
                      </span>
                    </Link>
                    <h5 className="text-xl leading-[30px] text-white mb-[3px] invisible opacity-0 translate-y-[30px] transition-all ease-in-out duration-700 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
                      <Link
                        href={`/portfolio/${item.title}`}
                        className="hover:text-[#191919] hover:transition-all hover:ease-linear hover:duration-300"
                      >
                        {item.title}
                      </Link>
                    </h5>
                    <p className=" text-[rgba(255,255,255,0.8)] m-0 translate-y-[30px] opacity-0 invisible transition-all ease-in-out duration-1000 hover:text-[#191919] group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
                      <Link href={`/portfolioCategory/${item?.tech}`}>
                        {item?.tech}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CasePaginationTwo path={pathname} />
      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default CaseStudyTwo;
