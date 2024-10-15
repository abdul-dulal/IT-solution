"use client";
import React, { useState } from "react";

import { IoLocationOutline } from "react-icons/io5";
import { SiFigma } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

import { rubik } from "@/app/fonts";
import Address from "./Address";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [time, setTime] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      //   console.log("Form submitted:", formData);
      setMessage(true);
    }
    setTime(true);
    const timer = setTimeout(() => {
      setTime(false);
    }, 4000);

    return () => clearTimeout(timer);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value.trim() !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };
  return (
    <section className="relative  py-[110px]">
      <div className="container mx-auto xs:px-4 px-3 ">
        <div className="grid grid-cols-12">
          <div className="md:col-span-5 col-span-12">
            <div className="bg-primary xs:pl-10 pl-6 rounded shadow-md pb-12  ">
              <h2
                className={` mb-10 pt-14  xl:text-5xl xs:leading-[58px] leading-[40px] font-bold   xs:text-[40px] text-[36px] text-white`}
              >
                Contact Us
              </h2>
              <Address
                title="Our Address"
                address="PSD Building, 2 AlBahr St, Loskia sripur, jamukara."
                icon={<IoLocationOutline />}
              />
              <Address
                title="Our Phone"
                address="Telephone : 0029129102320 Mobile : 000 2324 39493"
                icon={<SiFigma />}
              />
              <Address
                title="Our Email"
                address=" Main Email : name@website.com Inquiries : Info@orex.com"
                icon={<TfiEmail />}
              />
            </div>
          </div>
          <div className="md:col-span-7 col-span-12">
            <div className="relative  rounded-[10px] pt-3 pb-[40px] md:pl-[30px]  ">
              <h2 className="lg:text-[46px] xs:text-4xl text-3xl lg:leading-[58px] xs:leading-[45px] leading-[42px]  text-white mb-7">
                Request A Quote
              </h2>
              <p className="text-white mb-8">
                We will be happy to answer your questions.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-2 gap-7">
                  <div className="flex relative w-full ">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="full name"
                      className={`border-2 border-gray-300 w-full  h-[70px] px-4   text-lg  placeholder:text-white placeholder:text-lg placeholder:capitalize placeholder:font-normal bg-transparent rounded-[5px]   focus:outline-none ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } `}
                    />
                  </div>
                  <div className="flex relative   w-full ">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="phone number"
                      className={`border-2 border-gray-300 w-full  h-[70px] px-4   text-lg  placeholder:text-white placeholder:capitalize placeholder:text-lg placeholder:font-normal bg-transparent rounded-[5px]   focus:outline-none  `}
                    />
                  </div>
                  <div className="flex relative w-full ">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className={`border-2 border-gray-300 w-full  h-[70px] px-4   text-lg  placeholder:text-white placeholder:capitalize placeholder:text-lg placeholder:font-normal bg-transparent rounded-[5px]   focus:outline-none ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } `}
                    />
                  </div>
                  <div>
                    <div className="flex relative   w-full ">
                      <input
                        type="text"
                        name="sub"
                        id="sub"
                        placeholder="subject"
                        className={`border-2 border-gray-300 w-full  h-[70px] px-4   text-lg  placeholder:text-white placeholder:capitalize placeholder:text-lg placeholder:font-normal bg-transparent rounded-[5px]   focus:outline-none  `}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex relative   w-full my-7">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    className={`border-2 border-gray-300 w-full pt-3  h-[120px] px-4   text-lg  placeholder:text-white placeholder:capitalize placeholder:text-lg placeholder:font-normal  bg-transparent rounded-[5px]   focus:outline-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } `}
                  />
                </div>

                <button
                  type="submit"
                  className={`${rubik.className} inline-block m-auto  w-full h-[64px]  text-lg  leading-[.8] text-white  overflow-hidden relative z-[1] text-center capitalize font-medium bg-primary py-[14px] px-[25px] cursor-pointer rounded-[5px] transform  transition-all duration-400 hover:text-primary before:absolute before:content-[''] before:w-full before:h-0 before:left-0 before:top-0 before:-z-[1] before:bg-white before:text-primary before:transition-height before:duration-400 before:ease-custom-ease before:delay-0  hover:before:h-full hover:before:top-auto hover:before:bottom-0`}
                >
                  send message
                </button>
                <div className="w-full ml-[9px] mt-4 ">
                  <div className="  ">
                    {time && (
                      <div>
                        {errors.name || errors.email || errors.message ? (
                          <p className="bg-[#FFF3CD] py-4 text-[#856404] px-5 text-base font-normal leading-[30px]">
                            <span className="text-xl font-bold">Opps!</span>{" "}
                            Errpr found. Please fix those and re submit.
                          </p>
                        ) : (
                          ""
                        )}
                        {message ? (
                          <p className="bg-[#D4EDDA] py-4 text-[#157893] px-5 text-base font-normal leading-[30px] text-center">
                            <span className="text-xl font-bold mr-1">
                              Congratulations!
                            </span>
                            Your query successfully sent to site admin.
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
