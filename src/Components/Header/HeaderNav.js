import React, { Fragment, useEffect, useRef } from "react";
import { ReactComponent as HeaderHome } from "../../svgs/Header/Header_Home.svg";
import { ReactComponent as HeaderAbout } from "../../svgs/Header/Header_About.svg";
import { ReactComponent as HeaderContact } from "../../svgs/Header/Header_Contact.svg";
import DrawSVG from "../Animation/DrawSVG";
import "./HeaderNav.css";
import { useState } from "react";

function HeaderNav(props) {
  const signalPage = props.signal;
  const [currPage, setCurrPage] = useState();

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
        className="header-style highlight clickable home"
      />
    ),
    About: (
      <HeaderAbout
        key="About"
        onClick={() => handleChangePage("About")}
        className="header-style highlight clickable about"
      />
    ),
    Contact: (
      <HeaderContact
        key="Contact"
        onClick={() => handleChangePage("Contact")}
        className="header-style highlight clickable contact"
      />
    ),
  };

  //first draw
  useEffect(() => {
    // console.log("currPage: " + currPage);
    if (typeof currPage === "undefined") {
      // console.log("in");
      Object.keys(pages)
        .filter((page) => page !== "Home")
        .forEach((page) =>
          // first draw takes a bigger duration and delay
          pageRefs[page].current.playStartAnimation(1000, 2000)
        );
    }
  }, [pageRefs, pages, currPage]);

  //subsequent draws
  useEffect(() => {
    // console.log("(new) currPage: " + currPage);
    if (typeof currPage !== "undefined") {
      // console.log("(new) in");
      Object.keys(pages)
        .filter((page) => page !== currPage)
        .forEach((page) =>
          pageRefs[page].current.playStartAnimation(1000, 300)
        );
    }
  }, [pageRefs, pages, currPage]);

  const handleChangePage = (newPage) => {
    // To circumvent checking if position would change based on width, newPage, etc.
    const shouldRedrawAll = newPage === "Contact" || currPage === "Contact";

    if (newPage in pages) {
      if (pageRefs[newPage].current) {
        pageRefs[newPage].current.playEndAnimation(1000, 0);
        if (shouldRedrawAll)
          Object.keys(pages)
            .filter((elem) => elem !== currPage && elem !== newPage)
            .forEach((page) =>
              pageRefs[page].current.playEndAnimation(1000, 500)
            );
      }
      // console.log("Setting new page to " + newPage);

      //signals newPage to app
      signalPage(newPage);

      //delay so that page's end animation is not cut off be the component being unmounted
      //be careful with this delay: if its bigger than the animation duration+delay some visual glitches might occur
      setTimeout(
        () => {
          setCurrPage(newPage);
        },
        shouldRedrawAll ? 1500 : 1000
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
          .filter((elem) =>
            typeof currPage === "undefined"
              ? elem !== "Home"
              : elem !== currPage
          )
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

  return <nav className="pages-nav-bar">{pagesShown()}</nav>;
}

export default HeaderNav;
