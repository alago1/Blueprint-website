import React, { useEffect, useRef } from "react";
import { ReactComponent as HeaderHome } from "../../svgs/Header/Header_Home.svg";
import { ReactComponent as HeaderAbout } from "../../svgs/Header/Header_About.svg";
import { ReactComponent as HeaderContact } from "../../svgs/Header/Header_Contact.svg";
import { ReactComponent as HeaderProjects } from "../../svgs/Header/Header_Projects.svg";
import DrawSVG from "../Animation/DrawSVG";
import "./HeaderNav.css";
import { useState } from "react";

function HeaderNav(props) {
  const signalPage = props.signal;
  const [currPage, setCurrPage] = useState();
  const isCurrent = useRef(true);

  const pageRefs = {
    Home: useRef(null),
    About: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };

  const pages = {
    Home: (
      <HeaderHome
        onClick={() => handleChangePage("Home")}
        className="header-style highlight clickable home"
      />
    ),
    About: (
      <HeaderAbout
        onClick={() => handleChangePage("About")}
        className="header-style highlight clickable about"
      />
    ),
    Projects: (
      <HeaderProjects
        onClick={() => handleChangePage("Projects")}
        className="header-style highlight clickable projects"
      />
    ),
    Contact: (
      <HeaderContact
        onClick={() => handleChangePage("Contact")}
        className="header-style highlight clickable contact"
      />
    ),
  };

  //first draw
  useEffect(() => {
    if (typeof currPage === "undefined") {
      Object.keys(pages)
        .filter((page) => page !== "Home")
        .forEach((page) =>
          // first draw takes a bigger duration and delay
          pageRefs[page].current.playStartAnimation(
            1000,
            2000,
            "cubic-bezier(1, 0.16, 1, 0.3)",
            false,
            true
          )
        );
    }
  }, [pageRefs, pages, currPage]);

  //subsequent draws
  useEffect(() => {
    if (typeof currPage !== "undefined") {
      Object.keys(pages)
        .filter((page) => page !== currPage)
        .forEach((page) =>
          pageRefs[page].current.playStartAnimation(
            1000,
            300,
            "cubic-bezier(1, 0.16, 1, 0.3)",
            false,
            true
          )
        );
    }
  }, [pageRefs, pages, currPage]);

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, [isCurrent]);

  const handleChangePage = (newPage) => {
    // To circumvent checking if position would change based on width, newPage, etc.
    let firstTwoPages = Object.keys(pages).slice(0, 2);
    let hasMultipleRedraws = !(
      newPage in firstTwoPages && currPage in firstTwoPages
    );
    let redrawIndex = Math.max(
      Object.keys(pages).indexOf(newPage),
      Object.keys(pages).indexOf(currPage),
      0
    );

    if (newPage in pages) {
      if (pageRefs[newPage].current) {
        pageRefs[newPage].current.playEndAnimation(1000, 0);
        Object.keys(pages)
          .filter(
            (elem, index) =>
              (typeof currPage === "undefined"
                ? elem !== "Home"
                : elem !== currPage) &&
              elem !== newPage &&
              index < redrawIndex
          )
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
          if (isCurrent.current) {
            setCurrPage(newPage);
          }
        },
        hasMultipleRedraws ? 1500 : 1000
      );
    } else {
      console.log("Could not find page: " + newPage + ". Sent Home instead.");
      signalPage("Home");
      setCurrPage("Home");
    }
  };

  return (
    <nav className="pages-nav-bar">
      {Object.keys(pages)
        .filter((elem) =>
          typeof currPage === "undefined" ? elem !== "Home" : elem !== currPage
        )
        .map((elem, index) => {
          return (
            <DrawSVG
              key={`${elem}-${index}`}
              ref={pageRefs[elem]}
              easingFunction="cubic-bezier(1, 0.16, 1, 0.3)"
            >
              {pages[elem]}
            </DrawSVG>
          );
        })}
    </nav>
  );
}

export default HeaderNav;
