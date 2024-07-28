import React from "react";
import Nav from "../components/Nav";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CardBody, CardContainer, CardItem } from "../components/UI/3d-card";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll();
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  useGSAP(() => {
    var tl = gsap.timeline();
    gsap.to(".hero", {
      scrollTrigger: {
        trigger: ".hero",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "18px",
        //   fontWeight: "bold",
        //   indent: 20,
        // },
        start: "100% 100%",
        end: "150% 60%",
        scrub: true,
      },
      backgroundSize: "180%",
    });
    gsap.to(".heading1", {
      scrollTrigger: {
        trigger: ".heading1",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "18px",
        //   fontWeight: "bold",
        //   indent: 20,
        // },
        start: "100% 70%",
        end: "150% 50%",
        scrub: true,
      },
      opacity: 0,
    });
    gsap.to(".heading1", {
      scrollTrigger: {
        trigger: ".heading1",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "18px",
        //   fontWeight: "bold",
        //   indent: 20,
        // },
        start: "100% 100%",
        end: "150% 60%",
        scrub: true,
      },
      fontSize: "2rem",
    });
    //----------------------------------------------------------------
    tl.to(".A0", {
      scrollTrigger: {
        trigger: ".heading1",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "18px",
        //   fontWeight: "bold",
        //   indent: 20,
        // },
        start: "110% 90%",
        end: "10% 20%",
        scrub: true,
      },
      // fontSize: "2rem",
      left: "10vw",
    });
    tl.to(".A1", {
      scrollTrigger: {
        trigger: ".heading1",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "18px",
        //   fontWeight: "bold",
        //   indent: 20,
        // },
        start: "100% 75%",
        end: "15% 20%",
        scrub: true,
      },
      // fontSize: "2rem",
      left: "12vw",
    });
    tl.to(".A2", {
      scrollTrigger: {
        trigger: ".heading1",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "18px",
        //   fontWeight: "bold",
        //   indent: 20,
        // },
        start: "100% 60%",
        end: "18% 20%",
        scrub: true,
      },
      // fontSize: "2rem",
      left: "30vw",
    });
    tl.to(".A3", {
      scrollTrigger: {
        trigger: ".heading1",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "18px",
        //   fontWeight: "bold",
        //   indent: 20,
        // },
        start: "100% 55%",
        end: "18% 20%",
        scrub: true,
      },
      // fontSize: "2rem",
      left: "37vw",
    });
    tl.to(".A4", {
      scrollTrigger: {
        trigger: ".heading1",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "18px",
        //   fontWeight: "bold",
        //   indent: 20,
        // },
        start: "100% 50%",
        end: "19% 15%",
        scrub: true,
      },
      // fontSize: "2rem",
      left: "43vw",
    });
    tl.to(".A5", {
      scrollTrigger: {
        trigger: ".heading1",
        // markers: {
        //   startColor: "white",
        //   endColor: "white",
        //   fontSize: "18px",
        //   fontWeight: "bold",
        //   indent: 20,
        // },
        start: "100% 45%",
        end: "21% 10%",
        scrub: true,
      },
      // fontSize: "2rem",
      left: "54vw",
      color: "#f97316",
    });
  });
  return (
    <>
      <div
        style={{ backgroundSize: "100%" }}
        className="hero min-h-screen bg-base-300 bg-cover  bg-center bg-[url('/assests/images/wallpaper1.jpg')]  bg-blend-overlay "
      >
        <h1 className=" heading1 font-extrabold text-white capitalize absolute top-96 text-7xl  transition duration-100 ease-linear ">
          stop wishing <br /> start{" "}
          <span className="text-orange-500 uppercase">doing</span>
        </h1>
        <div
          className=" down1 transition duration-100 ease-linear w-full  bg-gradient-to-t from-[rgba(23,26,38,1)] from-29% via-[rgba(15,17,25,0.9298039284073004)] via-54%  via-[rgba(23,26,38,0.873781519443715) ] via-64% via-[rgba(23,26,38,0.708515413001138)] via-74% to-[rgba(0,0,0,0)] to-100%

          h-20 absolute bottom-0 left-0 flex  px-10  gap-2   items-end shrink-0"
        >
          <h3 className="A0  absolute left-[98vw] transition duration-100 ease-linear tracking-widest text-xl  capitalize">
            A
          </h3>
          <h3 className=" A1 absolute left-[100vw] transition duration-100 ease-linear tracking-widest text-xl shrink-0 w-max  capitalize">
            fitness movement
          </h3>
          <h3 className=" A2 absolute left-[100vw] transition duration-100 ease-linear tracking-widest text-xl shrink-0 w-max capitalize">
            that is
          </h3>
          <h3 className=" A3 absolute left-[100vw] transition duration-100 ease-linear tracking-widest text-xl capitalize ">
            worth
          </h3>
          <h3 className=" A4 absolute left-[100vw] transition duration-100 ease-linear tracking-widest text-xl shrink-0 w-max capitalize">
            breaking a
          </h3>
          <h3 className=" A5 absolute left-[100vw] transition duration-100 ease-linear tracking-widest text-xl w-max font-semibold capitalize ">
            sweat for
          </h3>
        </div>
      </div>
      <div className="w-full  bg-[#171A26]   py-5  grid grid-cols-3 px-20 ">
        {[
          {
            name: "WorkOut Planning",
            img: "https://i.pinimg.com/564x/bc/d8/28/bcd8283779fa74d1735143974325a30c.jpg",
            // img: "https://i.pinimg.com/564x/dd/c4/30/ddc430a348a51bdcfdaeee64aaf3f07b.jpg",
            // img: "https://i.pinimg.com/736x/99/95/a6/9995a61b78fb566a3a244839d3ad3c89.jpg",
            // img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/35ce57a8-5126-44be-b421-a126b9051412.png",
          },
          {
            name: "Diet Planning",
            img: "https://i.pinimg.com/564x/06/ab/b1/06abb1d19648faebb2ebd29df63af696.jpg",
            // img: "https://articles-1mg.gumlet.io/articles/wp-content/uploads/2016/02/healthy-weight-loss-diet-plan-copy-2.jpg?compress=true&quality=80&w=576&dpr=1.6",
            // img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png",
          },
          {
            name: "YOGA",
            disc: "haha",
            img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_2,f_auto,fl_progressive//image/diy/1036dfa9-a6fe-40c6-a3ba-5c537672e357",
          },
        ].map((det, index) => {
          return (
            <CardContainer key={index} className="inter-var ">
              <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#232631] dark:border-white/[0.2] border-black/[0.1]  max-h-[45vh] w-80 md:w-[22vw] rounded-xl  flex flex-col items-center justify-center  ">
                <Link to={`/`}>
                  <CardItem
                    translateZ="60"
                    className="w-full  text-md font-bold text-neutral-600 dark:text-white text-center flex justify-center items-center"
                  >
                    {`${det.name}`}
                  </CardItem>

                  <CardItem translateZ="80" className="w-full mt-4 relative">
                    <img
                      src={`${det.img}`}
                      height="1000"
                      width="1000"
                      className="h-40 w-[90%] mx-auto  object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </Link>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </>
  );
};

export default Home;
