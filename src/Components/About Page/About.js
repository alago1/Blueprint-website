import React, { useState, forwardRef, useImperativeHandle } from "react";
import { ReactComponent as HeaderAbout } from "../../svgs/Header/Header_About.svg";
import PortraitBanner from "./PortraitBanner";
import SkillsBanner from "./SkillsBanner";
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
        <HeaderAbout className="page-title" />
      </div>
      <div className="page-content">
        <PortraitBanner undraw={shouldUndraw} />
        <SkillsBanner />
      </div>
    </div>
  );
}

export default forwardRef(About);
