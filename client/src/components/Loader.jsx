import React from "react";
import { Hypnosis } from "react-cssfx-loading/lib";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#F5FEFD]">
      <Hypnosis color="rgb(59, 130, 246)" width="30px" height="30px" />
    </div>
  );
};

export default Loader;
