import React from "react";
import "./App.css";
import Heading from "./Components/Heading";
// import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <header>
        <Heading />
      </header>
      <main>{/* <Main /> */}</main>
      <footer></footer>
    </div>
  );
}

export default App;
