import React, { useState, forwardRef, useImperativeHandle } from "react";
import { ReactComponent as HeaderAbout } from "../../svgs/Header/Header_About.svg";
import PortraitBanner from "./PortraitBanner";
import SkillsBanner from "./SkillsBanner";
import DrawSVG from "../Animation/DrawSVG";
import "./About.css";

function About(props, ref) {
  const [shouldUndraw, setUndraw] = useState();

  useImperativeHandle(ref, () => ({
    undraw(duration = 1000, delay = 300, easingFunction = "ease") {
      setUndraw({
        duration: duration,
        delay: delay,
        easingFunction: easingFunction,
      });
      return new Promise((resolve) => setTimeout(resolve, duration + delay));
    },
  }));

  return (
    <div className="about-page">
      <div className="page-header">
        <DrawSVG
          delay={500}
          duration={2000}
          easingFunction="cubic-bezier(1, 0.16, 1, 0.3)"
          undraw={shouldUndraw}
          startTransparent
        >
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
