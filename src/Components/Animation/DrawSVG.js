import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Effects.css";

function DrawSVG(props, ref) {
  const child = React.Children.only(props.children);
  const [anim, setAnim] = useState([
    "comp", //function
    props.duration ? props.duration : 2000, //animation duration
    props.delay ? props.delay : 0, //animation delay
    props.outlineOnly ? props.outlineOnly.toLowerCase() === "true" : false, //if only the outline should be drawn
    props.easingFunction
      ? props.easingFunction
      : "cubic-bezier(1, 0.16, 1, 0.3)",
  ]);

  //Permits use of these functions from parent component
  useImperativeHandle(ref, () => ({
    playStartAnimation(
      duration = 2000,
      delay = 2000,
      outlineOnly = false,
      easingFunction = "cubic-bezier(1, 0.16, 1, 0.3)"
    ) {
      setAnim(["comp", duration, delay, outlineOnly, easingFunction]);
    },
    playEndAnimation(
      duration = 2000,
      delay = 0,
      outlineOnly = false,
      easingFunction = "cubic-bezier(0.16, 1, 0.3, 1)"
    ) {
      setAnim(["decomp", duration, delay, outlineOnly, easingFunction]);
    },
  }));

  const animations = `${anim[0]}-outline-svg ${anim[1]}ms ${anim[4]} ${
    anim[2]
  }ms forwards${
    !anim[3] // if not outline-only
      ? `, ${anim[0]}-fill-svg ${anim[1]}ms ease
        ${anim[2]}ms forwards`
      : ""
  }`;

  return (
    <span
      className={anim[0]}
      style={{
        animation: animations,
      }}
    >
      {child}
    </span>
  );
}

export default forwardRef(DrawSVG);
