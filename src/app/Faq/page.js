import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Accrodian from "../../../components/ui/Accrodian";
import AccrodianTwo from "../../../components/ui/AccrodianTwo";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";

const Faq = () => {
  return (
    <div>
      <BreadCumb currentPage="Faq" />

      {/* Faq Start */}
      <section className="relavtive pt-[120px] pb-[100px]">
        <div className="container xl:px-6 px-4 mx-auto">
          <h6 class="  text-center">FAQ</h6>
          <h2 class="sm:text-5xl text-4xl  sm:leading-[58px] leading-[50px] font-bold mb-12 text-[#191919] text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-12 gap-8">
            <div className="lg:col-span-7 col-span-12">
              <Accrodian />
            </div>
            <div className="lg:col-span-5 col-span-12">
              <AccrodianTwo />
            </div>
          </div>
        </div>
      </section>

      {/* Faq End */}

      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default Faq;
