import React, { useState, useEffect, forwardRef } from "react";
import { useSetRecoilState } from "recoil";
import { projects_selectedTags } from "../atoms";
import module_styles from "./TagToggle.module.css";

function TagToggle(props, ref) {
  const [isChecked, setIsChecked] = useState(props.initialState === true);
  const toggleText =
    typeof props.toggleText === "string" ? props.toggleText : "";
  const tagValue = typeof props.tagValue === "string" ? props.tagValue : "";

  const setSelectedTags = useSetRecoilState(projects_selectedTags);

  //preload image
  useEffect(() => {
    const img = new Image();
    img.src = props.imageSrc;
  }, [props]);

  useEffect(() => {
    setSelectedTags((tags) => {
      const newTags = new Set(tags);
      isChecked ? newTags.add(tagValue) : newTags.delete(tagValue);
      return newTags;
    });
  }, [isChecked, setSelectedTags, tagValue]);

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
