import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import member from "/public/img/team/team-member1.jpg";
import TeamMemberSkill from "../../../components/ui/team/TeamMemberSkill";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
import TeamMemberDetails from "../../../components/ui/team/TeamMemberDetails";

const TeamDetails = () => {
  return (
    <div>
      <BreadCumb currentPage="Team Member" />
      <section className=" relative pt-[120px] pb-[90px]">
        <div className="container mx-auto xl:px-[30px] xs:px-4 px-3">
          <div className="grid lg:grid-cols-2 gap-10">
            <TeamMemberSkill member={member} />
            <TeamMemberDetails name="Doris Jordan" dgn="Design Expert" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default TeamDetails;
