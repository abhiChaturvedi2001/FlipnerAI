import React from "react";

const AppIntro = () => {
  return (
    <>
      <div className=" w-[90%] h-auto py-5 mx-auto">
        <div className="bg-[#e6e3fc] relative w-full h-auto rounded-lg shadow-lg">
          <img
            className="absolute top-20  left-12 w-[15%] z-10"
            src="https://assets-global.website-files.com/6502daf70790f200f9910c1d/650573f207e8a85550e12884_Group%20368.svg"
            alt=""
          />
          <img
            className="absolute right-12 top-20 w-[15%] z-10"
            src="https://assets-global.website-files.com/6502daf70790f200f9910c1d/6505728b4a3f9d53bfebf8a9_Group%20369.svg"
            alt=""
          />
          <div className="text-center py-14">
            <h1 className="text-headingColor text-3xl font-my-font2 font-bold">
              Convert your thoughts with Flipner into notes and transform
            </h1>
            <h1 className="text-headingColor text-3xl font-my-font2 mt-4 font-bold">
              them into ready-to-use{" "}
              <span className=" text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#695ff4] to-red-[#8d6bf6]">
                content 100x faster with AI
              </span>
            </h1>
            <p className=" font-my-font2 text-headingColor font-medium mt-5 ">
              Create texts in a new way: utilize Flipner as a text and audio
              note-taking tool and <br /> a content hub, serving as a quick
              assistant for writing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppIntro;
