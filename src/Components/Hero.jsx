import React from "react";
import { heroImg1, heroImg2, heroImg3 } from "../Utils/constant";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[90vh] max-sm:px-5">
        <section className="text-center">
          <div className="flex justify-center space-x-5 ">
            <img className="max-sm:w-[200px]" src={heroImg1} alt="" />
            <img className="max-sm:w-[200px]" src={heroImg2} alt="" />
          </div>
          <div className="mt-4">
            <h1 className=" text-headingColor font-my-font1 font-bold text-5xl max-lg:text-3xl max-md:text-xl ">
              Capture your Ideas:
            </h1>
            <h1 className=" text-headingColor font-my-font1 mt-2 font-bold text-5xl  max-lg:text-3xl max-md:text-xl ">
              Craft Texts with AI's Touch
            </h1>
            <p className="text-headingColor font-my-font2 font-semibold mt-4">
              Pocket-sized writing assistant. Content hub. <br /> Creation of
              masterful texts faster than ever. In your style.
            </p>
            <div className="mt-4">
              <button className=" bg-[#685de7] mr-4 text-white px-4 py-3 rounded-md ">
                Try for Free
              </button>
              <button className=" text-textColor font-bold cursor-pointer ">
                Login
              </button>
            </div>
          </div>
          <img className="w-[600px] mt-10 mx-auto" src={heroImg3} alt="" />
        </section>
      </div>
    </>
  );
};

export default Hero;
