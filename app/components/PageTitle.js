import React from "react";

const PageTitle = (props) => {
  return (
    <div className="flex justify-center items-center mt-12 text-3xl font-semibold drop-shadow-xl xl:text-5xl">
      {props.title}
    </div>
  );
};

export default PageTitle;
