import React, { useState } from "react";
import Rules from "./Rules";

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
      <button onClick={handleToggle}>
        {toggle ? `Them's the rules:` : `Rules live here`}
      </button>
      {toggle && <Rules />}
    </div>
  );
}

export default Header;
