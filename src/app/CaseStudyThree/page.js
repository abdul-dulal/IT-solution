"use client";
import React from "react";
import { usePathname } from "next/navigation";
import BreadCumb from "../../../components/ui/BreadCumb";
import portfolios from "/public/Portfolio.json";
import ShuffleTwo from "../../../components/CaseStudy/ShuffleTwo";
import Footer from "../../../components/ui/Footer/Footer";
import CasePaginationTwo from "../../../components/CaseStudy/CasePaginationTwo";
const CaseStudyThree = () => {
  const pathname = usePathname();
  const portfolio = portfolios.slice(0, 6);

  return (
    <div>
      <BreadCumb currentPage="Case Study" />

      <section className=" relative py-[120px]">
        <div className="container mx-auto">
          <ShuffleTwo portfolio={portfolio} />
        </div>
      </section>
      <CasePaginationTwo path={pathname} />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CaseStudyThree;
