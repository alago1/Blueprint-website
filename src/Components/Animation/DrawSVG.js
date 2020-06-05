import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import "./Effects.css";

function DrawSVG(props, ref) {
  const child = React.Children.only(props.children);
  const [shouldRender, setRender] = useState(props.name !== child["key"]);

  //Permits use of "forceUnmount" from functional component from parent
  useImperativeHandle(ref, () => ({
    playStartAnimation() {
      setRender(true);
    },
    playEndAnimation() {
      onAnimationEnd();
    },
  }));

  useEffect(() => {
    if (props.name !== child["key"]) {
      setRender(true);
    }
  }, [props.name, child]);

  const onAnimationEnd = () => {
    if (props.name === child["key"]) {
      setRender(false);
    }
  };
  return (
    <div
      className={props.name !== child["key"] ? "comp" : "decomp"}
      style={{ display: shouldRender ? "visible" : "none" }}
      onAnimationEnd={onAnimationEnd}
    >
      {child}
    </div>
  );
}

export default forwardRef(DrawSVG);
