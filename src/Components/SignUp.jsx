import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  return (
    <>
      <div className="bg-[#eaeaea] w-full h-auto">
        <div className="bg-white w-[30%] min-h-[40vh] py-5 px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg">
          <h1 className="font-my-font2 font-semibold ">Sign up for free</h1>
          <form onSubmit={(e) => e.preventDefault()} className=" mt-4">
            <div>
              <label htmlFor="">Email</label>
              <input
                required
                className="block mt-2 bg-gray-100 w-full py-2 px-2 rounded-md"
                type="email"
                placeholder="email *"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="">Name</label>
              <input
                required
                className="block mt-2 bg-gray-100 w-full py-2 rounded-md px-2"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="">Password</label>
              <input
                required
                className="block mt-2 bg-gray-100 w-full py-2 rounded-md px-2"
                type="password"
                placeholder="Password *"
              />
            </div>
            <p></p>
            <div className="mt-5">
              <button className="rounded-md bg-[#685de7] text-white font-my-font2 font-semibold px-3 py-2">
                Sign Up
              </button>
            </div>
            <p className="mt-4">
              Already Have an Account ?{" "}
              <Link to={"/login"}>
                <span className="text-textColor font-semibold">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
