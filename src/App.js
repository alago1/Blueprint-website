import React, { useState, useRef } from "react";
import Heading from "./Components/Heading";
import Home from "./Components/Home";
import About from "./Components/About";
import "./App.css";

function App() {
  const [currPage, setCurrPage] = useState("Home");
  const currPageRef = useRef();
  const pages = {
    Home: <Home ref={currPageRef} />,
    About: <About ref={currPageRef} />,
    Contact: {},
  };

  //need to take out the setcurrpage from headernav cause it immediately changes the page without giving a change to undraw
  const handleChangePage = (pageName) => {
    if (pageName in pages) {
      currPageRef.current.undraw();
      setTimeout(() => setCurrPage(pageName), 2500);
    } else {
      console.log("Unknown Page: " + pageName);
    }
  };

  return (
    <div className="App">
      <header>
        <Heading signal={(newPage) => handleChangePage(newPage)} />
      </header>
      <main>{pages[currPage]}</main>
    </div>
  );
}

export default App;
