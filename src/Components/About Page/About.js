import React, { useState, forwardRef, useImperativeHandle } from "react";
import { ReactComponent as HeaderAbout } from "../../svgs/Header/Header_About.svg";
import PortraitBanner from "./PortraitBanner";
import SkillsBanner from "./SkillsBanner";
import DrawSVG from "../Animation/DrawSVG";
import "./About.css";

function About(props, ref) {
  const [shouldUndraw, setUndraw] = useState();

  useImperativeHandle(ref, () => ({
    undraw(duration = 2000, delay = 0, easingFunction = "ease") {
      setUndraw({
        duration: duration,
        delay: delay,
        outlineOnly: false,
        easingFunction: easingFunction,
      });
    },
  }));

  return (
    <div className="about-page">
      <div className="page-header">
        <DrawSVG delay="500" duration="3000" undraw={shouldUndraw}>
          <HeaderAbout className="page-title" />
        </DrawSVG>
      </div>
      <div className="about-page page-content">
        <PortraitBanner undraw={shouldUndraw} />
        <SkillsBanner undraw={shouldUndraw} />
      </div>
    </div>
  );
}

export default forwardRef(About);
