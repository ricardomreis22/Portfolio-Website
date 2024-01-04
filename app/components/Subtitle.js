import React from "react";

const Subtitle = (props) => {
  return (
    <div className="flex flex-col items-center justify-center text-2xl my-20 w-full">
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <div className="bg-[#191d2b] h-[1px] w-full mt-3 "></div>
    </div>
  );
};

export default Subtitle;
