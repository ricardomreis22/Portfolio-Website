import React from "react";

const PageTitle = (props) => {
  return (
    <div className="twelve flex justify-center items-center mt-32 text-2xl font-semibold drop-shadow-xl xl:text-5xl">
      {props.title}
    </div>
  );
};

export default PageTitle;
