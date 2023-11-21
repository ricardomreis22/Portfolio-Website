import React from "react";

const Subtitle = (props) => {
  return (
    <div className="flex flex-col items-center justify-center text-2xl my-24">
      <div className="bg-[#191d2b] h-[1px] w-full mb-12 mt-6 "></div>
      <h2 className="text-4xl font-bold">{props.title}</h2>
    </div>
  );
};

export default Subtitle;
