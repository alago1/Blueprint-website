import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  Fragment,
} from "react";

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
    <Fragment>
      <div style={{ width: "100%", height: "100%", background: "red" }}></div>
    </Fragment>
  );
}

export default forwardRef(About);
