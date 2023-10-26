import React, {useState} from "react";
import Card from "./Card";
import CardOverview from "./CardOverview";
import Overview from "./Overview";

const Home = () => {
 
  return (
    <div className="home">
      {/* <h1>Home</h1> */}
        {/* {selectedCard && <CardOverview data={selectedCard} />}
      <div className="cards-container">
        {cardData.map((card, index) => (
          <Card key={index} data={card} onClick={handleCardClick} />
        ))}
      </div> */}

      <Overview />
    </div>
  );
};


export default Home