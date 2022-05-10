import React from "react";

function Header() {
  return (
    <nav className="flex justify-between my-7 max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-2xl">
          <span className="text-orange-500">Bra</span>
          <span>Va</span>
        </h1>
      </div>
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div className=" hidden md:block text-lg">
          <div className="flex items-center">
            <ul className="flex ">
              <li className="mx-4">
                <a className="hover:border-y-2" href="/">Home</a>
              </li>
              <li className="mx-4">
                <a href="/">About Us</a>
              </li>
              <li className="mx-4">
                <a href="/">Project</a>
              </li>
              <li className="mx-4">
                <a href="/">Contact Us</a>
              </li>
            </ul>
            <button className="ml-8 text-orange-500 border-2 px-6 py-2 rounded-md border-orange-500">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
