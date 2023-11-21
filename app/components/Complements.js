import React from "react";

const Complements = (props) => {
  return (
    <div
      className={`flex item-text border-[2px] border-[#191d2b] bg-[#dbe1e8] shadow-xl h-16 lg:w-32 xl:h-28 xl:w-40 2xl:w-48 3xl:w-60 items-center justify-center hover:bg-[#191d2b] hover:text-white hover:transition-all hover:duration-700 ${props.class}`}
    >
      <p className="text-lg">{props.adj}</p>
    </div>
  );
};

export default Complements;
