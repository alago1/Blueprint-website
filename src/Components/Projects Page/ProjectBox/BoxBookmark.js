import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../../../Store";
import { TagsList } from "../Tags/TagsList";
import module_styles from "./BoxBookmark.module.css";

function BoxBookmark(props) {
  const store = useContext(StoreContext);

  return useObserver(() => (
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
              !store.selectedTags.has(elem)
                ? module_styles["grayscaled-icon"]
                : ""
            }`}
          />
        );
      })}
    </div>
  ));
}

export default BoxBookmark;
