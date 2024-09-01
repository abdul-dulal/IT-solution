import React from "react";
import Pagination from "../../components/ui/Blogs";
import blog from "/public/Blog.json";
const Home = () => {
  return (
    <div>
      <Pagination blogs={blog} />
    </div>
  );
};

export default Home;
