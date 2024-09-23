import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Image from "next/image";
import { rubik } from "../fonts";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import teams from "/public/Team.json";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";

export const metadata = {
  title: "TeamMember 01-Graptor",
  description: "Technology & IT Solutions ",
};

const TeamMember = () => {
  return (
    <div>
      <BreadCumb currentPage="Team Member" />

      {/* Team Start */}

      <section className="relative pt-[120px] pb-[70px]">
        <div className="container mx-auto xs:px-6 px-4">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-7">
            {teams?.map((team) => {
              return (
                <div
                  key={team.id}
                  style={{ borderRadius: "3px 3px 0 0" }}
                  className="team_02 group relative pb-[60px] mb-[50px] "
                >
                  <Image
                    style={{ borderRadius: "3px 3px 0 0" }}
                    src={team.img}
                    width={500}
                    height={500}
                    alt={team.name}
                    className="w-full"
                  />
                  <div
                    style={{
                      boxShadow: "0px 9px 35px 0px rgba(33,37,41,0.05)",
                      width: "calc(100% - 80px)",
                      transition:
                        "all 350ms cubic-bezier(0.445,0.05,0.55,0.95)",
                    }}
                    className="t01_details bg-white rounded-[3px] text-center absolute left-0 right-0 bottom-0 mx-auto z-[2] pt-[33px] px-[15px] pb-[30px]"
                  >
                    <h3
                      className={`${rubik.className} text-xl font-medium mb-[2px] text-secondary `}
                    >
                      <Link
                        href={`team/${team.name}`}
                        className="text-secondary hover:text-primary"
                      >
                        {team.name}
                      </Link>
                    </h3>
                    <p className="text-[17px] m-0">{team.designation}</p>
                    <div
                      style={{
                        transition:
                          "all 350ms cubic-bezier(0.445, 0.05, 0.55, 0.95)", // Correct syntax
                      }}
                      className=" flex justify-center teams-center text-center overflow-hidden h-0 group-hover:h-[59px] "
                    >
                      <Link
                        target="blank"
                        style={{
                          transition:
                            "all 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                        }}
                        className="h-[30px] w-[30px] flex teams-center justify-center bg-transparent border border-solid border-[rgba(8,24,69,0.16)] rounded-[2px] text-secondary text-center leading-[30px] pt-[1px] mx-[5px] mt-5 mb-[10px] transform translate-y-[150px]  group-hover:transform group-hover:translate-x-0 group-hover:translate-y-0"
                        href="https://www.facebook.com/"
                      >
                        <FaFacebookF className="" />
                      </Link>
                      <Link
                        target="blank"
                        style={{
                          transition:
                            "all 650ms cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                        }}
                        className="h-[30px] w-[30px] flex teams-center justify-center bg-transparent border border-solid border-[rgba(8,24,69,0.16)] rounded-[2px] text-secondary text-center leading-[30px] pt-[1px] mx-[5px] mt-5 mb-[10px] transform translate-y-[150px]  group-hover:transform group-hover:translate-x-0 group-hover:translate-y-0"
                        href="https://twitter.com/"
                      >
                        <FaTwitter />
                      </Link>
                      <Link
                        target="blank"
                        style={{
                          transition:
                            "all 800ms cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                        }}
                        href="instagram.com"
                        className="h-[30px] w-[30px] flex teams-center justify-center bg-transparent border border-solid border-[rgba(8,24,69,0.16)] rounded-[2px] text-secondary text-center leading-[30px] pt-[1px] mx-[5px] mt-5 mb-[10px] transform translate-y-[150px]  group-hover:transform group-hover:translate-x-0 group-hover:translate-y-0"
                      >
                        <FaInstagram />
                      </Link>
                      <Link
                        target="blank"
                        style={{
                          transition:
                            "all 950ms cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                        }}
                        className="h-[30px] w-[30px] flex teams-center justify-center bg-transparent border border-solid border-[rgba(8,24,69,0.16)] rounded-[2px] text-secondary text-center leading-[30px] pt-[1px] mx-[5px] mt-5 mb-[10px] transform translate-y-[150px]  group-hover:transform group-hover:translate-x-0 group-hover:translate-y-0"
                        href="https://www.linkedin.com/"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team End */}

      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default TeamMember;
