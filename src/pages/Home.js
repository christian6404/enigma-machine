import React from "react";
import "../styles/Home.css";

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
