import React from "react";
import Nav from "../components/Nav";
import Experiment1 from "../pages/Experiment1";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CardBody, CardContainer, CardItem } from "../components/UI/3d-card";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Membership from "./Membership";

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
      scale: "0.3",
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
      left: "28.5vw",
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
      left: "35vw",
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
      left: "41vw",
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
      left: "51vw",
      color: "#f97316",
    });
  });
  return (
    <>
      <div
        style={{ backgroundSize: "100%" }}
        className="hero overflow-x-hidden min-h-screen bg-base-200 bg-cover  bg-center bg-[url('/assests/images/wallpaper1.jpg')]  bg-blend-overlay  "
      >
        {/* <Experiment1 /> */}
        <h1 className=" heading1 leading-[1.2]  font-black font-[abadon]  text-white capitalize absolute top-[25rem] text-7xl tracking-widest  transition duration-100 ease-linear ">
          stop wishing <br /> start{" "}
          <span className="text-orange-500 uppercase">doing</span>
        </h1>
        <div
          className=" down1 transition duration-100 ease-linear w-full overflow-x-hidden  bg-gradient-to-t from-[rgba(23,26,38,1)] from-29%   via-[rgba(23,26,38,0.873781519443715) ] via-34%  to-[rgba(0,0,0,0)] to-100%

          h-20 absolute bottom-0 left-0 flex  px-10  gap-2   items-end shrink-0 font-[abadon]"
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
          <h3 className=" A5 absolute left-[100vw] transition duration-100 ease-linear tracking-widest text-xl w-max font-semibold capitalize text-white ">
            sweat for
          </h3>
        </div>
      </div>
      <div>
        <h1 className="  bg-[#171A26]  mx-auto w-full  text-center text-5xl font-semibold pt-20 ">
          We Offer
        </h1>
        <div className="w-full  bg-[#171A26]  grid grid-cols-3 px-20 ">
          {[
            {
              name: "WorkOut Planning",
              img: "/assests/images/strength.jpg",
            },
            {
              name: "Diet Planning",
              img: "/assests/images/protien.jpg",
            },
            {
              name: "YOGA",
              disc: "haha",
              img: "/assests/images/yoga1.jpg",
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
      </div>
      <Membership />
      <div className="bg-[#10121a56] py-20 px-10 w-[85vw] mt-10 mx-auto rounded-[100px]">
        <div className="collapse collapse-arrow mt-4 bg-[#171A26]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is panther fitness?
          </div>
          <div className="collapse-content">
            <p>
              At panther fitness, we make fitness fun and easy. We have
              best-in-class trainers & offer group workouts ranging from yoga to
              Boxing. Our workouts can be done both at a cult center and at home
              with the help of do it yourself (DIY) workout videos. panther
              fitness uses the best in technology to give you a world-class
              experience. You can book classes, follow workout videos - all with
              the click of a button from the website.{" "}
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow mt-4 bg-[#171A26]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What kind of workout formats are available at cult?
          </div>
          <div className="collapse-content">
            <p>
              At panther centers, you’ll find a wide variety of workout formats,
              such as - Boxing, Dance Fitness, Yoga, S&C, and HRX. These
              workouts focus on strength, muscle endurance, flexibility, stamina
              & balance. So mix it up, pick formats that help you achieve your
              personal fitness goals. You’ll also find unique workout formats
              designed by Bollywood stars like Hrithik Roshan! We can assure you
              that your sessions will be more fun, interesting, and less
              monotonous. You can find more info about all our workout formats
              here. If you prefer to workout at home, we've got you covered! You
              can follow DIY and LIVE videos that are meant for both beginner &
              advanced levels and focus on building strength, stamina &
              mobility.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow mt-4 bg-[#171A26]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How is the Panther Fitness different from a regular gym?
          </div>
          <div className="collapse-content">
            <p>
              With our non-conventional training facility, we aim to give you a
              balanced mix of workouts that will enhance your health while
              having fun at the same time. Panther Fitness differentiates
              itself, from other fitness centers by offering group workouts that
              focus on overall development. Panther Fitness has a simple
              philosophy - make fitness fun and easy with the help of
              best-in-class trainers and group workouts. Our workouts can be
              done both at a Panther Fitness center as group classes and at home
              with the help of do-it-yourself (DIY) workout videos. Panther
              Fitness.fit uses the best in technology to give you a world-class
              experience. You can book classes, follow workout videos - all with
              the click of a button from the Panther Fitness website. To know
              more about Panther Fitness, check this link. Do you find this help
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
