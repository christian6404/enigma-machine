import React from "react";
import "../styles/Home.css";

var alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

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
