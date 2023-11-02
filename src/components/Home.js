import React from "react";
import Overview from "./Overview";
import './styles/home.css'
import TopMovie from "./TopMovie";
import { useSelector } from "react-redux";
const Home = () => {
  const showFavList = useSelector(state => state.ui.favListVisible);
 
  return (
    <div className="home">
      {!showFavList && <Overview /> }
      <TopMovie />
    </div>
  );
};


export default Home