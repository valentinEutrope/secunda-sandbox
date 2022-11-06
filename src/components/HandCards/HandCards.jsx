import React from "react";

const HandCards = ({ handCards }) => {
  return (
    <div className="hand-cards">
      {handCards.map((handCard, index) => (
        <div key={index} className="hand-cards__card">
          hand card
        </div>
      ))}
    </div>
  );
};

export default HandCards;
