import React from "react";
import WorkProcess from "./WorkProcess";
import { PiTargetLight, PiUserSwitchDuotone } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";

const Work = () => {
  return (
    <div className="container mx-auto xs:px-6 px-4">
      <h6 className="text-center ">Our Work Process</h6>
      <h2 className="lg:text-[46px] xs:text-4xl text-3xl lg:leading-[58px] xs:leading-[45px] leading-[42px]  mb-5 text-center">
        We Complete Every <br /> Step Carefully
      </h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-9">
        <WorkProcess
          title="Collecting Info Data"
          serial="01"
          icon={<PiUserSwitchDuotone />}
        />
        <WorkProcess
          title="Setup Work Target"
          serial="02"
          icon={<PiTargetLight />}
        />
        <WorkProcess
          title="Creative Ideas"
          serial="03"
          icon={<FaRegLightbulb />}
        />
      </div>
    </div>
  );
};

export default Work;
