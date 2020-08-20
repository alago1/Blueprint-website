import React, { useMemo } from "react";
import { useDimensions } from "../hooks";
import ProjectBoxContent from "./ProjectBoxContent";
import DrawSVG from "../../Animation/DrawSVG";
import module_styles from "./ProjectBoxSketch.module.css";

function ProjectBoxSketch(props) {
  const [dimensions, projectBoxRef] = useDimensions([500, 250]);

  const computedSVG = useMemo(() => {
    return (
      <svg
        width={dimensions[0]}
        height={dimensions[1]}
        viewBox={`0 0 ${dimensions[0]} ${dimensions[1]}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer-box */}
        <path
          // prettier-ignore
          d={`M0 0 h${dimensions[0]} v${dimensions[1]} h${-dimensions[0]} v${-dimensions[1]}`}
          stroke="white"
          strokeWidth="2"
          pathLength="1"
          fill="transparent"
        />

        {/* Image Box */}
        <path
          // prettier-ignore
          d={`M15 15 h${dimensions[0]/2 -30} v${dimensions[1]-30} h${-dimensions[0]/2 +30} v${-dimensions[1]+30}`}
          stroke="white"
          pathLength="1"
          fill="transparent"
        />

        {/* Title Box */}
        <path
          // prettier-ignore
          d={`M${dimensions[0]/2} 15 h${dimensions[0]/2 -10} v50 h${-dimensions[0]/2 +10} v-50`}
          stroke="white"
          pathLength="1"
          fill="transparent"
        />

        {/* Description Box */}
        <path
          // prettier-ignore
          d={`M${dimensions[0]/2} 80 h${dimensions[0]/2 -10} v${dimensions[1]-95} h${-dimensions[0]/2 +10} v${95-dimensions[1]}`}
          stroke="white"
          pathLength="1"
          fill="transparent"
        />
      </svg>
    );
  }, [dimensions]);

  return (
    <div className={module_styles["project-box-sketch-container"]}>
      <div className={module_styles["project-box-sketch-outline-container"]}>
        <DrawSVG
          duration={800}
          delay={500}
          undraw={props.undraw}
          disableFilling
        >
          {computedSVG}
        </DrawSVG>
      </div>
      <ProjectBoxContent
        content={props.content}
        style={{
          animation:
            typeof props.undraw === "undefined"
              ? "fade-in 0.5s ease 1s forwards, delay-appear 1s"
              : "fade-out 1s ease forwards",
        }}
        ref={projectBoxRef}
      />
    </div>
  );
}

export default React.memo(ProjectBoxSketch);
