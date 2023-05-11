import React from "react";

function ChoiceCard({ gameItem, handleGameItemChange }) {
  const { url, name } = gameItem;
  return (
    <img
      onClick={() => {
        handleGameItemChange(gameItem);
      }}
      className="choices"
      src={url}
      alt={name}
    />
  );
}

export default ChoiceCard;

// why const {url, name} here? should I make smaller card? or bigger frame?
