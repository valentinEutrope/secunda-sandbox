import React from "react";
import Modal from "react-modal";

const CharacterModal = ({
  characterModalIsOpen,
  setCharacterModalIsOpen,
  setSelectedCharacter,
  characterList,
}) => {
  return (
    <Modal
      isOpen={characterModalIsOpen}
      onRequestClose={() => setCharacterModalIsOpen(false)}
      contentLabel="Sélectionner un personnage"
      style={{
        content: {
          width: "40%",
          minHeight: "10rem",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <>
        <h3>Sélectionner un personnage</h3>
        <select
          onChange={(e) => {
            const selectedCharacter = characterList.find(
              (character) => String(character.id) === e.target.value
            );
            setSelectedCharacter(selectedCharacter);
            setCharacterModalIsOpen(false);
          }}
        >
          {characterList.map((character) => (
            <option key={character.name} value={character.id}>
              {character.name}
            </option>
          ))}
        </select>
      </>
    </Modal>
  );
};

export default CharacterModal;
