import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Effects.css";

function DrawSVG(props, ref) {
  const child = React.Children.only(props.children);
  const [anim, setAnim] = useState([
    "comp",
    props.duration ? props.duration : 2000,
    props.delay ? props.delay : 0,
  ]);

  //Permits use of these functions from parent component
  useImperativeHandle(ref, () => ({
    playStartAnimation(duration = 2000, delay = 2000) {
      setAnim(["comp", duration, delay]);
    },
    playEndAnimation(duration = 2000, delay = 0) {
      setAnim(["decomp", duration, delay]);
    },
  }));

  return (
    <div
      className={anim[0]}
      style={{
        animation: `${anim[0]}-svg ${anim[1]}ms ease-in-out ${anim[2]}ms forwards`,
      }}
    >
      {child}
    </div>
  );
}

export default forwardRef(DrawSVG);
