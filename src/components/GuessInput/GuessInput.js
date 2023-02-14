import React from "react";
import { checkGuess } from "../../game-helpers";

function GuessInput({ guessList, setGuessList, answer, onFinish, ...delegated }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (guess.length !== 5) return;

    const newGuess = checkGuess(guess, answer);
    if (newGuess.filter(({ status }) => status === "correct").length === 5) {
      onFinish("win");
    } else if (guessList.length === 5) {
      onFinish("loss");
    }

    setGuessList((state) => [...state, newGuess]);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        minLength="5"
        maxLength="5"
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        {...delegated}
      />
    </form>
  );
}

export default GuessInput;
