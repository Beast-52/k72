import React from "react";
import { BiGlobe } from "react-icons/bi";

const HomeBottom = () => {
  const btns = [
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Agence",
      link: "/agence",
    },
  ];
  return (
    <div className=" flex justify-between  items-end absolute bottom-0 w-full z-10 font-[lausse2]">
      <div className="text-[1.5vw] flex items-center gap-4 text-white ">
        <BiGlobe />
        <h1>MONTREAL_14:11:30</h1>
      </div>
      <div className="flex py-10 items-center justify-center ml-10">
        {btns.map((btn, index) => (
          <a
            key={index}
            href={btn.link}
            className="text-white border-3 leading-none border-white rounded-full text-[5vw] uppercase px-4 py-2 m-2 inline-block hover:bg-white hover:text-black transition-all duration-300"
          >
            {btn.title}
          </a>
        ))}
      </div>
      <div className="flex justify-end h-[42vh]  ">
        <h1 className="text-white w-1/2  ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that thinks through every action to nurture the brand. Tomorrow, in 5 months, and in 5 years. We seek the friction that creates the spark to generate emotion. To ensure an honest relationship, we are unfiltered, we say what needs to be said, we do what needs to be done.</h1>
      </div>
    </div>
  );
};

export default HomeBottom;
