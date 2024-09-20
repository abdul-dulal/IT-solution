"use client";
import React, { useEffect, useRef, useState } from "react";
import Shuffle from "shufflejs";
import Image from "next/image";
import data from "/public/Portfolio.json";
import BreadCumb from "../../../components/ui/BreadCumb";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import portfolio from "/public/Portfolio.json";

import CategoryList from "../../../components/ui/CategoryList";

const CaseStudyThree = () => {
  const shuffleContainer = useRef(null);
  const shuffleInstance = useRef(null);
  const [techCategories, setTechCategories] = useState([]);

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

  return (
    <div>
      <BreadCumb currentPage="Case Study" />

      <section class="relative py-[120px]">
        <div class="container mx-auto">
          <CategoryList
            techCategories={techCategories}
            handleFilter={handleFilter}
          />

          <div class="">
            <div ref={shuffleContainer} class="row my-shuffle-container">
              {portfolio.map((item) => (
                <figure
                  key={item.id}
                  class="shuffle-img picture-item"
                  data-groups={JSON.stringify([item.tech])}
                >
                  <div class="relative h-full w-full overflow-hidden">
                    <div class="">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={365}
                        height={400}
                        class="w-full"
                      />
                      <div
                        style={{ width: "calc(100% - 30px)" }}
                        class="relative shadow-sm -top-11 left-4 bg-white rounded-[5px] pt-[23px] pr-[70px] pb-4 pl-5"
                      >
                        <p class="relative text-primary text-lg font-normal hover:text-[#191919] mb-[2px]">
                          <Link href={`/portfolioCategory/${item?.tech}`}>
                            {item.tech}
                          </Link>
                        </p>
                        <h5 class="inline-block text-[#191919] hover:text-primary capitalize text-lg font-bold">
                          <Link href={`portfolio/${item.title}`}>
                            {item.title}
                          </Link>
                        </h5>
                        <Link
                          href={`portfolio/${item.title}`}
                          class="inline-block w-11 h-11 bg-[rgba(104,110,226,0.1)] text-primary text-base rounded-[3px] leading-[47px] text-center absolute top-0 bottom-0 right-5 m-auto hover:bg-primary hover:text-white"
                        >
                          <FaArrowRight class="inline-block m-auto" />
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
    </div>
  );
};

export default CaseStudyThree;
