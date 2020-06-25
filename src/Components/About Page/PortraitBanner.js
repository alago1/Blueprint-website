import React, { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { about_SelectedPortrait } from "./atoms";
import PortraitPhoto from "../../imgs/PortraitPhoto.png";
import { logosHandle } from "./logosHandle";

import DrawSVG from "../Animation/DrawSVG.js";
import "./PortraitBanner.css";

function PortraitBanner(props) {
  const selectedPortrait = useRecoilValue(about_SelectedPortrait);
  const [displayedPortrait, setDisplayedPortrait] = useState(selectedPortrait);
  const portraitRef = useRef();

  useEffect(() => {
    if (selectedPortrait !== displayedPortrait) {
      //occurs when a new portrait has just been selected
      //
      //fade-out the displayedPortrait's description
      let elem = document.getElementsByClassName("portrait-description")[0];
      elem.classList.add("exit-animation");
      elem.classList.remove("enter-animation");
      void elem.offsetWidth;

      //undraw the displayedPortrait
      portraitRef.current
        .playEndAnimation(1000, 0, true, "ease")
        .then(() => setDisplayedPortrait(selectedPortrait))
        .then(() => elem.classList.remove("exit-animation"));
    } else {
      //occurs when a new displayedPortrait has just been set (aka finished undrawing the previous one)
      new Promise(() => {
        //fade-in the new portrait and description
        //
        // temporary solution: since the filled portrait is the second thing in the page, it will always be the second element caught here
        let portrait_elem = document.getElementsByClassName(
          "enter-animation"
        )[0];
        let descript_elem = document.getElementsByClassName(
          "portrait-description"
        )[0];
        //restarts the appear animation
        restartAnimation(portrait_elem, "enter-animation");
        restartAnimation(descript_elem, "enter-animation");
      }).then(portraitRef.current.playStartAnimation(3000, 0, true, "ease"));
    }
  }, [selectedPortrait, displayedPortrait]);

  useEffect(() => {
    //occurs when undraw is called
    if (typeof props.undraw !== "undefined") {
      //make sure that description fades-out
      let elem = document.getElementsByClassName("portrait-description")[0];
      elem.classList.add("exit-animation");
      elem.classList.remove("enter-animation");
      void elem.offsetWidth;
    }
  }, [props.undraw]);

  const restartAnimation = (elem, animClassName) => {
    elem.classList.remove(animClassName);
    // forces the browser to make all necessary calculations before evaluating the animations
    void elem.offsetWidth;
    elem.classList.add(animClassName);
  };

  const getPortrait = (name) => {
    if (name in logosHandle) {
      return logosHandle[name];
    }
    // if name is not a key in the logosHandle, SelfPortrait is showed instead
    console.log("Unrecognizable portrait name. " + name);
    return logosHandle.SelfPortrait;
  };

  return (
    <div className="portrait-banner">
      <div className="portrait-container">
        <DrawSVG undraw={props.undraw} ref={portraitRef}>
          {getPortrait(displayedPortrait).portrait}
        </DrawSVG>
        <div
          className="portrait enter-animation"
          style={{
            visibility:
              typeof props.undraw === "undefined" &&
              selectedPortrait === displayedPortrait
                ? "visible"
                : "hidden",
          }}
        >
          {selectedPortrait === "SelfPortrait" ? (
            <img src={PortraitPhoto} alt="" className="selected-portrait" />
          ) : (
            getPortrait(displayedPortrait).portrait
          )}
        </div>
      </div>
      <div className="portrait-description enter-animation">
        {/* placeholder for svg, text, or box*/}
        <div className="description-box">
          <span className="title-wrapper">
            <h1 className="title">{getPortrait(displayedPortrait).title}</h1>
          </span>
          <h3 className="description">
            {getPortrait(displayedPortrait).description}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default PortraitBanner;
