import React from "react";
import Video from "./Video";

const HomeTop = () => {
  return (
    <div className=" relative z-[10] flex-col flex items-center py-4 h-screen text-white !font-[lausse] tracking-wider leading-none text-[7vw] uppercase font-bold text-center space-y-4">
      <div>The spark </div>
      <div className="flex justify-center items-center space-x-4  w-full">
        <div>Who</div> <Video className="w-20 !h-40 rounded-full" />{" "}
        <div>generates </div>
      </div>
      <div> there creativity</div>
    </div>
  );
};

export default HomeTop;
