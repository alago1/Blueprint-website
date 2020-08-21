import React, { useContext } from "react";
import { StoreContext } from "../../../Store";
import { TagsList } from "./TagsList";
import TagToggleSketch from "./TagToggleSketch";
import module_styles from "./Tags.module.css";

function Tags(props) {
  const store = useContext(StoreContext);

  return (
    <div className={module_styles["tags-list"]}>
      {Object.keys(TagsList).map((elem) => {
        return (
          <TagToggleSketch
            key={elem}
            toggleText={TagsList[elem].tag_text}
            imageSrc={TagsList[elem].image}
            undraw={props.undraw}
            initialState={store.selectedTags.has(elem)}
            callback={() => store.updateTagState(elem)}
          />
        );
      })}
    </div>
  );
}

export default Tags;
