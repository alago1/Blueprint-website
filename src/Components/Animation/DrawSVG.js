import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Effects.css";

function DrawSVG(props, ref) {
  const child = React.Children.only(props.children);
  const [anim, setAnim] = useState();

  //Permits use of these functions from parent component
  useImperativeHandle(ref, () => ({
    playStartAnimation() {
      setAnim("comp");
    },
    playEndAnimation() {
      setAnim("decomp");
    },
  }));

  return <div className={anim}>{child}</div>;
}

export default forwardRef(DrawSVG);
