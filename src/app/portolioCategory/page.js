import React from "react";
import portfolio from "/public/Portfolio.json";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import m1 from "/public/img/portfolio/portfolio1.jpg";
import BreadCumb from "../../../components/ui/BreadCumb";
import Link from "next/link";
const PortfolioCategory = ({ title }) => {
  const categories = portfolio.filter((item) => item.tech == title);

  return (
    <div>
      <BreadCumb currentPage={title} />
      <section className="relative py-[120px]">
        <div className="container mx-auto xl:px-6 px-4">
          <div class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 ">
            {categories.map((item) => {
              return (
                <div key={item.id}>
                  <div class=" group mb-[30px] relative overflow-hidden after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-0 after:z-[1] after:opacity-0 after:invisible after:transition-all after:ease-in-out after:duration-300 after:bg-[rgba(104,110,226,0.8)] hover:after:h-full hover:after:opacity-[1] hover:after:visible">
                    <Image
                      src={item?.img}
                      width={400}
                      height={318}
                      className="w-full"
                      alt="Portfolio"
                    />
                    <div
                      style={{ width: "calc(100% - 30px)" }}
                      class="folio-content absolute left-[15px] bottom-0 z-[2] bg-white rounded-[5px] pt-[23px] pr-[70px] pb-[16px] pl-[20px] invisible opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:bottom-4 group-hover:opacity-[1] group-hover:delay-[0.4s]"
                    >
                      <p class=" relative text-primary mb-[2px]">
                        <Link
                          href={`/folioCat/${item.tech}`}
                          className="text-primary inline-block hover:text-[#191919]"
                        >
                          {item.tech}
                        </Link>
                      </p>
                      <h5 className="text-lg mb-0 hover:text-primary">
                        <Link
                          href={`/portfolio/${item.title}`}
                          className="inline-block"
                        >
                          {item.title}
                        </Link>
                      </h5>
                      <Link
                        class="flex items-center justify-center w-11 h-11 bg-[rgba(104,110,226,0.1)] text-primary text-[16px] rounded-[3px] leading-[47px] text-center absolute top-0 bottom-0 right-4 hover:bg-primary hover:text-white m-auto"
                        href={`/portfolio/${item.title}`}
                      >
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioCategory;
