import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const WorkCard = (props) => {
  const langArr = props.lang;
  return (
    <div className="group">
      <div className="flex text-[#191d2b] mb-4 w-[100%] h-[50px] shadow-2xl border-solid border-[#191d2b] border-[2px] justify-center items-center p-7 ">
        <h1 className=" text-md lg:text-xl xl:text-xl font-bold mr-6">
          {props.title}
        </h1>
        <Link href={`${props.link}`} target="_blank">
          <AiFillGithub
            size={40}
            className="cursor-pointer hidden group-hover:flex"
          />
        </Link>
      </div>
      <div className="w-full h-[200px] bg-[#191d2b] shadow-xl flex flex-col justify-center items-center duration-300 ">
        <Image
          src={props.img}
          alt="background Image"
          width={0}
          height={0}
          sizes="200vh"
          className="hidden w-full group-hover:flex group-hover:mt-5"
        />
        <div className="flex group-hover:hidden flex-col justify-center items-center text-white w-[70%]">
          <p className="text-center text-sm lg:text-md ">{props.info}</p>
        </div>
      </div>
      <div className="flex justify-left mt-1 flex-wrap group-hover:hidden">
        {langArr.map((item, id) => {
          return (
            <div className="border-[1px] border-solid border-[#191d2b] font-bold mr-1 mb-1 px-2">
              {id}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCard;
