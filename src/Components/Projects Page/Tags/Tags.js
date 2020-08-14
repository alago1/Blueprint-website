import React from "react";
import { TagsList } from "./TagsList";
import TagToggleSketch from "./TagToggleSketch";
import module_styles from "./Tags.module.css";

function Tags(props) {
  return (
    <div className={module_styles["tags-list"]}>
      {Object.keys(TagsList).map((elem) => {
        return (
          <TagToggleSketch
            key={elem}
            initialState={true}
            toggleText={TagsList[elem].tag_text}
            imageSrc={TagsList[elem].image}
            tagValue={elem}
            undraw={props.undraw}
            // style={{ margin: "10px", animation: "fade-in 1s 1s ease" }}
          />
        );
      })}
    </div>
  );
}

export default Tags;
