import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

const App = () => {
  return (
    <>
      <div className="app bg-[rgb(251,250,254)] h-screen w-full">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default App;
