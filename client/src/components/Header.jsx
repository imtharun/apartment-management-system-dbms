import React from "react";
import jasmineImage from "./../assets/jasmine.png";

function Header(props) {
  return (
    <nav className="h-14 bg-blue-500">
      <div className="flex items-center justify-between p-2">
        <div
          style={{
            filter: props.isHamClicked ? "blur(2px)" : "blur(0px)",
          }}
          className="ml-4 flex items-center justify-between"
        >
          <img className="h-10 w-10" src={jasmineImage} alt="Jasmine Icon" />
          <h1 className="font-mons text-lg px-2 font-semibold text-white">
            Jasmine Towers
          </h1>
        </div>
        <ul className="hidden md:flex text-white ">
          <button>
            <li className="mr-4">
              <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-white">
                Dashboard
              </span>
            </li>
          </button>
          <button>
            <li className="mr-4">
              <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-white">
                Owner
              </span>
            </li>
          </button>
          <button>
            <li className="mr-4">
              <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-white">
                Tenant
              </span>
            </li>
          </button>
          <button>
            <li className="mr-4">
              <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-white">
                Employee
              </span>
            </li>
          </button>
          <button>
            <li className="mr-4">
              <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-white">
                Admin
              </span>
            </li>
          </button>
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => {
              props.setIsHamClicked(!props.isHamClicked);
            }}
          >
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
      <div
        style={{
          transform: props.isHamClicked
            ? "translateX(0px)"
            : "translateX(-300px)",
        }}
        className="md:hidden fixed left-0 top-0 transition-all duration-400 ease-linear w-[200px] h-full rounded-r-md text-xl bg-blue-200 p-3 z-50"
      >
        <ul className="font-semibold">
          <li className="mt-6 px-8 text-left">
            <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-black">
              Dashboard
            </span>
          </li>
          <li className="mt-6 px-8 text-left">
            <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-black">
              Owner
            </span>
          </li>

          <li className="mt-6 px-8 text-left">
            <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-black">
              Tenant
            </span>
          </li>
          <li className="px-8  mt-6 text-left">
            <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-black">
              Employee
            </span>
          </li>
          <li className="mt-6 px-8 text-left">
            <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-black">
              Admin
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
