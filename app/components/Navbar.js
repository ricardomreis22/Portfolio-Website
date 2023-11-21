"use client";

import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import NavControls from "./NavControls";

const Navbar = (props) => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <div className="flex fixed w-full justify-between items-center z-50 p-3 text-xl">
      <div
        className={`flex flex-row items-center lg:hidden ${
          active
            ? "flex flex-col bg-black bg-opacity-90 text-white font-semibold -left-100 transition-all ease-in-out z-10 w-full h-screen absolute top-0 left-0 justify-center items-center text-3xl"
            : "hidden"
        }`}
      >
        <NavControls />
      </div>
      {/* Hamburguer is not open and cross to close if its open */}
      <div className={`${props.hambColor} z-50 lg:hidden`}>
        {!active ? (
          <FaBars onClick={handleClick} />
        ) : (
          active && <FaTimes color="white" onClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
