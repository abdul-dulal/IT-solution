"use client";
import React from "react";
import { usePathname } from "next/navigation";
import CasePagination from "../../../../components/CaseStudy/CasePagination";
import portfolios from "/public/Portfolio.json";
import BreadCumb from "../../../../components/ui/BreadCumb";
import ShuffleOne from "../../../../components/CaseStudy/ShuffleOne";
import FooterTwo from "../../../../components/ui/Footer/FooterTwo";
const PageTwo = () => {
  const pathname = usePathname();
  const portfolio = portfolios.slice(5, 10);
  return (
    <div>
      <div>
        <BreadCumb currentPage="Case Study" />

        <section class="relative pt-[100px] pb-5">
          <div class="container mx-auto">
            <ShuffleOne portfolio={portfolio} />
          </div>
        </section>
        <CasePagination path={pathname} />
        {/* Footer */}
        <FooterTwo />
      </div>
    </div>
  );
};

export default PageTwo;
