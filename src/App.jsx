import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import GameArea from "./GameArea";

function App() {
  const [lScore, setLScore] = useState(0);
  const [rScore, setRScore] = useState(0);

  //all helper functions live here

  //need the following:
  //new game
  const newGame = () => {
    setLScore(0);
    setRScore(0);
  };
  //+1 to my team
  const addLCows = () => {
    setLScore(lScore + 1);
  };
  const addRCows = () => {
    setRScore(rScore + 1);
  };
  //-1 to other team
  const minusLCows = () => {
    setLScore(lScore - 1);
  };
  const minusRCows = () => {
    setRScore(rScore - 1);
  };
  //-5 to my team
  const lNotACow = () => {
    setLScore(lScore - 5);
  };
  const rNotACow = () => {
    setRScore(rScore - 5);
  };

  const lReversal = () => {
    setLScore(lScore + 5);
  };

  const rReversal = () => {
    setRScore(rScore + 5);
  };

  return (
    <div className="App">
      <Header />
      <GameArea
        lScore={lScore}
        setLScore={setLScore}
        rScore={rScore}
        setRScore={setRScore}
        addLCows={addLCows}
        addRCows={addRCows}
        minusLCows={minusLCows}
        minusRCows={minusRCows}
        lNotACow={lNotACow}
        rNotACow={rNotACow}
        newGame={newGame}
        lReversal={lReversal}
        rReversal={rReversal}
      />
    </div>
  );
}

export default App;
