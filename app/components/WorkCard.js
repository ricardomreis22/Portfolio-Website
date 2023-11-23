import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
const WorkCard = (props) => {
  return (
    <div className="bg-[#dbe1e8] w-[100%] h-[250px] shadow-xl flex flex-col justify-center items-center p-12 rounded-lg hover:bg-gradient-to-b hover:from-[#191d2b]/100 hover:to-[#191d2b]/75 hover:scale-105 duration-300 group">
      <div className="group-hover:hidden flex flex-col justify-center items-center">
        <h1 className=" text-md lg:text-xl xl:text-xl">{props.title}</h1>
        <p className="mt-16 text-xs lg:text-sm xl:text-md">{props.lang}</p>
      </div>
      <div className="hidden group-hover:flex flex-col justify-center items-center text-white">
        <p className="text-center text-sm lg:text-md ">{props.info}</p>
        <div className="mt-6">
          <Link href={`${props.link}`} target="_blank">
            <AiFillGithub size={40} className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
