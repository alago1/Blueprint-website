import React from "react";
import { TagsList } from "./TagsList";
import TagToggle from "./TagToggle";
import DrawSVG from "../../Animation/DrawSVG";
import module_styles from "./Tags.module.css";

function Tags() {
  return (
    <div className={module_styles["tags-list"]}>
      {Object.keys(TagsList).map((elem) => {
        return (
          <DrawSVG delay="500" duration="1000">
            <TagToggle
              key={elem}
              initialState={true}
              toggleText={TagsList[elem].tag_text}
              imageSrc={TagsList[elem].image}
              tagValue={elem}
              style={{ margin: "10px", animation: "fade-in 1s 1s ease" }}
            />
          </DrawSVG>
        );
      })}
    </div>
  );
}

export default Tags;
