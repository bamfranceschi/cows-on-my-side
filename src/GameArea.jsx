import React from "react";
import styled from "styled-components";

const NewGameButton = styled.button`
  height: 4rem;
  width: 12rem;
  font-size: 1.7rem;
  margin-top: 4rem;
  border-radius: 8%;
  border: 2px solid darkblue;
  background-color: white;
  color: darkblue;
`;
const GameCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  color: darkblue;
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
  border-radius: 8%;
  border: none;
  background-color: mediumturquoise;
  color: white;
`;

const TheirCowsButton = styled.button`
  height: 6rem;
  width: 17rem;
  font-size: 2rem;
  margin-bottom: 3rem;
  border-radius: 8%;
  border: none;
  background-color: lightcoral;
  color: white;
`;

const NotACowButton = styled.button`
  height: 6rem;
  width: 17rem;
  font-size: 2rem;
  border-radius: 8%;
  border: 2px solid darkblue;
  background-color: white;
  color: darkblue;
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
            <div>
              <MyCowsButton onClick={props.addLCows}>My cows</MyCowsButton>
              <button onClick={props.minusLCows}>j/k</button>
            </div>
            <div>
              <TheirCowsButton onClick={props.minusRCows}>
                Their cows
              </TheirCowsButton>
              <button onClick={props.addRCows}>oops</button>
            </div>
            <div>
              <NotACowButton onClick={props.lNotACow}>
                NOT A COW{" "}
                <span role="img" aria-label="thinking-face-emoji">
                  🤔
                </span>{" "}
              </NotACowButton>
              <button onClick={props.lReversal}>totes was a cow</button>
            </div>
          </ButtonCont>
        </TeamCard>
        <TeamCard>
          <h3>R Team</h3>
          <h1>{`Score: ${props.rScore}`}</h1>
          <ButtonCont>
            <div>
              <MyCowsButton onClick={props.addRCows}>My cows</MyCowsButton>
              <button onClick={props.minusRCows}>j/k</button>
            </div>
            <div>
              <TheirCowsButton onClick={props.minusLCows}>
                Their cows
              </TheirCowsButton>
              <button onClick={props.addLCows}>oops</button>
            </div>
            <div>
              <NotACowButton onClick={props.rNotACow}>
                NOT A COW{" "}
                <span role="img" aria-label="thinking-face-emoji">
                  🤔
                </span>{" "}
              </NotACowButton>
              <button onClick={props.rReversal}>totes was a cow</button>
            </div>
          </ButtonCont>
        </TeamCard>
      </GameCont>
    </div>
  );
}

export default GameArea;
