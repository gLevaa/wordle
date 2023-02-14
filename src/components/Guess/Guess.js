import React from "react";
import { checkGuess } from "../../game-helpers";

const BlankContent = (
  <>
    <span className="cell"></span>
    <span className="cell"></span>
    <span className="cell"></span>
    <span className="cell"></span>
    <span className="cell"></span>
  </>
);

function Guess({ guess }) {
  return (
    <p className="guess">
      {!guess && BlankContent}

      {guess && guess.map(({ letter, status }, index) => (
        <span className={`cell ${status}`} key={index}>{letter}</span>
      ))}
    </p>
  );
}

export default Guess;
