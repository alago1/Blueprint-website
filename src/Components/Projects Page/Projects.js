import React, { useState, forwardRef, useImperativeHandle } from "react";
import { ReactComponent as HeaderProjects } from "../../svgs/Header/Header_Projects.svg";
import Tags from "./Tags/Tags";
import ProjectsContainer from "./ProjectsContainer";
import DrawSVG from "../Animation/DrawSVG";
import "./Projects.css";

function Projects(props, ref) {
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
    <div className="projects-page">
      <div className="page-header">
        <DrawSVG
          delay={500}
          duration={2000}
          easingFunction="cubic-bezier(1, 0.16, 1, 0.3)"
          undraw={shouldUndraw}
          startTransparent
        >
          <HeaderProjects className="page-title" />
        </DrawSVG>
      </div>
      <div className="projects-page page-content">
        <Tags undraw={shouldUndraw} />
        <ProjectsContainer undraw={shouldUndraw} />
      </div>
    </div>
  );
}

export default forwardRef(Projects);
