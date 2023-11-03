import React from "react";
import Overview from "../asset/Overview";
import '../styles/home.css'
import TopMovie from "../asset/TopMovie";
import { useSelector } from "react-redux";
const Home = () => {
  const showFavList = useSelector(state => state.ui.favListVisible);
 
  const theme = useSelector(state => state.ui.dark);
  

  return (
    <div className={theme ? "home" : "light-home"}>
      {!showFavList && <Overview /> }
      <TopMovie />
    </div>
  );
};


export default Home