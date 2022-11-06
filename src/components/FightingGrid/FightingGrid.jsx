import React from "react";
import FightingCards from "../../fixtures/fightingCards.json";

const Slot = ({ slot }) => {
  const card = FightingCards.find(
    (fightingCard) => fightingCard.id === slot.cardId
  );

  return (
    <div className="slot">
      <div className="slot__card">
        {card ? (
          <>
            <div>Nom: {card.name}</div>
            <div>Type: {card.type}</div>
            <div>DP: {card.dp}</div>
            <div>DM: {card.dm}</div>
            <div>Cible: {card.target}</div>
            <div>Description: {card.target}</div>
          </>
        ) : (
          `slot ${slot.position}`
        )}
      </div>
    </div>
  );
};

const FightingGrid = ({ slots, setSlots }) => {
  return (
    <div className="fighting-grid">
      <div className="fighting-grid__slots">
        {slots.map((slot) => (
          <Slot key={`slot-${slot.position}`} slot={slot} />
        ))}
      </div>
    </div>
  );
};

export default FightingGrid;
