import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="flex justify-start items-center">
      <Link
        href="https://www.linkedin.com/in/ricardo-mdr"
        className="z-50 mr-3 "
        target="_blank"
      >
        <AiFillLinkedin size={30} className="cursor-pointer" />
      </Link>
      <Link
        href="https://github.com/ricardomreis22"
        className="z-50 mr-3"
        target="_blank"
      >
        {" "}
        <AiFillGithub size={30} className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default SocialMedia;
