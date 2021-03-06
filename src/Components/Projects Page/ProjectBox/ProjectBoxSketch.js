import React, { useMemo, Suspense } from "react";
import { useDimensions } from "../hooks";
import DrawSVG from "../../Animation/DrawSVG";
import module_styles from "./ProjectBoxSketch.module.css";

const ProjectBoxContent = React.lazy(() => import("./ProjectBoxContent"));

function ProjectBoxSketch(props) {
  const [dimensions, projectBoxRef] = useDimensions([0, 0]);

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
          d={`M15 15 h${dimensions[0]*3/10 -30} v${dimensions[1]-30} h${-dimensions[0]*3/10 +30} v${-dimensions[1]+30}`}
          stroke="white"
          pathLength="1"
          fill="transparent"
        />

        {/* Title Box */}
        <path
          // prettier-ignore
          d={`M${dimensions[0]*3/10} 15 h${dimensions[0]*7/10 -10} v40 h${-dimensions[0]*7/10 +10} v-40`}
          stroke="white"
          pathLength="1"
          fill="transparent"
        />

        {/* Description Box */}
        <path
          // prettier-ignore
          d={`M${dimensions[0]*3/10} 70 h${dimensions[0]*7/10 -10} v${dimensions[1]-85} h${-dimensions[0]*7/10 +10} v${85-dimensions[1]}`}
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
      <Suspense fallback={<></>}>
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
      </Suspense>
    </div>
  );
}

export default React.memo(ProjectBoxSketch);
