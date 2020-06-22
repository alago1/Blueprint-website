import React, { useState, useRef } from "react";
import { RecoilRoot } from "recoil";
import Heading from "./Components/Header/Heading";
import Home from "./Components/Home Page/Home";
import About from "./Components/About Page/About";
import "./App.css";

function App() {
  const [currPage, setCurrPage] = useState("Home");
  const currPageRef = useRef();
  const pages = {
    Home: <Home ref={currPageRef} />,
    About: <About ref={currPageRef} />,
    Contact: {},
  };

  const handleChangePage = (pageName) => {
    if (pageName in pages) {
      currPageRef.current.undraw();
      setTimeout(() => setCurrPage(pageName), 2500);
    } else {
      console.log("Unknown Page: " + pageName);
    }
  };

  return (
    <RecoilRoot>
      <div className="App">
        <header>
          <Heading signal={(newPage) => handleChangePage(newPage)} />
        </header>
        <main>{pages[currPage]}</main>
      </div>
    </RecoilRoot>
  );
}

export default App;
