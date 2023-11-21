import React from "react";
import Overview from "../components/Overview";
import './styles/home.css'
// import TopMovie from "../asset/TopMovie";
import { useSelector } from "react-redux";

const Home = () => {
  // const showFavList = useSelector(state => state.ui.favListVisible);
  const theme = useSelector(state => state.ui.dark);
  return (
    <>
    <div className="home" id={theme ? "" : "light-home"}>
      {/* {!showFavList && <Overview /> } */}
      <Overview />
    </div>
    </>
  );
};


export default Home