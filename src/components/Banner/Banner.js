import React from "react";

function Banner({ variant, guesses, answer }) {
  const winMessage = (
    <>
      <strong>Congratulations!</strong> Got it in
      <strong>{" " + guesses} guesses</strong>.
    </>
  );

  const lossMessage = (
    <>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </>
  );

  return (
    <div className={`banner ${variant}`}>
      <p>{variant === "happy" ? winMessage : lossMessage}</p>
    </div>
  );
}

export default Banner;
