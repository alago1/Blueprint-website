/*

Probably not going to use this.

Current issues:
- Animations can't be overlapped by this method.
- Foward ref seems to be the child here instead of what the child actually is.
- Without animation overlapping rarely is it useful to use this component instead just css animations.

*/

import React, {
  useState,
  fowardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import "./Effects.css";

function FillSVG(props, ref) {
  const child = React.Children.only(props.children);
  const [anim, setAnim] = useState({
    type:
      props.animation && ["fill-in", "fill-out"].indexOf(props.animation) >= 0
        ? props.animation
        : "fill-in",
    duration: props.duration ? props.duration : 2000,
    delay: props.delay ? props.delay : 0,
    easingFunction: props.easingFunction
      ? props.easingFunction
      : "cubic-bezier(1, 0.16, 1, 0.3)",
  });
  const undraw = props.undraw;

  useEffect(() => {
    if (undraw) {
      setAnim({
        type: "fill-out",
        ...undraw,
      });
    }
  }, [undraw]);

  useImperativeHandle(ref, () => ({
    playStartAnimation(
      duration = 2000,
      delay = 2000,
      easingFunction = "cubic-bezier(1, 0.16, 1, 0.3)"
    ) {
      setAnim({
        type: "fill-in",
        duration: duration,
        delay: delay,
        easingFunction: easingFunction,
      });
    },
    playEndAnimation(
      duration = 2000,
      delay = 0,
      easingFunction = "cubic-bezier(0.16, 1, 0.3, 1)"
    ) {
      setAnim({
        type: "fill-out",
        duration: duration,
        delay: delay,
        easingFunction: easingFunction,
      });
    },
  }));

  let animations = [];
}

export default FillSVG;
