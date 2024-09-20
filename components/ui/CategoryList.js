"use client";
import React, { useState } from "react";

const CategoryList = ({ techCategories, handleFilter }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div>
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
    </div>
  );
};

export default CategoryList;
