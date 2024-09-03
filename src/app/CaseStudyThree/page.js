"use client";
import React, { useEffect, useRef, useState } from "react";
import Shuffle from "shufflejs";
import Image from "next/image";
import data from "/public/Portfolio.json"; // Adjust the path to where your JSON file is located
import BreadCumb from "../../../components/ui/BreadCumb";

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
    // Extract unique tech categories
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
            class="shaf-filter group mt-11 mb-[55px] flex justify-center"
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
                  className="col-3@xs col-4@sm col-4@md picture-item"
                  data-groups={JSON.stringify([item.tech])}
                >
                  <div className="picture-item__inner">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={365}
                      height={400}
                    />
                    {/* <div className="picture-item__details">
                      <h3>{item.title}</h3>
                    </div> */}
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
