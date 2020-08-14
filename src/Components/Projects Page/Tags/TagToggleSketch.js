import React, { useState, useEffect, useRef, useMemo } from "react";
import TagToggle from "./TagToggle";
import DrawSVG from "../../Animation/DrawSVG";
import module_styles from "./TagToggleSketch.module.css";

function TagToggleSketch(props) {
  const [dimensions, setDimensions] = useState([0, 0]);
  const toggleRef = useRef();

  useEffect(() => {
    if (toggleRef.current) {
      setDimensions([
        toggleRef.current?.offsetWidth,
        toggleRef.current?.offsetHeight,
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleRef.current?.offsetWidth, toggleRef.current?.offsetHeight]);

  const computedSVG = useMemo(() => {
    return (
      <svg
        width={dimensions[0]}
        height={dimensions[1]}
        viewBox={`0 0 ${dimensions[0]} ${dimensions[1]}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          // prettier-ignore
          d={`M${dimensions[1]/2} 0 A${dimensions[1]/2} ${dimensions[1]/2} 0 0 0 ${dimensions[1]/2} ${dimensions[1]} h${dimensions[0] - dimensions[1]} A${dimensions[1]/2} ${dimensions[1]/2} 0 0 0 ${dimensions[0] - dimensions[1] + dimensions[1]/2} 0 h${dimensions[1] - dimensions[0]}`}
          stroke="white"
          pathLength="1"
          fill="transparent"
        />
      </svg>
    );
  }, [dimensions]);

  return (
    <div className={module_styles["tag-toggle-sketch-container"]}>
      <div className={module_styles["tag-toggle-sketch-outline-container"]}>
        <DrawSVG
          duration="1000"
          delay="0"
          easingFunction="ease"
          outlineOnly="true"
          undraw={props.undraw}
        >
          {computedSVG}
        </DrawSVG>
      </div>
      <TagToggle
        initialState={props.initialState}
        toggleText={props.toggleText}
        imageSrc={props.imageSrc}
        tagValue={props.tagValue}
        style={{
          animation:
            typeof props.undraw === "undefined"
              ? "fade-in 0.5s 0.5s ease-out forwards, delay-appear 0.5s 0s ease"
              : "fade-out 0.5s ease forwards",
        }}
        // style={{ opacity: 0 }}
        ref={toggleRef}
      />
    </div>
  );
}

export default TagToggleSketch;
