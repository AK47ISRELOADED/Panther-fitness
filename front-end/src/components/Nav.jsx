import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";

const Nav = () => {
  return (
    <div className="top-0 left-0 fixed flex  items-center justify-between w-full px-6 py-2 text-white z-50 ">
      <div className=" cursor-pointer font-bold text-lg  ">
        <h1>PANTHER FITNESS</h1>
      </div>
      <div className="nav-list md:flex gap-5 hidden font-semibold cursor-pointer ">
        <h1 className="w-12">Home</h1>
        <h1>About Us</h1>
        <h1>Classes</h1>
        <h1>Services</h1>
        <h1>Our team</h1>
      </div>
      <div>
        <CgMenuRightAlt className="text-3xl" />
      </div>
    </div>
  );
};

export default Nav;
