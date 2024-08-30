import React from "react";
import blog from "/public/img/blog/blog10.jpg";
import Image from "next/image";
import { rubik } from "@/app/fonts";

import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaCheckCircle } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import author from "/public/img/blog/author2.jpg";
import Comments from "./Comments";

const Quote = () => {
  return (
    <div class="">
      <blockquote class="relative my-10 mb-11 bg-transparent pt-10 xs:px-[60px] px-4 after:absolute after:left-[45px] after:top-0 after:-z-[1] after:bg-[url('/img/graptor-quote.png')] after:content-[''] after:w-[113px] after:h-[75px]">
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
          className={`${rubik.class} flex items-center  gap-4 relative text-lg leading-[34px] text-secondary xs:pl-10 pl-0 mb-[10px]`}
        >
          <FaCheckCircle className="text-primary" />
          Lorem available market standard dummy text available market industry
        </li>
        <li
          className={`${rubik.class} flex items-center  gap-4 relative text-lg leading-[34px] text-secondary xs:pl-10 pl-0 mb-[10px]`}
        >
          <FaCheckCircle className="text-primary" />
          Accusamus et iusto odio dignissimos ducimus qui blanditiis
        </li>
        <li
          className={`${rubik.class} flex items-center  gap-4 relative text-lg leading-[34px] text-secondary xs:pl-10 pl-0 mb-[10px]`}
        >
          <FaCheckCircle className="text-primary" />
          Nam libero tempore, cum soluta nobis est eligendi optio cumque
        </li>
      </ul>
      <div class=" grid sm:grid-cols-2 gap-6 mt-9 mb-[10px]">
        <div class="">
          <figure class="wp-block-image size-full">
            <Image
              src={blog}
              className="mb-[22px] rounded-[5px]"
              alt="Blog Feature"
            />
          </figure>
        </div>
        <div class="">
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

      <div class=" mb-[55px]">
        <div class=" xs:flex items-center justify-between">
          <div class=" relative mt-2">
            <Link
              style={{
                boxShadow: "0px 0 20px 0px rgba(130,130,13,0.09)",
                margin: "0 8px 12px 0",
              }}
              href="blog1.html"
              className={`${rubik.className} relative text-center  py-[10px] px-5 text-[16px] text-secondary lowercase h-10 rounded-[30px] bg-white hover:bg-primary hover:text-white`}
            >
              web design
            </Link>
            <Link
              style={{
                boxShadow: "0px 0 20px 0px rgba(130,130,13,0.09)",
                margin: "0 8px 12px 0",
              }}
              className={`${rubik.className} relative text-center  py-[10px] px-5 text-[16px] text-secondary lowercase h-10 rounded-[30px] bg-white hover:bg-primary hover:text-white`}
              href="blog1.html"
            >
              ui/ux design
            </Link>
            <Link
              style={{
                boxShadow: "0px 0 20px 0px rgba(130,130,13,0.09)",
                margin: "0 8px 12px 0",
              }}
              className={`${rubik.className} relative text-center  py-[10px] px-5 text-[16px] text-secondary lowercase h-10 rounded-[30px] bg-white hover:bg-primary hover:text-white`}
              href="blog1.html"
            >
              graphics
            </Link>
          </div>
          <div class=" xs:text-right xs:mt-0 mt-7 relative">
            <a
              target="_blank"
              href="https://www.facebook.com/"
              className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/"
              className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              href="https://web.whatsapp.com/"
              className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              target="_blank"
              href="http://instagram.com/"
              className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div class=" relative border-t border-dashed border-[rgba(8,24,69,0.4)] py-[30px] mb-[60px] border-b  ">
        <div class="">
          <div class="grid xs:grid-cols-2 gap-10">
            <div>
              <a
                class={`${rubik.className} flex  items-center  prev text-lg font-semibold tracking-[0.6px] mb-4  text-black  hover:text-primary leading-[26px]`}
                href="single-blog.html"
              >
                <FaAngleLeft className="text-[20px] mr-4 relative " />
                Previous
              </a>
              <a
                href="single-blog.html"
                className=" text-[18px] leading-[26px]  hover:text-primary block"
              >
                Necessity may give us your best Virtual court system
              </a>
            </div>
            <div>
              <a
                class={`${rubik.className} next flex justify-end  gap-2 items-center text-lg font-semibold tracking-[0.6px] mb-4  text-black hover:text-primary leading-[26px]`}
                href="single-blog.html"
              >
                Next
                <FaAngleRight className="text-[20px] mr-4 relative " />
              </a>
              <Link
                href="single-blog.html"
                className="text-right text-[18px] leading-[26px]  hover:text-primary block"
              >
                Mauris neque nisiibus non elementum venenatis.
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="post-author relative bg-[#f0f4f9] rounded-[10px] pt-10 pb-10 pr-[30px] pl-[200px]">
        <Image
          src={author}
          className="rounded-[50%] absolute left-[35px] top-0 bottom-0 m-auto"
          alt=""
        />
        <h4
          className={`${rubik.className} text-primary text-[24px] font-bold mb-1`}
        >
          <a href="blog1.html">Admin Jesik</a>
        </h4>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore.
        </p>
        <div class="relative">
          <a
            target="_blank"
            href="https://www.facebook.com/"
            className="inline-block text-[rgba(8,24,69,0.4)] text-xl hover:text-primary"
          >
            <FaFacebookF />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/"
            className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
          >
            <FaTwitter />
          </a>
          <a
            target="_blank"
            href="https://web.whatsapp.com/"
            className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
          >
            <IoLogoWhatsapp />
          </a>
          <a
            target="_blank"
            href="http://instagram.com/"
            className="inline-block text-[rgba(8,24,69,0.4)] text-xl ml-5 hover:text-primary"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Quote;
