import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="bg-[#eaeaea] w-full h-auto">
        <div className="bg-white w-[30%] min-h-[40vh] py-5 px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg">
          <h1 className="font-bold font-my-font2">Login</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className=" mt-4"
            action=""
          >
            <div>
              <label htmlFor="">Email</label>
              <input
                className="block mt-2 bg-gray-100 w-full py-2 px-2 rounded-md"
                type="email"
                placeholder="email *"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="">Password</label>
              <input
                className="block mt-2 bg-gray-100 w-full py-2 rounded-md px-2"
                type="password"
                placeholder="Password"
              />
            </div>
            <p className="mt-2 hover:underline cursor-pointer">
              Forgot Password ?{" "}
            </p>
            <div className="mt-5">
              <button className="rounded-md bg-[#685de7] text-white font-my-font2 font-semibold px-3 py-2">
                Login
              </button>
              <Link to={"/signup"}>
                <button className="ml-2 py-2 px-3 text-textColor font-semibold curs">
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
