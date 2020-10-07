import React, { useState } from "react";
import Rules from "./Rules";
import styled from "styled-components";

const RulesButton = styled.button`
  height: 3rem;
  width: 14rem;
  font-size: 1.3rem;
`;

function Header() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  return (
    <div>
      <h1>
        <span role="img" aria-label="cow-emoji">
          🐮
        </span>{" "}
        Cows On My Side!{" "}
        <span role="img" aria-label="cow-emoji">
          🐮
        </span>
      </h1>
      <h2>The Most Underrated Car Game Ever</h2>
      <RulesButton onClick={handleToggle}>
        {toggle ? `Them's the rules:` : `Rules live here`}
      </RulesButton>
      {toggle && <Rules />}
    </div>
  );
}

export default Header;
