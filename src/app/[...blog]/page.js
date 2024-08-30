import React from "react";
import Category from "../../../components/ui/blog/Category";
import SingleBlogTwo from "../SingleBlogTwo/page";
export default function AllBlog({ params }) {
  const slug = params.blog[0];
  const paramsTitle = params.blog[1]?.replace(/%20/g, " ");

  if (slug == "blog") {
    return <SingleBlogTwo title={paramsTitle} />;
  } else if (slug == "category") {
    return <Category title="hello" />;
  }
}
