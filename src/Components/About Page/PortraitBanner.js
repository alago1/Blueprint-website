import React, { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { about_SelectedPortrait } from "./atoms";
import PortraitPhoto from "../../imgs/PortraitPhoto.png";
import { LogosList } from "./LogosList";

import DrawSVG from "../Animation/DrawSVG.js";
import "./PortraitBanner.css";

function PortraitBanner(props) {
  const selectedPortrait = useRecoilValue(about_SelectedPortrait);
  const [displayedPortrait, setDisplayedPortrait] = useState(selectedPortrait);
  const portraitRef = useRef();

  useEffect(() => {
    if (displayedPortrait !== selectedPortrait) {
      portraitRef.current
        .playEndAnimation(1000, 0, "ease", true)
        .then(() => setDisplayedPortrait(selectedPortrait));
    } else {
      portraitRef.current.playStartAnimation(3000, 0, "ease", true);
    }
  }, [displayedPortrait, selectedPortrait]);

  const getPortrait = (name) => {
    if (name in LogosList) {
      return LogosList[name];
    }
    // if name is not a key in the LogosList, SelfPortrait is showed instead
    console.log("Unrecognizable portrait name. " + name);
    return LogosList.SelfPortrait;
  };

  return (
    <div className="portrait-banner">
      <div className="portrait-container">
        <DrawSVG
          undraw={props.undraw}
          ref={portraitRef}
          className="transparent"
        >
          {getPortrait(displayedPortrait).portrait}
        </DrawSVG>
        <div
          className="portrait"
          style={{
            animation:
              typeof props.undraw === "undefined" &&
              selectedPortrait === displayedPortrait
                ? "fade-in 1s ease 2s forwards, delay-appear 2s ease"
                : "fade-out 0.5s ease forwards",
          }}
        >
          {selectedPortrait === "SelfPortrait" ? (
            <img
              src={PortraitPhoto}
              alt=""
              className="selected-portrait"
              style={{ animation: "delay-appear 2s ease" }}
            />
          ) : (
            getPortrait(displayedPortrait).portrait
          )}
        </div>
      </div>
      <div
        className="portrait-description"
        style={{
          animation:
            typeof props.undraw === "undefined" &&
            selectedPortrait === displayedPortrait
              ? "fade-in 0.5s ease forwards"
              : "fade-out 0.5s ease forwards",
        }}
      >
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
