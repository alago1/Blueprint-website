import React, { useState, useRef } from "react";
import { RecoilRoot } from "recoil";
import Heading from "./Components/Header/Heading";
import Home from "./Components/Home Page/Home";
import About from "./Components/About Page/About";
import Contact from "./Components/Contact Page/Contact";
import "./App.css";

function App() {
  const [currPage, setCurrPage] = useState("Home");
  const currPageRef = useRef();
  const pages = {
    Home: <Home ref={currPageRef} />,
    About: <About ref={currPageRef} />,
    Contact: <Contact ref={currPageRef} />,
  };

  const handleChangePage = (pageName) => {
    if (pageName in pages) {
      currPageRef.current.undraw();
      setTimeout(() => setCurrPage(pageName), 1500);
    } else {
      console.log("Unknown Page Request.");
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
