import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import jasmineImage from "./../assets/jasmine.png";
import { HamContext } from "../HamContextProvider";

function Header(props) {
  const { hamActive, hamHandler } = useContext(HamContext);
  return (
    <nav className="h-14 bg-blue-500">
      <div className="flex items-center justify-between p-2">
        <div
          style={{
            filter: hamActive ? "blur(2px)" : "blur(0px)",
          }}
          className="ml-4 flex items-center justify-between"
        >
          <img className="h-10 w-10" src={jasmineImage} alt="Jasmine Icon" />
          <h1 className="font-mons text-lg px-2 font-semibold text-white">
            Jasmine Towers
          </h1>
        </div>
        {/* Nav */}
        <ul className="hidden md:flex text-white ">
          <li className="mr-4">
            <Link to="/">
              <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-white">
                Dashboard
              </span>
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/owner">
              <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-white">
                Owner
              </span>
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/tenant">
              <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-white">
                Tenant
              </span>
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/employee">
              <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-white">
                Employee
              </span>
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/admin">
              <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-white">
                Admin
              </span>
            </Link>
          </li>
        </ul>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={hamHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
          className="md:hidden fixed left-0 top-0 transition-all duration-400 ease-linear w-[200px] h-full rounded-r-md text-xl bg-blue-200 p-3 z-50"
        >
          <ul className="font-semibold">
            <li className="mt-6 px-8 text-left">
              <NavLink to="/" onClick={hamHandler}>
                <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-black">
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li className="mt-6 px-8 text-left">
              <NavLink to="/owner" onClick={hamHandler}>
                <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-black">
                  Owner
                </span>
              </NavLink>
            </li>

            <li className="mt-6 px-8 text-left">
              <NavLink to="/tenant" onClick={hamHandler}>
                <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-black">
                  Tenant
                </span>
              </NavLink>
            </li>
            <li className="px-8  mt-6 text-left">
              <NavLink to="/employee" onClick={hamHandler}>
                <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-black">
                  Employee
                </span>
              </NavLink>
            </li>
            <li className="mt-6 px-8 text-left">
              <NavLink to="/admin" onClick={hamHandler}>
                <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-black">
                  Admin
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
