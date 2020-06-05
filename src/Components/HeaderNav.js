import React, { Fragment, useState, useEffect, useRef } from "react";
import { ReactComponent as HeaderHome } from "../svgs/1. Header/Header_Home.svg";
import { ReactComponent as HeaderAbout } from "../svgs/1. Header/Header_About.svg";
import { ReactComponent as HeaderContact } from "../svgs/1. Header/Header_Contact.svg";
import "./Styles/HeaderNav.css";
import DrawSVG from "./Animation/DrawSVG";

function HeaderNav() {
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
      .forEach((page) => pageRefs[page].current.playStartAnimation());
  }, [pages, pageRefs, currPage]);

  const handleChangePage = (newPage) => {
    if (Object.keys(pages).indexOf(newPage) >= 0) {
      if (pageRefs[newPage].current) {
        Object.keys(pages)
          .filter((elem) => elem !== currPage)
          .forEach((page) => pageRefs[page].current.playEndAnimation());
      }
      console.log("Setting new page to " + newPage);
      setTimeout(() => {
        setCurrPage(newPage);
      }, 2000);
    } else {
      console.log("Could not find page: " + newPage + ". Sent Home instead.");
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
              <DrawSVG name={currPage} key={index} ref={pageRefs[elem]}>
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
