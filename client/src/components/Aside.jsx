import React from "react";

function Aside() {
  return (
    <div className="h-screen text-xl p-5 bg-blue-200 hidden sm:block">
      <ul className="font-semibold">
        <li className="mt-6 px-8 text-left">
          <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-black">
            Owner
          </span>
        </li>
        <li className="mt-6 px-8 text-left">
          <span className="transition translate-all duration-300 border-2 border-transparent hover:border-b-black">
            Tenet
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
  );
}

export default Aside;
