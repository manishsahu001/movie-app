import React, {useState} from "react";
import Overview from "./Overview";
import './styles/home.css'
import TopMovie from "./TopMovie";
const Home = () => {
 
  return (
    <div className="home">
      <Overview />
      <TopMovie />
    </div>
  );
};


export default Home