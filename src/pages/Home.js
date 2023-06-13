import React from "react";
import "../styles/Home.css";
import "../components/Plugboard";
import { plugBoard } from "../components/Plugboard";
import { rotor1, rotor2, rotor3 } from "../components/Rotors";

//TODO:
//plugBoard needs to have user input change the values
//rotors need to have the starting position for each rotor not go past 26 and continue to 1 after 26
//rotors need to have rotation, rotor 1 will rotate

function enigmaMachine(
  input,
  config,
  rotor1Offset,
  rotor2Offset,
  rotor3Offset,
  rotateRotor1,
  rotateRotor2,
  rotateRotor3
) {
  let inputArr = input.split("").map((el) => plugBoard[el]);
  return inputArr;
}

console.log(enigmaMachine("hello world"));

function Home() {
  return (
    <div className="Home">
      <form>
        <label for="inputBox">Enter your text:</label>
        <input type="text" id="inputBox" name="inputBox" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Home;
