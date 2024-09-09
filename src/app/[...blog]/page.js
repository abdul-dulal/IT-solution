import React from "react";
import SingleBlogTwo from "../SingleBlogTwo/page";
import BlogCategory from "../blogCategory/page";
import BlogTag from "../BlogTag/page";
import Portfolio from "../portfolio/page";
import PortfolioCategory from "../portolioCategory/page";
import NotFound from "../not-found";
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
  } else if (slug == "portfolio") {
    return <Portfolio title={paramsTitle} />;
  } else if (slug == "folioCat") {
    return <PortfolioCategory title={paramsTitle} />;
  } else {
    return <NotFound />;
  }
}
