import React, { Fragment, useEffect, useRef } from "react";
import { ReactComponent as HeaderHome } from "../svgs/1. Header/Header_Home.svg";
import { ReactComponent as HeaderAbout } from "../svgs/1. Header/Header_About.svg";
import { ReactComponent as HeaderContact } from "../svgs/1. Header/Header_Contact.svg";
import DrawSVG from "./Animation/DrawSVG";
import "./Styles/HeaderNav.css";
import { useState } from "react";

function HeaderNav(props) {
  const signalPage = props.signal;
  const [currPage, setCurrPage] = useState("Home");

  const pageRefs = {
    Home: useRef(null),
    About: useRef(null),
    Contact: useRef(null),
  };

  const pages = {
    Home: (
      <HeaderHome
        key="Home"
        onClick={() => handleChangePage("Home")}
        className="header-style highlight clickable"
      />
    ),
    About: (
      <HeaderAbout
        key="About"
        onClick={() => handleChangePage("About")}
        className="header-style highlight clickable"
      />
    ),
    Contact: (
      <HeaderContact
        key="Contact"
        onClick={() => handleChangePage("Contact")}
        className="header-style highlight clickable"
      />
    ),
  };

  useEffect(() => {
    Object.keys(pages)
      .filter((page) => page !== currPage)
      //first draw animation takes a bigger delay than others
      .forEach((page) => pageRefs[page].current.playStartAnimation(4000, 2000));
  }, [pages, pageRefs, currPage]);

  const handleChangePage = (newPage) => {
    // To circumvent checking if position would change based on width, newPage, etc.
    const shouldRedrawAll = newPage === "Contact" || currPage === "Contact";

    if (newPage in pages) {
      if (pageRefs[newPage].current) {
        pageRefs[newPage].current.playEndAnimation();
        if (shouldRedrawAll)
          Object.keys(pages)
            .filter((elem) => elem !== currPage && elem !== newPage)
            .forEach((page) =>
              pageRefs[page].current.playEndAnimation(1500, 1000)
            );
      }
      console.log("Setting new page to " + newPage);

      //signals newPage to app
      signalPage(newPage);

      //delay so that end animation is not cut off be the component being unmounted
      //be careful with this delay: if its bigger than the animation duration+delay some visual glitches might occur
      setTimeout(
        () => {
          setCurrPage(newPage);
        },
        shouldRedrawAll ? 2500 : 2000
      );
    } else {
      console.log("Could not find page: " + newPage + ". Sent Home instead.");
      signalPage("Home");
      setCurrPage("Home");
    }
  };

  const pagesShown = () => {
    return (
      <Fragment>
        {Object.keys(pages)
          .filter((elem) => elem !== currPage)
          .map((elem, index) => {
            return (
              <DrawSVG key={index} ref={pageRefs[elem]}>
                {pages[elem]}
              </DrawSVG>
            );
          })}
      </Fragment>
    );
  };

  return <nav>{pagesShown()}</nav>;
}

export default HeaderNav;
