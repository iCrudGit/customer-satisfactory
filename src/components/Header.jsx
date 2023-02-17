import React from "react";
import logo from "../images/logo.png";
import {useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  function pathMathRoute(rr) {
    if (rr === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src={logo}
            alt=""
            width="100px"
            className="h-12 w-12 cursor-pointer"
            onClick={()=>navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`text-gray-400 font-semibold cursor-pointer py-3 border-b-[3px] border-b-transparent ${
                pathMathRoute("/") && "text-black border-b-red-600 "
              }`}
              onClick={()=>navigate("/")}
            >
              Home
            </li>
            <li
              className={`text-gray-400 font-semibold cursor-pointer py-3 border-b-[3px] border-b-transparent ${
                pathMathRoute("/login") && "text-black border-b-red-600 "
              }`}
              onClick={()=>navigate("/login")}
            >
              Sign-In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
