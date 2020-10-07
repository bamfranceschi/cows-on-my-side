import React from "react";
import styled from "styled-components";

const NewGameButton = styled.button`
  height: 4rem;
  width: 12rem;
  font-size: 1.7rem;
  margin-top: 4rem;
`;
const GameCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MyCowsButton = styled.button`
  height: 6rem;
  width: 17rem;
  font-size: 2rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
`;

const TheirCowsButton = styled.button`
  height: 6rem;
  width: 17rem;
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const NotACowButton = styled.button`
  height: 6rem;
  width: 17rem;
  font-size: 2rem;
`;

function GameArea(props) {
  return (
    <div>
      <NewGameButton onClick={props.newGame}>New game</NewGameButton>
      <GameCont>
        <TeamCard>
          <h3>L Team</h3>
          <h1>{`Score: ${props.lScore}`}</h1>
          <ButtonCont>
            <MyCowsButton onClick={props.addLCows}>My cows</MyCowsButton>
            <TheirCowsButton onClick={props.minusRCows}>
              Their cows
            </TheirCowsButton>
            <NotACowButton onClick={props.lNotACow}>
              NOT A COW{" "}
              <span role="img" aria-label="thinking-face-emoji">
                🤔
              </span>{" "}
            </NotACowButton>
          </ButtonCont>
        </TeamCard>
        <TeamCard>
          <h3>R Team</h3>
          <h1>{`Score: ${props.rScore}`}</h1>
          <ButtonCont>
            <MyCowsButton onClick={props.addRCows}>My cows</MyCowsButton>
            <TheirCowsButton onClick={props.minusLCows}>
              Their cows
            </TheirCowsButton>
            <NotACowButton onClick={props.rNotACow}>
              NOT A COW{" "}
              <span role="img" aria-label="thinking-face-emoji">
                🤔
              </span>{" "}
            </NotACowButton>
          </ButtonCont>
        </TeamCard>
      </GameCont>
    </div>
  );
}

export default GameArea;
