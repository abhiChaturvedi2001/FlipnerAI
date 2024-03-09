import React from "react";

const HowWork = () => {
  return (
    <>
      <div className="w-full h-screen my-10">
        <div className="text-center">
          <h1 className="text-3xl font-my-font2 font-bold text-headingColor">
            How Does{" "}
            <span className=" text-white px-4 py-2 rounded-md bg-gradient-to-r from-[#695ff4] to-red-[#8d6bf6]">
              Flipner Work ?
            </span>{" "}
          </h1>
          <p className="mt-7 font-my-font2 text-xl text-headingColor font-semibold ">
            Capture your diverse ideas on the go, anywhere, with Flipner. Store
            your text and audio <br /> notes in the content hub. Transform and
            merge your thoughts into structured drafts or <br /> ready-to-use
            texts with Flipner's intuitive AI tool.
          </p>
        </div>
      </div>
    </>
  );
};

export default HowWork;
