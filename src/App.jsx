import React from "react";
import FightingGrid from "./components/FightingGrid/FightingGrid";
import CharacterSlot from "./components/CharacterSlot";
import CharacterModal from "./components/CharacterModal";

import Characters from "./fixtures/characters.json";
import "./App.scss";

function App() {
  const [characterModalIsOpen, setCharacterModalIsOpen] = React.useState(false);
  const [selectedCharacter, setSelectedCharacter] = React.useState(
    Characters[0]
  );
  const [deck, setDeck] = React.useState({
    totalCards: ["0", "0", "0", "1", "1"],
    cardsLeft: ["0", "0", "0"],
  });

  return (
    <div className="app">
      <div className="character-section">
        <CharacterSlot
          character={selectedCharacter}
          setCharacterModalIsOpen={setCharacterModalIsOpen}
        />
      </div>
      <div className="fighting-grid-section">
        <FightingGrid />
      </div>
      <CharacterModal
        characterModalIsOpen={characterModalIsOpen}
        setCharacterModalIsOpen={setCharacterModalIsOpen}
        setSelectedCharacter={setSelectedCharacter}
        characterList={Characters}
      />
    </div>
  );
}

export default App;
