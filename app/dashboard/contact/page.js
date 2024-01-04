"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import NavControls from "../../components/NavControls";
import SocialMedia from "../../components/SocialMedia";
import PageTitle from "../../components/PageTitle";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import Form from "../../components/Form";

const Contact = () => {
  return (
    <div className="#dbe1e8 text-[#191d2b]">
      <Navbar />
      <div className="hidden  absolute right-0 top-[35%] mr-12 lg:block">
        <NavControls />
      </div>
      <div className="flex flex-col justify-center items-center text-sm">
        <div className="flex flex-col justify-center lg:items-center lg:w-[50%]">
          <div className="mb-20">
            <PageTitle title="Contact" />
          </div>
          <p className="lg:text-xl mb-24">
            If you need anything please contact me!
          </p>
        </div>
        <div className="w-[90%] mt-10 md:flex md:justify-center md:items-center">
          <Form />
          <div className="mt-32 flex flex-col items-center w-[90%] md:w-1/2 md:items-end lg:items-center">
            <div className="flex mb-5 justify-center items-center">
              <AiFillPhone size={"1.5rem"} className="mr-5" />
              <span className="xl:text-xl">+447554913107</span>
            </div>
            <div className="flex mb-10 justify-center items-center">
              <AiFillMail size={"1.5rem"} className="mr-5" />
              <span className="xl:text-xl">ricardomreis22@hotmail.com</span>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
