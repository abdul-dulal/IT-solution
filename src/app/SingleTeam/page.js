import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Image from "next/image";
import member from "/public/img/team/team-member1.jpg";
import TeamMemberSkill from "../../../components/ui/team/TeamMemberSkill";
import TeamDetails from "../../../components/ui/team/TeamDetails";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";

const SingleTeam = () => {
  return (
    <div>
      <BreadCumb currentPage="Team Member" />
      <section className=" relative pt-[120px] pb-[90px]">
        <div className="container mx-auto xl:px-6 px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            <TeamMemberSkill member={member} />
            <TeamDetails name="Doris Jordan" dgn="Design Expert" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default SingleTeam;
