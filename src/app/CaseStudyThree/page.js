"use client";
import React, { useEffect, useRef, useState } from "react";
import Shuffle from "shufflejs";
import Image from "next/image";
import data from "/public/Portfolio.json"; // Adjust the path to where your JSON file is located
import BreadCumb from "../../../components/ui/BreadCumb";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ShuffleGrid = () => {
  const shuffleContainer = useRef(null);
  const shuffleInstance = useRef(null);
  const [techCategories, setTechCategories] = useState([]);

  useEffect(() => {
    // Initialize Shuffle.js when the component is mounted
    shuffleInstance.current = new Shuffle(shuffleContainer.current, {
      itemSelector: ".picture-item",
      sizer: ".my-sizer-element", // You can remove this if not using a sizer element
    });

    // Cleanup on component unmount
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

  return (
    <div>
      <BreadCumb currentPage="Case Study" />

      <section class=" relative py-[120px]">
        <div className="container mx-auto">
          <ul
            style={{ marginTop: 0 }}
            class="shaffle-filter group mt-11 mb-10 flex justify-center"
          >
            <li
              class="active inline-block relative text-[17px] font-bold cursor-pointer  mr-[50px] px-[7px] transition-all duration-300 ease-in-out before:w-0 before:h-[2px] before:absolute before:bg-primary before:left-0 before:right-0 before:mx-auto before:-bottom-[7px] before:content-[''] before:opacity-0 before:invisible before:transition-all before:duration-300 before:ease-in-out "
              onClick={() => handleFilter("all")}
            >
              All Projects
            </li>

            {techCategories.map((category) => (
              <li
                key={category}
                class=" inline-block relative text-[17px] font-semibold cursor-pointer  mr-[50px] px-[7px] transition-all duration-300 ease-in-out before:w-0 before:h-[2px] before:absolute before:bg-primary before:left-0 before:right-0 before:mx-auto before:-bottom-[7px] before:content-[''] before:opacity-0 before:invisible before:transition-all before:duration-300 before:ease-in-out "
                onClick={() => handleFilter(category)}
              >
                {category}
              </li>
            ))}
          </ul>

          <div className="">
            <div ref={shuffleContainer} className="row my-shuffle-container">
              {data.map((item) => (
                <figure
                  key={item.id}
                  className="shuffle-img  picture-item"
                  data-groups={JSON.stringify([item.tech])}
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <div class="folio-item-1 group mb-[30px] relative overflow-hidden after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-0 after:z-[1] after:opacity-0 after:invisible after:transition-all after:ease-in-out after:duration-300 after:bg-[rgba(104,110,226,0.8)] hover:after:h-full hover:after:opacity-[1] hover:after:visible">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={365}
                        height={400}
                        className=" w-full"
                      />
                      <div
                        style={{ width: "calc(100% - 30px)" }}
                        class="folio-content absolute left-[15px] bottom-0 z-[2] bg-white rounded-[5px] pt-[23px] pr-[70px] pb-[16px] pl-[20px] invisible opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:bottom-4 group-hover:opacity-[1] group-hover:delay-[0.4s]"
                      >
                        <p class=" relative text-primary mb-[2px]">
                          <Link
                            href={`portfolio/${item.title}`}
                            className="text-primary inline-block hover:text-[#191919]"
                          >
                            {item.tech}
                          </Link>
                        </p>
                        <h5 className="text-lg mb-0 hover:text-primary">
                          <a
                            href="portfolio-details-1.html"
                            className="inline-block"
                          >
                            {item.title}
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
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShuffleGrid;
