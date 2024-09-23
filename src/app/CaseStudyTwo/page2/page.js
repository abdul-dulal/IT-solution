"use client";
import React from "react";
import BreadCumb from "../../../../components/ui/BreadCumb";
import ShuffleTwo from "../../../../components/CaseStudy/ShuffleTwo";
import FooterTwo from "../../../../components/ui/Footer/FooterTwo";
import CasePaginationTwo from "../../../../components/CaseStudy/CasePaginationTwo";
import portfolios from "/public/Portfolio.json";
import { usePathname } from "next/navigation";
const PageTwo = () => {
  const pathname = usePathname();
  const portfolio = portfolios.slice(5, 10);
  return (
    <div>
      <BreadCumb currentPage="case study two" />

      <section className="py-[120px] relative">
        <div className="container mx-auto xl:px-6 px-4">
          <ShuffleTwo portfolio={portfolio} />
        </div>
      </section>
      <CasePaginationTwo path={pathname} />
      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default PageTwo;
