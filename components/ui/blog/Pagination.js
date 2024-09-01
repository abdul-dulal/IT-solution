import React from "react";
import ReactPaginate from "react-paginate";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const Pagination = ({ currentPage, blogs, blogsPerPage, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={
        currentPage > 0 ? (
          <span className="h-[60px] w-[60px] rounded-full bg-[#f0f4f9] flex items-center text-[#222] hover:bg-primary justify-center text-xl hover:transition-all hover:duration-300 hover:ease-in-out hover:text-white">
            <TfiAngleLeft />
          </span>
        ) : (
          ""
        )
      }
      nextLabel={
        <span className="h-[60px] w-[60px] rounded-full bg-[#f0f4f9] flex items-center text-[#222] hover:bg-primary justify-center text-xl hover:transition-all hover:duration-300 hover:ease-in-out hover:text-white">
          <TfiAngleRight />
        </span>
      }
      pageCount={Math.ceil(blogs?.length / blogsPerPage)}
      onPageChange={handlePageClick}
      previousClassName={"text-2xl font-bold"}
      nextClassName={"text-2xl font-bold"}
      containerClassName={"flex justify-center items-center gap-4"}
      pageClassName={
        "h-[60px] w-[60px] rounded-full flex items-center justify-center"
      }
      //   pageLinkClassName={
      //     "h-[60px] w-[60px] rounded-full bg-[#f0f4f9] flex items-center justify-center text-[#222] hover:bg-primary hover:text-white hover:transition-all hover:duration-300 hover:ease-in-out text-xl"
      //   }
      activeClassName={
        "h-[60px] w-[60px] rounded-full bg-primary text-white text-xl flex items-center justify-center"
      }
    />
  );
};

export default Pagination;
