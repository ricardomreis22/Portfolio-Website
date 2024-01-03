import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const SkillsBar = (props) => {
  return (
    <div className="w-full">
      <p className="mb-5 text-base xl:text-lg font-bold">{props.lang}</p>
      <ProgressBar
        completed={props.count}
        bgColor="#191d2b"
        baseBgColor="#dbe1e8"
        transitionDuration="2s"
        animateOnRender={true}
      />
    </div>
  );
};

export default SkillsBar;
