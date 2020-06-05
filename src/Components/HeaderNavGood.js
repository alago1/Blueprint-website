import React, { Fragment, useState, useEffect, useRef } from "react";
import { ReactComponent as HeaderHome } from "../svgs/1. Header/Header_Home.svg";
import { ReactComponent as HeaderAbout } from "../svgs/1. Header/Header_About.svg";
import { ReactComponent as HeaderContact } from "../svgs/1. Header/Header_Contact.svg";
import { CSSTransitionGroup } from "react-transition-group";
import "./Styles/HeaderNav.css";
import "./Animation/Effects.css";
import DrawSVG from "./Animation/DrawSVG";

function HeaderNav() {
  const [currPage, setCurrPage] = useState("Home");
  const pageRefs = {
    Home: useRef(null),
    About: useRef(null),
    Contact: useRef(null),
  };
  const prevPage = useRef("Home");

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

  //   useEffect(() => {
  //     pageRefs["About"].current.unmountAnimation();
  //   }, [currPage, pageRefs]);

  const handleChangePage = (newPage) => {
    if (Object.keys(pages).indexOf(newPage) >= 0) {
      //   if (pageRefs[newPage].current) {
      //     Object.keys(pages)
      //       .filter((page) => page !== currPage)
      //       .forEach((pageName) => {
      //         pageRefs["About"].current.unmountAnimation();
      //         // pageRefs[pageName].current.unmountAnimation();
      //         // void pageRefs[pageName].current.offsetWidth;
      //       });
      //   }
      console.log("Setting new page to " + newPage);
      prevPage.current = currPage;
      setCurrPage(newPage);
    } else {
      console.log("Could not find page: " + newPage + ". Sent Home instead.");
      prevPage.current = currPage;
      setCurrPage("Home");
    }
  };

  const pagesShown = Object.keys(pages)
    .filter((elem) => elem !== currPage)
    .map((elem) => pages[elem]);

  return (
    <nav>
      <CSSTransitionGroup
        transitionName="svgcomp"
        transitionAppear={true}
        transitionAppearTimeout={4000}
        transitionEnter={true}
        transitionEnterTimeout={4000}
        transitionLeave={true}
        transitionLeaveTimeout={4000}
      >
        {pagesShown}
      </CSSTransitionGroup>
    </nav>
  );
}

export default HeaderNav;
