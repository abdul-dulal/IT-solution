import React from "react";
import SingleBlogTwo from "../SingleBlogTwo/page";
import BlogCategory from "../blogCategory/page";
import BlogTag from "../BlogTag/page";
export default function AllBlog({ params }) {
  const data = params;

  const slug = params.blog[0];

  const paramsTitle = data.blog[data.blog.length - 1]?.replace(/%20/g, " ");

  if (slug == "blog") {
    return <SingleBlogTwo title={paramsTitle} />;
  } else if (slug == "category") {
    return <BlogCategory title={paramsTitle} />;
  } else if (slug == "tag") {
    return <BlogTag title={paramsTitle} />;
  }
}
