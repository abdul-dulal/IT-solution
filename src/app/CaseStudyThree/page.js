"use client";
import React, { useEffect, useRef, useState } from "react";
import Shuffle from "shufflejs";
import Image from "next/image";
import data from "/public/Portfolio.json";
import BreadCumb from "../../../components/ui/BreadCumb";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import portfolio from "/public/Portfolio.json";
import Pagination from "../../../components/ui/blog/Pagination";

const CaseStudyThree = () => {
  const shuffleContainer = useRef(null);
  const shuffleInstance = useRef(null);
  const [techCategories, setTechCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    shuffleInstance.current = new Shuffle(shuffleContainer.current, {
      itemSelector: ".picture-item",
      sizer: ".my-sizer-element",
    });

    return () => {
      shuffleInstance.current.destroy();
    };
  }, []);

  useEffect(() => {
    const categories = [...new Set(data.map((item) => item.tech))];
    setTechCategories(categories);
  }, []);

  const handleFilter = (group) => {
    shuffleInstance.current.filter(group === "all" ? Shuffle.ALL_ITEMS : group);
  };

  const blogsPerPage = 6;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * blogsPerPage;

  const currentPortfolio = portfolio?.slice(offset, offset + blogsPerPage);

  return (
    <div>
      <BreadCumb currentPage="Case Study" />

      <section className=" relative py-[120px]">
        <div className="container mx-auto">
          <ul
            style={{ marginTop: 0 }}
            className="shaffle-filter  group mt-11 mb-10 flex xs:flex-nowrap flex-wrap  justify-center"
          >
            <li
              className={`inline-block relative text-[17px] font-semibold cursor-pointer md:mr-[50px] mr-3 px-[7px] xs:mt-0 mt-7   ${
                activeCategory === "all"
                  ? "border-b-[2px] border-solid border-primary pb-1"
                  : "border-b-[2px] border-solid border-transparent pb-1 before:w-0 before:h-[2px] before:absolute before:bg-primary before:left-0 before:right-0 before:mx-auto before:-bottom-[3px] before:content-[''] before:opacity-0 before:invisible before:transition-all before:duration-300 before:ease-in-out "
              }`}
              onClick={() => [handleFilter("all"), setActiveCategory("all")]}
            >
              All Projects
            </li>

            {techCategories.map((category) => (
              <li
                key={category}
                className={`inline-block relative text-[17px] font-semibold cursor-pointer md:mr-[50px] mr-3 px-[7px] xs:mt-0 mt-7   ${
                  activeCategory === category
                    ? "border-b-[2px] border-solid border-primary pb-1"
                    : "border-b-[2px] border-solid border-transparent pb-1 before:w-0 before:h-[2px] before:absolute before:bg-primary before:left-0 before:right-0 before:mx-auto before:-bottom-[3px] before:content-[''] before:opacity-0 before:invisible before:transition-all before:duration-300 before:ease-in-out"
                }`}
                onClick={() => [
                  handleFilter(category),
                  setActiveCategory(category),
                ]}
              >
                {category}
              </li>
            ))}
          </ul>

          <div className="">
            <div ref={shuffleContainer} className="row my-shuffle-container">
              {currentPortfolio.map((item) => (
                <figure
                  key={item.id}
                  className="shuffle-img  picture-item"
                  data-groups={JSON.stringify([item.tech])}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <div className="folio-item-1 group mb-[30px] relative overflow-hidden after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-0 after:z-[1] after:opacity-0 after:invisible after:transition-all after:ease-in-out after:duration-300 after:bg-[rgba(104,110,226,0.8)] hover:after:h-full hover:after:opacity-[1] hover:after:visible">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={365}
                        height={400}
                        className=" w-full"
                      />
                      <div
                        style={{ width: "calc(100% - 30px)" }}
                        className="folio-content absolute left-[15px] bottom-0 z-[2] bg-white rounded-[5px] pt-[23px] pr-[70px] pb-[16px] pl-[20px] invisible opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:bottom-4 group-hover:opacity-[1] group-hover:delay-[0.4s]"
                      >
                        <p className=" relative text-primary mb-[2px]">
                          <Link
                            href={`/portfolioCategory/${item?.tech}`}
                            className="text-primary inline-block hover:text-[#191919]"
                          >
                            {item.tech}
                          </Link>
                        </p>
                        <h5 className="text-lg mb-0 hover:text-primary">
                          <Link
                            href={`portfolio/${item.title}`}
                            className="inline-block"
                          >
                            {item.title}
                          </Link>
                        </h5>
                        <Link
                          className="flex items-center justify-center w-11 h-11 bg-[rgba(104,110,226,0.1)] text-primary text-[16px] rounded-[3px] leading-[47px] text-center absolute top-0 bottom-0 right-4 hover:bg-primary hover:text-white m-auto"
                          href={`portfolio/${item.title}`}
                        >
                          <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="my-[60px] flex  justify-center hover:transition-all hover:duration-300 hover:ease-in-out ">
        <Pagination
          currentPage={currentPage}
          blogs={portfolio}
          blogsPerPage={blogsPerPage}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};

export default CaseStudyThree;
