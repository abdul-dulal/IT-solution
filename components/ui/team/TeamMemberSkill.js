import Image from "next/image";
import React from "react";
import ProgressBar from "../Progressbar";

const TeamMemberSkill = ({ member }) => {
  return (
    <div class="tm-area">
      <div class="team_thumb">
        <Image
          src={member}
          width={550}
          height={400}
          className="rounded-md"
          alt="Team Member"
        />
      </div>
      <div class=" relative mb-[25px] mt-10">
        <ProgressBar datacount={95} title="software development" />
        <ProgressBar datacount={85} title="Artificial Intelligence" />
        <ProgressBar datacount={80} title="web development" />
      </div>
    </div>
  );
};

export default TeamMemberSkill;
