import React from "react";

function GameArea(props) {
  return (
    <div>
      <button onClick={props.newGame}>New Game</button>
      <div>
        <h3>L Team</h3>
        <h1>{`Score: ${props.lScore}`}</h1>
        <button onClick={props.addLCows}>My Cows</button>
        <button onClick={props.minusRCows}>Their Cows</button>
        <button onClick={props.lNotACow}>NOT A COW</button>
      </div>
      <div>
        <h3>R Team</h3>
        <h1>{`Score: ${props.rScore}`}</h1>
        <button onClick={props.addRCows}>My Cows</button>
        <button onClick={props.minusLCows}>Their Cows</button>
        <button onClick={props.rNotACow}>NOT A COW</button>
      </div>
    </div>
  );
}

export default GameArea;
