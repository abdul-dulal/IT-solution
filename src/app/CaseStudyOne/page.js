import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
import Image from "next/image";
import m1 from "/public/img/portfolio/portfolio1.jpg";
import { FaArrowRight } from "react-icons/fa";
const CaseStudyOne = () => {
  return (
    <div>
      <BreadCumb currentPage="Case Study" />

      {/* Portfolio Start */}

      <section class=" relative py-[120px]">
        <div class="container mx-auto xl:px-6 xs:px-4">
          <div class="">
            <div class=" text-center">
              <ul
                style={{ marginTop: 0 }}
                class="shaf-filter group mt-11 mb-[55px]"
              >
                <li
                  class="active inline-block relative text-[17px] font-bold cursor-pointer  mr-[50px] px-[7px] transition-all duration-300 ease-in-out before:w-0 before:h-[2px] before:absolute before:bg-primary before:left-0 before:right-0 before:mx-auto before:-bottom-[7px] before:content-[''] before:opacity-0 before:invisible before:transition-all before:duration-300 before:ease-in-out "
                  data-group="all"
                >
                  All Projects
                </li>
                <li
                  class=" inline-block relative text-[17px] font-bold cursor-pointer  mr-[50px] px-[7px] transition-all duration-300 ease-in-out before:w-0 before:h-[2px] before:absolute before:bg-primary before:left-0 before:right-0 before:mx-auto before:-bottom-[7px] before:content-[''] before:opacity-0 before:invisible before:transition-all before:duration-300 before:ease-in-out "
                  data-group="ui/ux"
                >
                  UI/UX
                </li>
                <li
                  class=" inline-block relative text-[17px] font-semibold cursor-pointer  mr-[50px] px-[7px] transition-all duration-300 ease-in-out before:w-0 before:h-[2px] before:absolute before:bg-primary before:left-0 before:right-0 before:mx-auto before:-bottom-[7px] before:content-[''] before:opacity-0 before:invisible before:transition-all before:duration-300 before:ease-in-out "
                  data-group="branding"
                >
                  Branding
                </li>
                <li
                  class=" inline-block relative text-[17px] font-bold cursor-pointer  mr-[50px] px-[7px] transition-all duration-300 ease-in-out before:w-0 before:h-[2px] before:absolute before:bg-primary before:left-0 before:right-0 before:mx-auto before:-bottom-[7px] before:content-[''] before:opacity-0 before:invisible before:transition-all before:duration-300 before:ease-in-out "
                  data-group="design"
                >
                  Web Design
                </li>
                <li
                  class=" inline-block relative text-[17px] font-bold cursor-pointer  mr-[50px] px-[7px] transition-all duration-300 ease-in-out before:w-0 before:h-[2px] before:absolute before:bg-primary before:left-0 before:right-0 before:mx-auto before:-bottom-[7px] before:content-[''] before:opacity-0 before:invisible before:transition-all before:duration-300 before:ease-in-out "
                  data-group="technology"
                >
                  Technology
                </li>
                <li
                  class=" inline-block relative text-[17px] font-bold cursor-pointer   px-[7px] transition-all duration-300 ease-in-out before:w-0 before:h-[2px] before:absolute before:bg-primary before:left-0 before:right-0 before:mx-auto before:-bottom-[7px] before:content-[''] before:opacity-0 before:invisible before:transition-all before:duration-300 before:ease-in-out "
                  data-group="printing"
                >
                  Printing
                </li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-3 ">
            <div>
              <div class="folio-item-1 group mb-[30px] relative overflow-hidden after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-0 after:z-[1] after:opacity-0 after:invisible after:transition-all after:ease-in-out after:duration-300 after:bg-[rgba(104,110,226,0.8)] hover:after:h-full hover:after:opacity-[1] hover:after:visible">
                <Image src={m1} className="" alt="Portfolio" />
                <div
                  style={{ width: "calc(100% - 30px)" }}
                  class="folio-content absolute left-[15px] bottom-0 z-[2] bg-white rounded-[5px] pt-[23px] pr-[70px] pb-[16px] pl-[20px] invisible opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:bottom-4 group-hover:opacity-[1] group-hover:delay-[0.4s]"
                >
                  <p class=" relative text-primary mb-[2px]">
                    <a
                      href="portfolio1.html"
                      className="text-primary inline-block hover:text-[#191919]"
                    >
                      Technology
                    </a>
                  </p>
                  <h5 className="text-lg mb-0 hover:text-primary">
                    <a href="portfolio-details-1.html" className="inline-block">
                      Platform Integration
                    </a>
                  </h5>
                  <a
                    class="flex items-center justify-center w-11 h-11 bg-[rgba(104,110,226,0.1)] text-primary text-[16px] rounded-[3px] leading-[47px] text-center absolute top-0 bottom-0 right-4 hover:bg-primary hover:text-white m-auto"
                    href="portfolio-details-1.html"
                  >
                    <FaArrowRight />
                  </a>
                </div>
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

export default CaseStudyOne;
