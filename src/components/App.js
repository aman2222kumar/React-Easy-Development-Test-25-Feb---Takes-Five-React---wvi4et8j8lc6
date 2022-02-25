import React, { useState } from "react";

import "../styles/App.css";
function Number(props) {
  return <li>{props.numb}</li>;
}
const App = () => {
  const [number, setNumber] = useState(1);
  const [disabled, setdisabled] = useState(true);
  function GoBack() {
    setNumber((n) => n - 5);
    if (number < 10) {
      setdisabled(true);
    }
  }
  function GoNext() {
    setNumber((n) => n + 5);
    setdisabled(false);
  }

  return (
    <>
      <div id="number-display">
        <li>{number}</li>
        <li>{number + 1}</li>
        <li>{number + 2}</li>
        <li>{number + 3}</li>
        <li>{number + 4}</li>
      </div>
      <button id="back-button" onClick={GoBack} disabled={disabled}>
        Prev Page
      </button>
      <button id="next-button" onClick={GoNext}>
        Next Page
      </button>
    </>
  );
};

export default App;
