import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [winState, setWinState] = React.useState("none");

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput
        setGuessList={setGuessList}
        guessList={guessList}
        answer={answer}
        onFinish={setWinState}
        disabled={winState !== "none"}
      />
      {winState === "win" && (
        <Banner variant={"happy"} guesses={guessList.length} answer={answer} />
      )}
      {winState === "loss" && (
        <Banner variant={"sad"} guesses={guessList.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
