import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Accrodian from "../../../components/ui/Accrodian";
import AccrodianTwo from "../../../components/ui/AccrodianTwo";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
export const metadata = {
  title: "Faq Page-Graptor",
  description: "Technology & IT Solutions ",
};
const Faq = () => {
  return (
    <div>
      <BreadCumb currentPage="Faq" />

      {/* Faq Start */}
      <section className="relavtive pt-[120px] pb-[100px]">
        <div className="container mx-auto xl:px-[30px] xs:px-4 px-3">
          <h6 className="  text-center">FAQ</h6>
          <h2 className="mb-12  text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-12 xs:gap-8">
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
