"use client";
import { rubik } from "@/app/fonts";
import React from "react";
import { TfiEmail } from "react-icons/tfi";

const FooterContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} class="relative xs:w-[350px] w-full mt-10">
      <input
        type="email"
        name="EMAIL"
        placeholder="Email Address"
        required
        className={`${rubik.className} w-full h-[68px] border-none bg-[rgba(255,255,255,0.1)] rounded-full outline-none text-[16px] text-[rgba(255,255,255,0.8)] font-normal px-7 mb-4`}
      />
      <button
        type="submit"
        className="absolute  right-2 top-[6px] h-[54px] text-[15px] leading-[60px] text-white border-none font-bold bg-primary hover:bg-secondary rounded-full     px-5 outline-none transition-all duration-400"
      >
        <TfiEmail />
      </button>
    </form>
  );
};

export default FooterContact;
