import React from "react";
import { useRecoilValue } from "recoil";
import { projects_selectedTags } from "../atoms";
import { TagsList } from "../Tags/TagsList";
import module_styles from "./BoxBookmark.module.css";

function BoxBookmark(props) {
  const selectedTags = useRecoilValue(projects_selectedTags);

  return (
    <div
      className={module_styles["project-techs-container"]}
      style={{
        animation:
          typeof props.undraw === "undefined"
            ? `${module_styles["bookmark-slide"]} 0.5s ease-out 1s forwards`
            : `${module_styles["bookmark-disappear"]} 0.5s ease-out forwards`,
      }}
    >
      {props.tags.map((elem) => {
        return (
          <img
            key={`project-tech-icon-${elem}`}
            src={TagsList[elem].image}
            alt=""
            title={TagsList[elem].tag_text}
            className={`${module_styles["project-tech-icon"]} ${
              !selectedTags.has(elem) ? module_styles["grayscaled-icon"] : ""
            }`}
          />
        );
      })}
    </div>
  );
}

export default BoxBookmark;
