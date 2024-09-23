import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/UI/3d-card";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Membership = () => {
  var data = [
    {
      im: "/assests/images/cult-transform-glass-green.webp",
      head: "cult transforrmation",
      pa: "Get coached to lose weight for good",
    },

    {
      im: "/assests/images/glass-workout-gear.webp",
      head: "workout gear",
      pa: "everything you need for your workout",
    },

    {
      im: "/assests/images/sugar-fit-glass-purple.webp",
      head: "suger fit ",
      pa: "reverse type 2 diabeties and prediabeties",
    },

    {
      im: "/assests/images/glass-blog-multi-color.webp",
      head: "the fit way",
      pa: "make heath easy one day at a time",
    },
  ];
  useGSAP(() => {
    var tl = gsap.timeline();
    gsap.to(".hero2", {
      scrollTrigger: {
        trigger: ".hero2",
        end: "200% 0%",
        pin: true,
        scrub: true,
        // markers: true,
      },
    });
    gsap.from(".head1", {
      top: "90%",
      //   opacity: 0,
      scrollTrigger: {
        trigger: ".head1",
        start: "top 120%",
        end: "bottom 100%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".head1", {
      //   top: "-20%",
      scale: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".head1",
        start: "top 30%",
        end: "bottom 10%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".img1", {
      top: "-50%",
      //   scale: "0.8",
      //   opacity: 0,
      scrollTrigger: {
        trigger: ".img1",
        start: "top 90%",
        end: "bottom 70%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".img1", {
      scale: "0",
      opacity: 0,

      scrollTrigger: {
        trigger: ".img1",
        start: "top 70%",
        end: "bottom 60%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".img2", {
      top: "-50%",
      //   scale: "0.8",
      //   opacity: 0,
      scrollTrigger: {
        trigger: ".img2",
        start: "top 90%",
        end: "bottom 70%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".img2", {
      scale: "0",
      opacity: 0,

      scrollTrigger: {
        trigger: ".img2",
        start: "top 70%",
        end: "bottom 60%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".img3", {
      top: "-50%",
      //   scale: "0.8",
      //   opacity: 0,
      scrollTrigger: {
        trigger: ".img3",
        start: "top 90%",
        end: "bottom 70%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".img3", {
      scale: "0",
      opacity: 0,

      scrollTrigger: {
        trigger: ".img3",
        start: "top 70%",
        end: "bottom 60%",
        // markers: true,
        scrub: true,
      },
    });

    gsap.from(".head2", {
      top: "110%",
      //   opacity: 0,
      scrollTrigger: {
        trigger: ".head2",
        start: "top 40%",
        end: "bottom 20%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".head2", {
      //   top: "-20%",
      scale: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".head2",
        start: "top -20%",
        end: "bottom -40%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".hero3", {
      top: "-80%",
      //   scale: "0.8",
      //   opacity: 0,
      scrollTrigger: {
        trigger: ".hero3",
        start: "top 70%",
        end: "bottom 50%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".hero3 img", {
      // top: "-80%",
      width: "16vw",
      //   scale: "0.8",
      //   opacity: 0,
      scrollTrigger: {
        trigger: ".hero3 img",
        start: "top 55%",
        end: "top 40%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".hero4", {
      top: "-80%",
      //   scale: "0.8",
      //   opacity: 0,
      scrollTrigger: {
        trigger: ".hero4",
        start: "top 60%",
        end: "bottom 30%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".hero4 img", {
      // top: "-80%",
      width: "16vw",
      //   scale: "0.8",
      //   opacity: 0,
      scrollTrigger: {
        trigger: ".hero4 img",
        start: "top 41%",
        end: "top 30%",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".hero5", {
      top: "-180%",
      //   scale: "0.8",
      //   opacity: 0,
      scrollTrigger: {
        trigger: ".hero5",
        start: "50% 40%",
        end: "bottom 0%",
        // markers: true,
        scrub: true,
      },
    });
  });
  return (
    <div className=" overflow-hidden">
      <div className="hero2 bg-[#171A26] h-screen  overflow-hidden w-full px-5  py-10 text-center backdrop-blur-[100px] ">
        <h1 className="head1 z-50 absolute top-[30%] left-[50%] translate-x-[-50%]   text-2xl text-white font-semibold capitalize px-10 rounded-xl py-5 bg-[#ffffff06]  backdrop-blur-[1px] ">
          One place for all your fitness needs
        </h1>
        <div className=" z-[-20] absolute flex w-full h-full items-center justify-between  ">
          <div className="h-[40vw] w-[40vw] translate-x-[-15vw]">
            <img
              className="h-full w-full object-cover"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/pink-blur-circle.svg"
              alt=""
            />
          </div>
          <div className="h-[50vw] w-[50vw]     ">
            <img
              className="h-full w-full object-cover"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/aqua-blur-circle.svg"
              alt=""
            />
          </div>
        </div>
        <img
          className="img1 h-60 shadow-2xl shadow-emerald-500/[0.1]   absolute top-[90%] left-[20%] p-5 rounded-xl bg-[#ffffff06]  backdrop-blur-[1px] "
          src="/assests/images/img1.webp"
          alt=""
        />
        <img
          className="img2 shadow-2xl shadow-emerald-500/[0.1]  h-80 absolute top-[92%] left-[50%] p-5 rounded-xl bg-[#ffffff06]  backdrop-blur-[1px] "
          src="/assests/images/img2.webp"
          alt=""
        />
        <img
          className="img3 h-[16rem] shadow-2xl shadow-emerald-500/[0.1]  absolute top-[110%] left-[2%] p-5 rounded-xl bg-[#ffffff06]  backdrop-blur-[1px] "
          src="/assests/images/img3.webp"
          alt=""
        />
        <img
          className="img3 h-[19rem] shadow-2xl shadow-emerald-500/[0.1]  absolute top-[160%] left-[35%] p-5 rounded-xl bg-[#ffffff06]  backdrop-blur-[1px] "
          src="/assests/images/img4.webp"
          alt=""
        />
        <img
          className="img3 h-[14rem] shadow-2xl shadow-emerald-500/[0.1]  absolute top-[140%] left-[76%] p-5 rounded-xl bg-[#ffffff06]  backdrop-blur-[1px] "
          src="/assests/images/img5.webp"
          alt=""
        />
        {/* //---------------------------------------------------------------- */}

        <h1 className="head2 z-50 absolute top-[20%] left-[50%] translate-x-[-50%]   text-2xl text-white font-semibold capitalize px-10 rounded-xl py-5 bg-[#ffffff06]  backdrop-blur-[1px] ">
          Fun, trainer led group classes One place for all your fitness needs
        </h1>

        <div className=" hero3 flex justify-center left-[50%] translate-x-[-50%] gap-2 items-center absolute top-[150%] ">
          <img
            className=" w-[24vw] rounded-2xl  "
            src="/assests/images/tile-1.webp"
            alt=""
          />
          <img
            className=" w-[24vw] rounded-2xl  "
            src="/assests/images/tile-2.webp"
            alt=""
          />
          <img
            className=" w-[24vw] rounded-2xl  "
            src="/assests/images/tile-3.webp"
            alt=""
          />
          <img
            className=" w-[24vw] rounded-2xl  "
            src="/assests/images/tile-4.webp"
            alt=""
          />
        </div>
        <div className=" hero4  flex justify-center left-[50%] translate-x-[-50%] gap-2 items-center absolute top-[150%]">
          <img
            className=" w-[24vw] rounded-2xl  "
            src="/assests/images/tile-5.webp"
            alt=""
          />
          <img
            className=" w-[24vw] rounded-2xl  "
            src="/assests/images/tile-6.webp"
            alt=""
          />
          <img
            className=" w-[24vw] rounded-2xl  "
            src="/assests/images/tile-7.webp"
            alt=""
          />
          <img
            className=" w-[24vw] rounded-2xl  "
            src="/assests/images/tile-8.webp"
            alt=""
          />
        </div>

        <div className="hero5 absolute top-[110%] left-[50%] translate-x-[-50%]  w-[90vw] mx-auto rounded-[200px] h-[180vh]  bg-[#0f111929] backdrop-blur-3xl grid grid-cols-2 justify-center  items-center">
          {data.map((det, index) => {
            return (
              <CardContainer key={index} className="inter-var ">
                <CardBody
                  className={`relative group/card dark:hover:shadow-2xl bg-[url("${det.im}")] bg-cover dark:hover:shadow-emerald-500/[0.1] dark:bg-[#232631] dark:border-white/[0.2] border-black/[0.1]  max-h-[80vh] w-80 md:w-[35vw] rounded-xl  flex flex-col items-center justify-start `}
                >
                  <Link to={`/`}>
                    <CardItem
                      translateZ="60"
                      className="w-full mt-10 capitalize text-3xl font-bold text-neutral-600 dark:text-white text-center flex justify-center items-center"
                    >
                      {det.head}
                    </CardItem>
                    <CardItem
                      translateZ="40"
                      className="w-full  text-xs font-bold text-neutral-600 dark:text-white text-center flex justify-center items-center"
                    >
                      {det.pa}
                    </CardItem>
                  </Link>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Membership;
