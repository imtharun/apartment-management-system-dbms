import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HamContext } from "../HamContextProvider";
import jasmineImage from "./../assets/jasmine.png";

function Header(props) {
  const nav = useNavigate();

  const logoutHandler = function () {
    localStorage.clear();
    nav("/", { replace: true });
  };

  const { hamActive, hamHandler } = useContext(HamContext);
  const user = JSON.parse(localStorage.getItem("whom")).userType;
  return (
    <nav className="w-full sticky z-50 top-0 h-14  bg-blue-500">
      <div className=" flex items-center justify-between p-2">
        <div className="ml-4 flex items-center justify-between">
          <img className="h-10 w-10" src={jasmineImage} alt="Jasmine Icon" />
          <h1 className="text-base md:text-lg px-2 font-semibold text-white">
            Jasmine Towers
          </h1>
        </div>
        <div>
          <button
            className="hidden md:block text-white font-medium text-base transition duration-300 border-2 hover:border-b-white border-transparent mr-5"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden absolute top-4 right-4">
          <button onClick={hamHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* HamMenu */}
      {hamActive && (
        <div
          style={{
            transform: hamActive ? "translateX(0px)" : "translateX(-300px)",
          }}
          className="md:hidden fixed left-0 top-14 transition duration-300 w-[200px] h-full rounded-r-md text-sm bg-blue-200 p-3 z-50"
        >
          <ul className="font-medium">
            {props.forHam &&
              props.forHam.map((ele, index) => {
                if (ele === "Logout") {
                  return (
                    <li key={index + 1} className="mt-6 px-8 text-left">
                      <NavLink to="/" onClick={hamHandler}>
                        <span
                          className="transition duration-300 border-2 border-transparent hover:border-b-black"
                          onClick={logoutHandler}
                        >
                          {ele}
                        </span>
                      </NavLink>
                    </li>
                  );
                }
                return (
                  <li key={index + 1} className="mt-6 px-8 text-left">
                    <NavLink
                      to={`/${user}/${ele.replace(/\s/g, "").toLowerCase()}`}
                      onClick={hamHandler}
                    >
                      <span className="transition duration-300 border-2 border-transparent hover:border-b-black">
                        {ele}
                      </span>
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
