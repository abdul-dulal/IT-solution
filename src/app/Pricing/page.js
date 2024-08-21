import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import { MdAutoMode, MdOutlineWorkspacePremium } from "react-icons/md";
import { rubik } from "../fonts";
import { FaAward, FaCheckCircle } from "react-icons/fa";
import PricePlanTwo from "../../../components/ui/PricePlanTwo";
import PricePlan from "../../../components/ui/PricePlan";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
const Pricing = () => {
  return (
    <div>
      <BreadCumb currentPage="About" />
      {/* Price Start */}
      <section className="relative pt-[116px] pb-[85px]">
        <div className="container mx-auto xs:px-3 px-4">
          <h6 class="  text-center">Let’s Work</h6>
          <h2 class="text-5xl leading-[58px] font-bold mb-10 text-[#191919] text-center">
            Pricing Plans
          </h2>
          <div class="grid  md:grid-cols-3 xs:grid-cols-2  gap-8">
            <PricePlanTwo plan="Basic Plan" icon={<MdAutoMode />} price="49" />
            <PricePlanTwo plan="Premium Plan" icon={<FaAward />} price="69" />
            <PricePlanTwo
              plan="Business Plan"
              icon={<MdOutlineWorkspacePremium />}
              price="89"
            />
          </div>

          <div className="grid pt-[116px] pb-[85px]  md:grid-cols-3 xs:grid-cols-2  gap-7">
            <PricePlan icon={<MdAutoMode />} title="basic plan" price="49.00" />
            <PricePlan icon={<FaAward />} title="premimum plan" price="69.00" />
            <PricePlan
              icon={<MdOutlineWorkspacePremium />}
              title="business plan"
              price="89.00"
            />
          </div>
        </div>
      </section>
      {/* Price End */}

      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default Pricing;
