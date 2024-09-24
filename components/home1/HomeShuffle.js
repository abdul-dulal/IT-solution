"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import CategoryList from "../ui/CategoryList";
import Shuffle from "shufflejs";
import data from "/public/Portfolio.json";

const HomeShuffle = () => {
  const shuffleContainer = useRef(null);
  const shuffleInstance = useRef(null);
  const [techCategories, setTechCategories] = useState([]);
  const portfolio = data.slice(0, 6);
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
      <div>
        <CategoryList
          techCategories={techCategories}
          handleFilter={handleFilter}
        />
        <div class="">
          <div ref={shuffleContainer} class="row my-shuffle-container">
            {portfolio.map((item) => (
              <figure
                key={item.id}
                class="shuffle-img2 picture-item"
                data-groups={JSON.stringify([item.tech])}
              >
                <div className=" group relative overflow-hidden  ">
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
                      <p className="cats text-[rgba(255,255,255,0.8)] m-0 translate-y-[30px] opacity-0 invisible transition-all ease-in-out duration-1000 hover:text-[#191919] group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
                        <Link href={`/portfolioCategory/${item?.tech}`}>
                          {item?.tech}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeShuffle;
