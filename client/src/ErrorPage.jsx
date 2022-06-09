import React from "react";
import { useNavigate } from "react-router-dom";
import Error from "./assets/Error.svg";

function ErrorPage() {
  const nav = useNavigate();
  return (
    <div className="h-screen">
      <div className=" flex justify-center items-center">
        <img className="w-[600px] h-[500px] " src={Error} alt="Error 404" />
      </div>
      <button
        onClick={() => {
          nav("/");
        }}
        className="block mx-auto px-3 py-3 font-semibold text-white bg-[#525E72] rounded-md focus:bg-[#B9C5D9] focus:outline-none hover:bg-white hover:text-[#525E72] transition-all duration-300 hover:border-[#525E72] border-transparent border-2"
      >
        Back to Home
      </button>
    </div>
  );
}

export default ErrorPage;
