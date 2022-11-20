import React, { useState } from "react";

function App() {
  const [defaultColor, thisIsGonnaUseInFunction] = useState(true);
  function mouseover() {
    thisIsGonnaUseInFunction(false);
  }

  function mouseout() {
    thisIsGonnaUseInFunction(true);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={mouseover}
        onMouseOut={mouseout}
        style={{ backgroundColor: defaultColor ? "white" : "black" }}
        //as the current situation of useState(defaultColor) is true so it will print white
        //color unless we wont hover on the submit button. when will hover on the submit button
        //it will call the mouseover function the mouseover is gonna change the state from true to false so it will become black color
      >
        Submit
      </button>
    </div>
  );
}

export default App;
