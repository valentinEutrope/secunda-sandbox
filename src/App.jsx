import React from "react";
import FightingGrid from "./components/FightingGrid/FightingGrid";
import CharacterSlot from "./components/CharacterSlot";
import CharacterModal from "./components/CharacterModal";
import HandCards from "./components/HandCards";

import Characters from "./fixtures/characters.json";
import Config from "./config";

function App() {
  const [characterModalIsOpen, setCharacterModalIsOpen] = React.useState(false);
  const [selectedCharacter, setSelectedCharacter] = React.useState(
    Characters[0]
  );
  const [deck, setDeck] = React.useState({
    totalCards: ["0", "0", "0", "1", "1", "2", "0", "1", "1", "2"],
    handCards: [], // Main
    discardedCards: [], // Défausse
  });
  const [slots, setSlots] = React.useState([
    { position: 1, cardId: 1 },
    { position: 2, cardId: 2 },
    { position: 3, cardId: 3 },
    { position: 4, cardId: null },
    { position: 5, cardId: null },
    { position: 6, cardId: null },
    { position: 7, cardId: null },
    { position: 8, cardId: null },
    { position: 9, cardId: null },
  ]);

  //Piocher
  const handlePick = React.useCallback(() => {
    if (handCards.length > Config.handCardsSizeMax) {
      return;
    }

    const pickupNumber = Config.handCardsSizeMax - handCards.length;
    // const pickupCards =

    setDeck({ ...deck, handCards: [...deck.handCards, pickupCards] });
  }, [deck.handCards]);

  return (
    <div className="app">
      <div className="section">
        <div className="character-section">
          <CharacterSlot
            character={selectedCharacter}
            setCharacterModalIsOpen={setCharacterModalIsOpen}
          />
        </div>
        <div className="fighting-grid-section">
          <FightingGrid slots={slots} setSlots={setSlots} />
        </div>
        <CharacterModal
          characterModalIsOpen={characterModalIsOpen}
          setCharacterModalIsOpen={setCharacterModalIsOpen}
          setSelectedCharacter={setSelectedCharacter}
          characterList={Characters}
        />
      </div>
      <div className="section">
        <HandCards handCards={deck.handCards} handlePick={handlePick} />
      </div>
    </div>
  );
}

export default App;
