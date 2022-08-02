import React from "react";

import "./FightingGrid.scss";

const Slot = ({ slot }) => {
  return (
    <div className="slot">
      <div className="slot__card">slot {slot.position}</div>
    </div>
  );
};

const FightingGrid = () => {
  const [slots, setSlots] = React.useState([
    { position: 0, card: "" },
    { position: 1, card: "" },
    { position: 2, card: "" },
    { position: 3, card: "" },
    { position: 4, card: "" },
    { position: 5, card: "" },
    { position: 6, card: "" },
    { position: 7, card: "" },
    { position: 8, card: "" },
  ]);

  return (
    <div className="fighting-grid">
      <div className="fighting-grid__slots">
        {slots.map((slot) => (
          <Slot key={slot.position} slot={slot} />
        ))}
      </div>
    </div>
  );
};

export default FightingGrid;
