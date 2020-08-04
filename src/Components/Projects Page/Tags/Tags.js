import React from "react";
import { TagsList } from "./TagsList";
import TagToggle from "./TagToggle";
import module_styles from "./Tags.module.css";

function Tags() {
  return (
    <div className={module_styles["tags-list"]}>
      {Object.keys(TagsList).map((elem) => {
        return (
          <TagToggle
            key={elem}
            initialState={true}
            toggleText={TagsList[elem].tag_text}
            imageSrc={TagsList[elem].image}
            style={{ margin: "10px" }}
          />
        );
      })}
    </div>
  );
}

export default Tags;
