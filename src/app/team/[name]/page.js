import React from "react";
import team from "/public/Team.json";
import BreadCumb from "../../../../components/ui/BreadCumb";
import TeamMemberSkill from "../../../../components/ui/team/TeamMemberSkill";
import FooterTwo from "../../../../components/ui/Footer/FooterTwo";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { rubik } from "@/app/fonts";
const TeamDetails = ({ params }) => {
  const paramsTitle = params?.name.replace(/%20/g, " ");
  const { id, name, designation, img } = team.find(
    (item) => item.name === paramsTitle
  );

  return (
    <div>
      <BreadCumb currentPage="Team Member" />
      <section className=" relative pt-[120px] pb-[90px]">
        <div className="container mx-auto xl:px-[30px] xs:px-4 px-3">
          <div className="grid lg:grid-cols-2 xs:gap-10">
            <TeamMemberSkill member={img} />
            <div className="relative">
              <h4 className={`${rubik.className} text-[30px] m-0 font-bold `}>
                {name}
              </h4>
              <span className="block uppercase text-primary text-sm  mt-3">
                {designation}
              </span>
              <div className=" flex  items-center text-center  mb-4 ">
                <Link
                  className="h-[30px] w-[30px] flex items-center justify-center bg-transparent border border-solid border-[rgba(8,24,69,0.16)] rounded-[2px] text-secondary hover:text-primary ml-1 text-center leading-[30px] pt-[1px] mx-[5px] mt-5 mb-[10px] transition-all ease-linear duration-400 hover:bg-primary hover:text-white    "
                  href="https://www.facebook.com/"
                  target="blank"
                >
                  <FaFacebookF className="" />
                </Link>
                <Link
                  className="h-[30px] w-[30px] flex items-center justify-center bg-transparent border border-solid border-[rgba(8,24,69,0.16)] rounded-[2px] text-secondary hover:text-primary ml-1 text-center leading-[30px] pt-[1px] mx-[5px] mt-5 mb-[10px] transition-all ease-linear duration-400 hover:bg-primary hover:text-white    "
                  href="https://twitter.com/"
                  target="blank"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="instagram.com"
                  className="h-[30px] w-[30px] flex items-center justify-center bg-transparent border border-solid border-[rgba(8,24,69,0.16)] rounded-[2px] text-secondary hover:text-primary ml-1 text-center leading-[30px] pt-[1px] mx-[5px] mt-5 mb-[10px] transition-all ease-linear duration-400 hover:bg-primary hover:text-white    "
                  target="blank"
                >
                  <FaInstagram />
                </Link>
                <Link
                  className="h-[30px] w-[30px] flex items-center justify-center bg-transparent border border-solid border-[rgba(8,24,69,0.16)] rounded-[2px] text-secondary hover:text-primary ml-1 text-center leading-[30px] pt-[1px] mx-[5px] mt-5 mb-[10px] transition-all ease-linear duration-400 hover:bg-primary hover:text-white    "
                  href="https://www.linkedin.com/"
                  target="blank"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
              <p className="mb-11 text-[rgb(86,88,114)] leading-[31px]">
                Another journey chamber way yet females man. Way extensive and
                dejection get delivered deficient sincerity gentleman age. Too
                end instrument possession contrasted motionless. Calling offence
                six joy feeling. Coming merits and was talent.
              </p>
              <ul className="mb-9 py-6 px-[30px] rounded-[5px] bg-[#f0f4f9] grid xs:grid-cols-2 gap-1 ">
                <li className=" text-lg leading-[36px] flex w-f[50%]">
                  <span className="capitalize inline-block font-semibold text-[#081845]">
                    Phone:
                  </span>
                  <Link
                    href="tel:1245698909"
                    className="text-secondary hover:text-primary ml-1 "
                  >
                    + 124 569 89 09
                  </Link>
                </li>
                <li className=" text-lg leading-[36px] flex w-f[50%]">
                  <span className="capitalize inline-block font-semibold text-[#081845]">
                    Email:
                  </span>
                  <Link
                    href="mailto:yourname@mail.com"
                    className="text-secondary hover:text-primary ml-1"
                  >
                    Yourname@mail.com
                  </Link>
                </li>
                <li className=" text-lg leading-[36px] flex w-f[50%]">
                  <span className="capitalize inline-block font-semibold text-[#081845]">
                    Experience:
                  </span>
                  2 +Years
                </li>
                <li className=" text-lg leading-[36px] flex w-f[50%]">
                  <span className="capitalize inline-block font-semibold text-[#081845] ">
                    Website:
                  </span>
                  <Link
                    target="blank"
                    href="https://psdtowpwork.com/"
                    className="text-secondary hover:text-primary ml-1"
                  >
                    psdtowpwork.com
                  </Link>
                </li>
              </ul>
              <p className="text-[rgb(86,88,114)] leading-[32px] mt-2">
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring. Capitalize on low hanging fruit to identify a
                ballpark value added activity to beta test. Override the digital
                divide with additional clickthroughs from DevOps data analytics
                communication. Capitalize on low hanging fruit to identify a
                ballpark value added activity to beta test. Override the digital
                divide with additional clickthroughs from DevOps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default TeamDetails;
