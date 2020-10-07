import React from "react";
import styled from "styled-components";

function GameArea(props) {
  const GameCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  const TeamCard = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <div>
      <button onClick={props.newGame}>New game</button>
      <GameCont>
        <TeamCard>
          <h3>L Team</h3>
          <h1>{`Score: ${props.lScore}`}</h1>
          <button onClick={props.addLCows}>My cows</button>
          <button onClick={props.minusRCows}>Their cows</button>
          <button onClick={props.lNotACow}>
            NOT A COW{" "}
            <span role="img" aria-label="thinking-face-emoji">
              🤔
            </span>{" "}
          </button>
        </TeamCard>
        <TeamCard>
          <h3>R Team</h3>
          <h1>{`Score: ${props.rScore}`}</h1>
          <button onClick={props.addRCows}>My cows</button>
          <button onClick={props.minusLCows}>Their cows</button>
          <button onClick={props.rNotACow}>
            NOT A COW{" "}
            <span role="img" aria-label="thinking-face-emoji">
              🤔
            </span>{" "}
          </button>
        </TeamCard>
      </GameCont>
    </div>
  );
}

export default GameArea;
