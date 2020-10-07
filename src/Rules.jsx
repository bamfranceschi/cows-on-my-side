import React from "react";
import styled from "styled-components";

const RulesCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 12rem;
  margin-right: 12rem;
`;

const RulesUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

function Rules() {
  return (
    <RulesCont>
      <RulesUl>
        <li>
          Split the car lengthways: you've got a Left team and a Right team.
          Awkward middle seat must choose sides. Choose wisely.
        </li>
        <li>
          Each team has their territory, corresponding with their side of the
          car. Left team, you get the left side of the road. Right team, you get
          right.
        </li>
        <li>
          You must claim herds of cattle that appear in your territory before
          the other team claims them. If you claim yours first, you score a
          point. Should you fail, you lose a point.
        </li>
      </RulesUl>
      <RulesUl>
        <li>
          If you think you saw a cow, but it was in fact a horse, bale of hay,
          old tractor, UFO, etc., your team loses 5 points.
        </li>
        <li>
          Herds are divided by fences. Like Highlander, THERE CAN BE ONLY ONE
          herd per fenced field. Insert bad highland cow pun here.
        </li>
        <li>Don't crash.</li>
      </RulesUl>
    </RulesCont>
  );
}

export default Rules;
