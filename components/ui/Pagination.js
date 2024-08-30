"use client";
import React from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const pageCount = 10 / 8;
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    console.log(currentPage);
    // const pageItem = await fetchComments(currentPage);
    // setProduct(pageItem.results);
  };
  return (
    <div className="my-[60px] flex  justify-center hover:transition-all hover:duration-300 hover:ease-in-out ">
      <ReactPaginate
        previousLabel={
          <span className="h-[60px] w-[60px] rounded-full bg-[#f0f4f9] flex  items-center text-[#222] hover:bg-primary  justify-center text-xl hover:transition-all hover:duration-300 hover:ease-in-out hover:text-white">
            <TfiAngleLeft />
          </span>
        }
        nextLabel={
          <span className="h-[60px] w-[60px] rounded-full bg-[#f0f4f9] flex  items-center text-[#222] hover:bg-primary  justify-center text-xl hover:transition-all hover:duration-300 hover:ease-in-out hover:text-white">
            <TfiAngleRight />
          </span>
        }
        pageCount={pageCount}
        onPageChange={handlePageClick}
        previousClassName={"text-2xl font-bold"}
        nextClassName={"text-2xl font-bold"}
        containerClassName={"flex justify-center items-center gap-4"}
        pageClassName={
          "h-[60px] w-[60px] rounded-full bg-[#f0f4f9] flex flex items-center text-[#222] hover:bg-primary  justify-center text-xl hover:transition-all hover:duration-300 hover:ease-in-out hover:text-white"
        }
        activeClassName={
          "h-[60px] w-[60px] rounded-full  bg-primary -pt-6 text-white text-xl flex items-center justify-center"
        }
      />
    </div>
  );
};

export default Pagination;
