import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";

import BlogGrid from "../../../components/ui/blog/blogGrid";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
export const metadata = {
  title: "Blog Grid 02-Graptor",
  description: "Technology & IT Solutions ",
};
const BlogGridTwo = () => {
  return (
    <div>
      <BreadCumb currentPage="Grid Blog" />
      <section className=" relative py-[120px]">
        <div className="container mx-auto xl:px-[30px] xs:px-4 px-3">
          <BlogGrid />
        </div>
      </section>
      <FooterTwo />
    </div>
  );
};

export default BlogGridTwo;
