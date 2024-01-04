import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const WorkCard = (props) => {
  const langArr = props.lang;
  return (
    <Link href={`${props.link}`} target="_blank" className="group">
      <div className="flex bg-[#dbe1e8] text-[#191d2b] mb-1 w-[100%] h-[50px] shadow-2xl border-solid border-[#191d2b] border-[2px] justify-center items-center p-7 cursor-pointer">
        <h1 className=" text-md lg:text-xl xl:text-xl font-bold mr-6 cursor-pointer">
          {props.title}
        </h1>
        <AiFillGithub size={40} className="flex cursor-pointer" />
      </div>
      <div className="w-auto h-[220px] bg-[#191d2b] shadow-xl flex flex-col justify-center items-center cursor-pointer">
        <Image
          src={props.img}
          alt="background Image"
          width={0}
          height={0}
          className="hidden w-full group-hover:flex h-[220px] cursor-pointer"
        />
        <div className="flex group-hover:hidden flex-col justify-center items-center text-white w-[70%]">
          <p className="text-center text-sm lg:text-md ">{props.info}</p>
        </div>
      </div>
      <div className="flex justify-left mt-1 flex-wrap">
        {langArr.map((item, index) => {
          return (
            <div
              key={index}
              className="border-[1px] bg-[#dbe1e8]  border-solid border-[#191d2b] text-sm font-bold mr-1 mb-1 px-2"
            >
              {item}
            </div>
          );
        })}
      </div>
    </Link>
  );
};

export default WorkCard;
