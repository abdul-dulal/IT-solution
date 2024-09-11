import Blog from "../../../components/ui/blog/Blog";
import BreadCumb from "../../../components/ui/BreadCumb";

import FooterTwo from "../../../components/ui/Footer/FooterTwo";
export const metadata = {
  title: "Blog Grid 01-Graptor",
  description: "Technology & IT Solutions ",
};

const BlogGridOne = () => {
  return (
    <div>
      <BreadCumb currentPage="Grid Blog" />
      <section
        style={{ padding: "116px 0 90px" }}
        className="relative pt-[116px]"
      >
        <div className="container mx-auto xs:px-6 px-3">
          <Blog />
        </div>
      </section>
      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default BlogGridOne;
