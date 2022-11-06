import React from "react";

const CharacterSlot = ({ character, setCharacterModalIsOpen }) => {
  return (
    <div
      className="character-slot"
      onClick={() => setCharacterModalIsOpen(true)}
    >
      <img alt={character.name} src={character.url} />
    </div>
  );
};

export default CharacterSlot;
