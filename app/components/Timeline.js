import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Timeline = (props) => {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute top-0 left-0">
          <div className="flex justify-center items-center bg-[#dbe1e8] rounded-full w-10 h-10 relative">
            <div className="bg-[#191d2b] w-[1px] h-16 absolute top-10"></div>
            <BsFillBriefcaseFill />
          </div>
        </div>
      </div>
      <div className="lg:mb-4 ml-14 lg:mt-2">
        <p className="font-bold text-lg xl:text-xl">
          {props.date}
          <span>{props.course}</span>
        </p>
        <p className="mt-6 text-base xl:text-lg">{props.description}</p>
      </div>
    </div>
  );
};

export default Timeline;
