"use client";
import React from "react";
import { usePathname } from "next/navigation";
import BreadCumb from "../../../components/ui/BreadCumb";
import portfolios from "/public/Portfolio.json";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
import ShuffleTwo from "../../../components/CaseStudy/ShuffleTwo";
import CasePaginationTwo from "../../../components/CaseStudy/CasePaginationTwo";
const CaseStudyTwo = () => {
  const pathname = usePathname();
  const portfolio = portfolios.slice(0, 6);
  return (
    <div>
      <BreadCumb currentPage="case study" />

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

export default CaseStudyTwo;
