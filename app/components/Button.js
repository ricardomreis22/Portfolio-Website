import React from "react";
import Link from "next/link";

import { BiSolidDownload } from "react-icons/bi";

const Button = (props) => {
  return (
    <div
      className={`
    rounded-full
    bg-[#dbe1e8] font-bold
    border border-solid border-white
    text-[#191d2b]
    hover:bg-white
    ${props.className}`}
    >
      <Link
        href={props.href}
        className={`
        ${props.className}
`}
      >
        {props.buttonName}
      </Link>
    </div>
  );
};

export default Button;
