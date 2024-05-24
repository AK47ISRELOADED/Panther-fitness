import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const Nav = () => {
  const crossRef = useRef();
  const { contextSafe } = useGSAP({ scope: crossRef });

  const [isactive, setisActive] = useState(true);

  const tl = gsap.timeline();

  const cross = contextSafe(() => {
    if (isactive) {
      gsap.to(".fir", { rotate: "32deg" });
      gsap.to(".sec", { rotate: "-33deg" });
      tl.to(".menu", { left: "0%" });

      setisActive(!isactive);
    } else {
      gsap.to(".fir", { rotate: "0deg", marginTop: "0px" });
      gsap.to(".sec", { rotate: "0deg", marginTop: "0px" });
      tl.to(".menu", { left: "100%" });

      setisActive(!isactive);
    }
  });

  //   console.log(cross);

  return (
    <div
      ref={crossRef}
      className="h-20 relative w-full flex items-center bg-[#e6e6e6] justify-between"
    >
      <div className=" h-full md:w-1/2 flex items-center ml-4 ">
        <h1 className="font-bold text-2xl leading-none">PANTHER-FITNESS</h1>
      </div>
      <div
        onClick={cross}
        className="md:w-1/2 items-center  flex  flex-col gap-3"
      >
        <button key={123} className="fir h-1 w-8 bg-black"></button>
        <button key={354} className="sec h-1 w-8 bg-black"></button>
      </div>
      <div className="menu absolute left-full top-16 justify-between px-4 py-4 w-screen  flex flex-col gap-1">
        <a
          className="menu1 font-bold text-l font-[gilroy] bg-zinc-500 px-2 py-4 translate-y-[100%]"
          href=""
        >
          hii
        </a>
        <a
          className="menu2 font-bold text-l font-[gilroy]  bg-zinc-500 px-2 py-4 translate-y-[100%]"
          href=""
        >
          hello
        </a>
        <a
          className="menu3 font-bold text-l font-[gilroy]  bg-zinc-500 px-2 py-4 translate-y-[100%]"
          href=""
        >
          pricing
        </a>
        <a
          className="menu3 font-bold text-l font-[gilroy]  bg-zinc-500 px-2 py-4 translate-y-[100%]"
          href=""
        >
          contact-us
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
