import React, { useState, useEffect } from "react";
import module_styles from "./TagToggle.module.css";

function TagToggle(props) {
  const [isChecked, setIsChecked] = useState(props.initialState === true);
  const toggleText =
    typeof props.toggleText === "string" ? props.toggleText : "";

  //preload image
  useEffect(() => {
    const img = new Image();
    img.src = props.imageSrc;
  }, [props]);

  const handleClick = () => {
    if (typeof props.callback === "function") {
      props.callback(!isChecked);
    }
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <div
      className={`${module_styles.tagtoggle} ${
        isChecked ? module_styles.checked : ""
      }`}
      style={{ ...props.style }}
      onClick={handleClick}
    >
      <img src={props.imageSrc} alt="" className={module_styles.toggleImage} />
      <b>{toggleText}</b>
    </div>
  );
}

export default TagToggle;
