"use client";
import { rubik } from "@/app/fonts";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { TbBrowser } from "react-icons/tb";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email) {
      validationErrors.email = "Email is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
    }
    if (formData.name && formData.email) {
      setMessage(
        <p className="text-lg font-normal text-green-400 bg-[#FFF3CD] py-3 text-center">
          <span className="text-xl font-bold">Congratulations</span> Errpr
          found. Please fix those and re submit.
        </p>
      );
    } else {
      setMessage(
        <p className="text-lg font-normal text-black bg-[#FFF3CD] py-3 text-center">
          <span className="text-xl font-bold">Opps!</span> Errpr found. Please
          fix those and re submit.
        </p>
      );
    }
    setFormData({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex relative xl:w-[385px] md:ml-4  lg:w-80 md:w-[300px] w-full ">
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="full name"
          className={`border-2 border-gray-300 w-full  h-[70px] px-3  my-2 text-lg  placeholder:text-[#191919] placeholder:text-lg placeholder:capitalize placeholder:font-normal bg-transparent rounded-[5px] mb-[18px]  focus:outline-none ${
            errors.name ? "border-red-500" : "border-gray-300"
          } `}
        />
        <FaRegUser
          size={16}
          color="#686EE2"
          className="absolute right-6 top-8 "
        />
      </div>

      <div className="flex relative xl:w-[385px] md:ml-4  lg:w-80 md:w-[300px] w-full ">
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={`border-2 border-gray-300 w-full  h-[70px] px-3  my-2 text-lg  placeholder:text-[#191919] placeholder:capitalize placeholder:text-lg placeholder:font-normal bg-transparent rounded-[5px] mb-[18px]  focus:outline-none ${
            errors.email ? "border-red-500" : "border-gray-300"
          } `}
        />
        <MdOutlineEmail
          size={16}
          color="#686EE2"
          className="absolute right-6 top-8 "
        />
      </div>
      <div className="flex relative xl:w-[385px] md:ml-4  lg:w-80 md:w-[300px] w-full ">
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="phone number"
          className={`border-2 border-gray-300 w-full  h-[70px] px-3  my-2 text-lg  placeholder:text-[#191919] placeholder:capitalize placeholder:text-lg placeholder:font-normal bg-transparent rounded-[5px] mb-[18px]  focus:outline-none  `}
        />
        <MdOutlinePhoneEnabled
          size={16}
          color="#686EE2"
          className="absolute right-6 top-8 "
        />
      </div>
      <div className="flex relative xl:w-[385px] md:ml-4  lg:w-80  md:w-[300px] w-full ">
        <input
          type="text"
          name="web"
          id="web"
          placeholder="your website"
          className={`border-2 border-gray-300 w-full  h-[70px] px-3  my-2 text-lg  placeholder:text-[#191919] placeholder:capitalize placeholder:text-lg placeholder:font-normal bg-transparent rounded-[5px] mb-[18px]  focus:outline-none  `}
        />
        <TbBrowser
          size={16}
          color="#686EE2"
          className="absolute right-6 top-8 "
        />
      </div>

      <button
        type="submit"
        className={`${rubik.className} inline-block m-auto xl:w-[385px] md:ml-4  lg:w-80 md:w-[300px] w-full h-[54px]  text-[16px] leading-[.8] text-white  overflow-hidden relative z-[1] text-center capitalize font-medium bg-primary py-[14px] px-[25px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  grap-btn`}
      >
        Submit
      </button>
      <div className="w-[88%] ml-[9px] mt-4 ">{message}</div>
    </form>
  );
};

export default Form;