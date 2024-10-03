import React from "react";
import blog from "/public/img/blog/blog10.jpg";
import Image from "next/image";
import { rubik } from "@/app/fonts";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaCheckCircle } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import Link from "next/link";

import Comments from "./Comments";
import blog2 from "/public/Blog.json";
import BlogNavigation from "./BlogNavigation";

const Quote = ({ tags }) => {
  return (
    <div className="">
      <blockquote className="relative my-10 mb-11 bg-transparent pt-10 xs:px-[60px] px-4 after:absolute after:left-[45px] after:top-0 after:-z-[1] after:bg-[url('/img/graptor-quote.png')] after:content-[''] after:w-[113px] after:h-[75px]">
        <p className="text-[24px] text-secondary leading-[32px] italic font-normal ">
          Qodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes
          in futurum quam nunc putamus claram est usus autem vel.
        </p>
        <cite className="block text-[25px] text-primary font-bold mt-[18px]">
          Mark Smith
        </cite>
      </blockquote>
      <h2 className="text-[32px] leading-[48px] font-bold mt-10">
        Committed Toproviding Customers.
      </h2>
      <p className="text-[18px] text-[#565872] leading-[30px] font-normal my-6">
        Lorem available market standard dummy text available market industry
        Lorem Ipsum simply dummy text of free available market.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or
      </p>
      <ul className="mb-6">
        <li
          className={`${rubik.className} flex items-center  gap-4 relative text-lg leading-[34px] text-secondary xs:pl-10 pl-0 mb-[10px]`}
        >
          <FaCheckCircle className="text-primary" />
          Lorem available market standard dummy text available market industry
        </li>
        <li
          className={`${rubik.className} flex items-center  gap-4 relative text-lg leading-[34px] text-secondary xs:pl-10 pl-0 mb-[10px]`}
        >
          <FaCheckCircle className="text-primary" />
          Accusamus et iusto odio dignissimos ducimus qui blanditiis
        </li>
        <li
          className={`${rubik.className} flex items-center  gap-4 relative text-lg leading-[34px] text-secondary xs:pl-10 pl-0 mb-[10px]`}
        >
          <FaCheckCircle className="text-primary" />
          Nam libero tempore, cum soluta nobis est eligendi optio cumque
        </li>
      </ul>
      <div className=" grid sm:grid-cols-2 gap-6 mt-9 mb-[10px]">
        <div className="">
          <figure className="wp-block-image size-full">
            <Image
              src={blog}
              className="mb-[22px] rounded-[5px]"
              alt="Blog Feature"
            />
          </figure>
        </div>
        <div className="">
          <h3 className="text-[28px] leading-[42px] font-bold mb-4">
            Toproviding Available.
          </h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit variations of passages of Lorem Ipsum
            available.
          </p>
        </div>
      </div>
      <p className="mb-6">
        Lorem available market standard dummy available market industry Lorem
        Ipsum simply dummy text available market.There are many variations of
        passages of Lorem Ipsum available, but the majority have suffered
        alteration in some form,
      </p>

      <div className=" mb-[55px]">
        <div className=" xs:flex items-center justify-between">
          <div className=" relative mt-2">
            {tags?.map((tag) => {
              const encTitle = encodeURIComponent(tag);
              return (
                <Link
                  key={tag}
                  style={{
                    boxShadow: "0px 0 20px 0px rgba(130,130,13,0.09)",
                    margin: "0 8px 12px 0",
                  }}
                  href={`/BlogTag/${encTitle}`}
                  className={`${rubik.className} relative text-center  py-[10px] px-5 text-[16px] text-secondary lowercase h-10 rounded-[30px] bg-white hover:bg-primary hover:text-white`}
                >
                  {tag}
                </Link>
              );
            })}
          </div>
          <div className=" xs:text-right xs:mt-0 mt-7 relative">
            <Link
              href="https://www.facebook.com/"
              className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://twitter.com/"
              className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://web.whatsapp.com/"
              className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
            >
              <IoLogoWhatsapp />
            </Link>
            <Link
              href="http://instagram.com/"
              className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
