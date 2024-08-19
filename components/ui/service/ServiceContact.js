"use client";
import React, { useState } from "react";
import { rubik } from "@/app/fonts";
import ContactErrors from "./ContactErrors";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BiPencil } from "react-icons/bi";

const ServiceContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState(false);
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
      validationErrors.name = "error";
    }

    if (!formData.email) {
      validationErrors.email = "error";
    }
    if (!formData.message) {
      validationErrors.message = "error";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
    }
    if (formData.name && formData.email && formData.message) {
      setMessage(true);
    }
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="flex relative w-full ">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="full name"
            className={`border-2 border-gray-300 w-full mb-6  h-[70px] px-4   text-lg  placeholder:text-[rgba(8,24,69,0.8)] placeholder:text-lg placeholder:capitalize placeholder:font-normal bg-transparent rounded-[5px]   focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            } `}
          />
          <FaRegUser
            size={16}
            color="#686EE2"
            className="absolute right-5 top-7 "
          />
        </div>
        <div className="flex relative w-full ">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`border-2 border-gray-300 w-full mb-6  h-[70px] px-4   text-lg  placeholder:text-[rgba(8,24,69,0.8)] placeholder:capitalize placeholder:text-lg placeholder:font-normal bg-transparent rounded-[5px]   focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            } `}
          />
          <MdOutlineEmail
            size={16}
            color="#686EE2"
            className="absolute right-5 top-7 "
          />
        </div>
        <div className="flex relative   w-full mb-6">
          <textarea
            type=""
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className={`border-2 border-gray-300 w-full pt-3  h-[120px] px-4   text-lg  placeholder:text-[rgba(8,24,69,0.8)] placeholder:capitalize placeholder:text-lg placeholder:font-normal  bg-transparent rounded-[5px]   focus:outline-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            } `}
          />
          <BiPencil
            size={16}
            color="#686EE2"
            className="absolute right-5 top-7 "
          />
        </div>
        <button
          type="submit"
          className={`${rubik.className} inline-block m-auto  w-[140px] h-[50px]  text-lg  leading-[.8] text-white  overflow-hidden relative z-[1] text-center capitalize font-medium bg-primary py-[14px] px-[25px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-white before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-secondary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  grap-btn`}
        >
          send
        </button>
        <ContactErrors errors={errors} message={message} />
      </form>
    </div>
  );
};

export default ServiceContact;
