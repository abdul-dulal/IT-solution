"use client";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import BlogTitle from "./BlogTitle";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import Pagination from "./Pagination";

const Blogs = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const blogsPerPage = 6;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * blogsPerPage;

  const currentBlogs = blogs?.slice(offset, offset + blogsPerPage);

  return (
    <div>
      <div>
        {currentBlogs?.map((item) => (
          <div key={item.id}>
            <BlogTitle
              title={item.title}
              subTitle={item.subTitle}
              img={item.img}
              category={item.category}
              readmore={true}
            />
          </div>
        ))}
      </div>

      <div className="my-[60px] flex  justify-center hover:transition-all hover:duration-300 hover:ease-in-out ">
        <Pagination
          currentPage={currentPage}
          blogs={blogs}
          blogsPerPage={blogsPerPage}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};

export default Blogs;
