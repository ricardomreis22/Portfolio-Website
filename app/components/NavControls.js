import React from "react";
import Link from "next/link";
import { AiFillHome, AiFillMail, AiFillFolder } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const NavControls = () => {
  return (
    <div className="md:flex md:flex-col text-2xl">
      <ul>
        <li className="flex justify-center items-center">
          <Link
            href="/"
            className="rounded-full bg-[#dbe1e8] text-[#191d2b] p-4 mb-12 hover:bg-white cursor-pointer"
          >
            <AiFillHome style={{ cursor: "pointer" }} />
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <Link
            href="/dashboard/about"
            className="rounded-full bg-[#dbe1e8] text-[#191d2b] p-4 mb-12 hover:bg-white cursor-pointer"
          >
            <BsFillPersonFill style={{ cursor: "pointer" }} />
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <Link
            href="/dashboard/projects"
            className="rounded-full bg-[#dbe1e8] text-[#191d2b] p-4 mb-12 hover:bg-white cursor-pointer"
          >
            <AiFillFolder style={{ cursor: "pointer" }} />
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <Link
            href="/dashboard/contact"
            className="rounded-full bg-[#dbe1e8] text-[#191d2b] p-4 mb-12 hover:bg-white cursor-pointer"
          >
            <AiFillMail style={{ cursor: "pointer" }} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavControls;
