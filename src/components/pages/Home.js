import React from "react";
import Overview from "../asset/Overview";
import '../styles/home.css'
import TopMovie from "../asset/TopMovie";
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