import React from "react";
import "../styles/Home.css";
import "../components/Plugboard";
import { plugBoard } from "../components/Plugboard";
import { rotor1, rotor2, rotor3 } from "../components/Rotors";

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

const EnigmaOutput = () => {
  return (
    <div className="output">
      <button id="flick" name="flick" type="button" aria-label="Change Output View"></button>

      <ol className="lamps">
        <li className="q">q</li>
        <li className="w">w</li>
        <li className="e">e</li>
        <li className="r">r</li>
        <li className="t">t</li>
        <li className="y">y</li>
        <li className="u">u</li>
        <li className="i">i</li>
        <li className="o">o</li>
        <li className="p">p</li>

        <li className="space"></li>

        <li className="a">a</li>
        <li className="s">s</li>
        <li className="d">d</li>
        <li className="f">f</li>
        <li className="g">g</li>
        <li className="h">h</li>
        <li className="j">j</li>
        <li className="k">k</li>
        <li className="l">l</li>

        <li className="space"></li>

        <li className="z">z</li>
        <li className="x">x</li>
        <li className="c">c</li>
        <li className="v">v</li>
        <li className="b">b</li>
        <li className="n">n</li>
        <li className="m">m</li>
      </ol>

      <div className="encrypted" id="output"></div>
    </div>
  );
};

function Home() {
  return (
    <div className="Home">
      <form>
        <div className="rotors">
          <input type="text" maxLength="2" id="rotor_2" value="01" autoComplete="off" />
          <span className="cog"></span>

          <input type="text" maxLength="2" id="rotor_1" value="01" autoComplete="off" />
          <span className="cog"></span>

          <input type="text" maxLength="2" id="rotor_0" value="01" autoComplete="off" />
          <span className="cog"></span>

          <button className="set" id="set" type="button">Set</button>
        </div>

        <label htmlFor="inputBox">Enter your text:</label>
        <input type="text" id="inputBox" name="inputBox" autoFocus />
        <input type="submit" value="Submit" />

        <EnigmaOutput />
      </form>
    </div>
  );
}

export default Home;
