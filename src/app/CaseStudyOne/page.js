"use client";
import React from "react";
import { usePathname } from "next/navigation";
import BreadCumb from "../../../components/ui/BreadCumb";
import ShuffleOne from "../../../components/CaseStudy/ShuffleOne";
import portfolios from "/public/Portfolio.json";
import CasePagination from "../../../components/CaseStudy/CasePagination";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";

const CaseStudyThree = () => {
  const pathname = usePathname();
  const portfolio = portfolios.slice(0, 6);

  return (
    <div>
      <BreadCumb currentPage="Case Study" />

      <section className="relative pt-[100px] pb-5">
        <div className="container mx-auto">
          <ShuffleOne portfolio={portfolio} />
        </div>
      </section>
      <CasePagination path={pathname} />
      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default CaseStudyThree;
