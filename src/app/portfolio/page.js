import React from "react";
import BreadCumb from "../../../components/ui/BreadCumb";
import Image from "next/image";
import portfolio from "/public/Portfolio.json";
import ps1 from "/public/img/portfolio/psingle.jpg";
import ps2 from "/public/img/portfolio/psinlge2.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";
import FooterTwo from "../../../components/ui/Footer/FooterTwo";
const Portfolio = ({ title }) => {
  const single = portfolio.find((item) => item.title === title);

  return (
    <div>
      <BreadCumb currentPage={title} />

      <section class="portfolio-single relative py-[120px]">
        <div class="container mx-auto xl:px-6 xs:px-4">
          <div class="folio-thumb relative">
            <Image
              src={single?.img}
              width={1130}
              height={200}
              className="xl:h-[900px] w-full h-auto mb-[30px]"
              alt=""
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <Image src={ps1} alt="" />
            <Image src={ps2} alt="" />
          </div>

          <div class="grid grid-cols-12 gap-11">
            <div class="sm:col-span-4 col-span-12">
              <div class="detils-folio relative pt-6">
                <span className="block mb-[5px] text-lg text-[#565872] leading-[30px]">
                  Mockup
                </span>
                <h3 className="xl:text-[36px] text-[24px] xl:leading-[42px] leading-[35px] text-[#191919] font-bold">
                  PSD Resource: Notebook Mockup
                </h3>
                <div className="flex items-center">
                  <p className="uppercase texg-base leading-[36px] font-bold text-[#191919]">
                    share
                  </p>
                  <div class="">
                    <Link
                      href="https://www.facebook.com/"
                      className="inline-block text-[rgba(8,24,69,0.4)] text-xl xl:ml-5 ml-3 hover:text-primary"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      href="https://twitter.com/"
                      className="inline-block text-[rgba(8,24,69,0.4)] text-xl xl:ml-5 ml-3 hover:text-primary"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      href="https://web.whatsapp.com/"
                      className="inline-block text-[rgba(8,24,69,0.4)] text-xl xl:ml-5 ml-3 hover:text-primary"
                    >
                      <IoLogoWhatsapp />
                    </Link>
                    <Link
                      href="http://instagram.com/"
                      className="inline-block text-[rgba(8,24,69,0.4)] text-xl xl:ml-5 ml-3 hover:text-primary"
                    >
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
                <a href="#" class="grap-btn to_right">
                  View Project<i class="nss-arrow-alt-circle-right2"></i>
                </a>
              </div>
            </div>
            <div class=" sm:col-span-5 col-span-12">
              <div class=" pt-6">
                <p className="text-lg leading-[30px] text-[#565872] font-normal">
                  Qestigationes demonstraverunt lectores legere me lius quod ii
                  legunt saepius. Claritas est etiam processus dynamicus, qui
                  sequitur mutationem consuetudium lectorum est notare quam
                  littera gothica, quam nunc putamus est notare quam littera
                  gothica, quam nunc putamus parum claram, anteposuerit
                  litterarum quarta decima et quinta decima. quam littera
                  gothica, quam nunc putamus parum claram, anteposuerit
                  litterarum quarta decima et quinta decima. anteposuerit
                  litterarum quarta decima et quinta decima.
                </p>
              </div>
            </div>
            <div class="sm:col-span-3 col-span-12 pt-6">
              <div class="mb-4">
                <h5 className=" text-xl leading-[30px] text-[#8a8a8a] uppercase mb-[1px]">
                  Date:
                </h5>
                <p>10 Feburary 2021</p>
              </div>
              <div class="mb-4">
                <h5 className=" text-xl leading-[30px] text-[#8a8a8a] uppercase mb-[1px]">
                  client:
                </h5>
                <p>Mark Thompson</p>
              </div>
              <div class="mb-4">
                <h5 className=" text-xl leading-[30px] text-[#8a8a8a] uppercase mb-[1px]">
                  services:
                </h5>
                <p>
                  <Link href={`/folioCat/${single.tech}`}>{single.tech}</Link>
                </p>
              </div>
              <div class="mb-4">
                <h5 className=" text-xl leading-[30px] text-[#8a8a8a] uppercase mb-[1px]">
                  Address:
                </h5>
                <p>California, TX 70240</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <FooterTwo />
    </div>
  );
};

export default Portfolio;
