import React from "react";
import WorkProcess from "./WorkProcess";
import { PiTargetLight, PiUserSwitchDuotone } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { LuComponent } from "react-icons/lu";

const Work = () => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-9">
      <WorkProcess
        title="Collecting Info Data"
        serial="01"
        icon={<LuComponent />}
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
  );
};

export default Work;
