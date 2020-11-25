import React from "react";

function GameToggle(props) {
  const { hide } = props;
  return (
    <button onClick={props.toggleGames}>
      {hide ? "Zobrazit počet odehraných her" : "Skrýt počet hraných her"}
    </button>
  );
}

export default GameToggle;
