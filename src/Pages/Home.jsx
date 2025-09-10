import React from "react";
import Video from "../components/Home/Video";
import HomeTop from "../components/Home/HomeTop";
import HomeBottom from "../components/Home/HomeBottom";

const Home = () => {
  return (
    <div className="max-h-screen relative">
      <Video  className="absolute"/>
      <HomeTop/>
      <HomeBottom/>
    </div>
  );
};

export default Home;
