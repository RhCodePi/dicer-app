import "./Dice.css";
import { useState } from "react";
import one from "D:/Dev/React/dicer-app/src/images/dice1.jpg";
import two from "D:/Dev/React/dicer-app/src/images/dice2.jpg";
import three from "D:/Dev/React/dicer-app/src/images/dice3.jpg";
import four from "D:/Dev/React/dicer-app/src/images/dice4.jpg";
import five from "D:/Dev/React/dicer-app/src/images/dice5.jpg";
import six from "D:/Dev/React/dicer-app/src/images/dice6.jpg";

function Dice() {
  const [num1, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleClick = () => {
    setNum(randomNumberInRange(0, 5));
    setNum2(randomNumberInRange(0, 5));
  };

  const images = [
    one, 
    two,
    three,
    four,
    five,
    six
  ]

  return (
    <div>
      <div className="dice-container">
        <img className="dice-image" src={images[num1]} alt="One" />
      </div>
      <div className="dice-container">
        <img className="dice-image" src={images[num2]} alt="Two" />
      </div>
      <div className="dice-container">
        <button className="rolling-button" onClick={handleClick}>
          Roll
        </button>
        <h2>first dice : {num1+1}</h2>
        <h2>second dice : {num2+1}</h2>
      </div>
    </div>
  );
}

export default Dice;
