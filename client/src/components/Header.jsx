import React from "react";
import jasmineImage from "./../assets/jasmine.png";

function Header() {
  return (
    <nav className="h-14 bg-blue-500">
      <div className="flex items-center justify-between p-2">
        <div className="ml-4 flex items-center">
          <img className="h-10 w-10" src={jasmineImage} alt="Jasmine Icon" />
          <h1 className="font-mons text-lg px-2 font-semibold text-white">
            Jasmine Apartment
          </h1>
        </div>
        <div className="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-4"
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
        </div>
      </div>
    </nav>
  );
}

export default Header;
