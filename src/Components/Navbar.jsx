import React from "react";
import { appLogo } from "../Utils/constant";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // it contains the location of the current path
  return (
    <>
      <nav className="flex items-center bg justify-between py-2  px-10 min-h-[8vh] shadow-md">
        <Link to={"/"}>
          {" "}
          <img className="w-[150px]" src={appLogo} alt="" />
        </Link>
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <>
            <ul className="flex items-center space-x-8 max-lg:hidden text-headingColor font-medium">
              <li>Home</li>
              <li>How it works</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>For mobile</li>
            </ul>
            <div>
              <button className=" bg-[#685de7] mr-4 text-white px-4 py-3 rounded-md ">
                Try for Free
              </button>
              <Link to={"/login"} target="_blank">
                <button className=" text-textColor font-bold cursor-pointer ">
                  Login
                </button>
              </Link>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
