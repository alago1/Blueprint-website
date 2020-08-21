import React, { useState, forwardRef } from "react";
import module_styles from "./TagToggle.module.css";

function TagToggle(props, ref) {
  const [isChecked, setIsChecked] = useState(props.initialState === true);
  const toggleText =
    typeof props.toggleText === "string" ? props.toggleText : "";

  const handleClick = () => {
    if (typeof props.callback === "function") {
      props.callback(!isChecked);
    }
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`${module_styles.tagtoggle} ${
        isChecked ? module_styles.checked : ""
      }`}
      style={{ ...props.style }}
      onClick={handleClick}
      ref={ref}
    >
      <img src={props.imageSrc} alt="" className={module_styles.toggleImage} />
      <b>{toggleText}</b>
    </div>
  );
}

export default forwardRef(TagToggle);
