import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const Nav = () => {
  const crossRef = useRef();
  const { contextSafe } = useGSAP({ scope: crossRef });

  const [isactive, setisActive] = useState(false);

  const cross = contextSafe(() => {
    if (isactive) {
      gsap.to(".fir", { rotate: "55deg", marginTop: "10px" });
      gsap.to(".sec", { rotate: "-55deg", marginTop: "-10px" });
      gsap.to(".menu", { opacity: "1" });

      setisActive(!isactive);
    } else {
      gsap.to(".fir", { rotate: "0deg", marginTop: "0px" });
      gsap.to(".sec", { rotate: "0deg", marginTop: "0px" });
      gsap.to(".menu", { opacity: "0" });

      setisActive(!isactive);
    }
  });

  //   console.log(cross);

  return (
    <div
      ref={crossRef}
      className="h-20 relative w-full flex items-center justify-between py-6"
    >
      <div className=" h-full w-fiT flex items ml-4 ">
        <h1 className="font-bold text-2xl leading-none">PANTHER-FITNESS</h1>
      </div>
      <div className=" h-fit right-0 w-fit ml-12 flex items-center flex-col gap-2">
        <button
          onClick={cross}
          key={123}
          className="fir h-1 w-6 bg-black"
        ></button>
        <button
          key={354}
          onClick={cross}
          className="sec h-1 w-6 bg-black"
        ></button>
      </div>
      <div className="menu absolute top-16 justify-between px-4 py-4 w-screen bg-zinc-300 flex gap-6 opacity-0">
        <a className="font-bold text-l font-[gilroy]" href="">
          hii
        </a>
        <a className="font-bold text-l font-[gilroy]" href="">
          hello
        </a>
        <a className="font-bold text-l font-[gilroy]" href="">
          pricing
        </a>
        <a className="font-bold text-l font-[gilroy]" href="">
          contact-us
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
