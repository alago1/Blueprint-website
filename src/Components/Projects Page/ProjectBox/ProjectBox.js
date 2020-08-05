import React from "react";
import BoxBookmark from "./BoxBookmark";
import ProjectBoxContent from "./ProjectBoxContent";
import module_styles from "./ProjectBox.module.css";

function ProjectBox(props) {
  return (
    <div className={module_styles["project-box"]} style={{ ...props.style }}>
      <BoxBookmark tags={props.content.tags} />
      <ProjectBoxContent content={props.content} />
    </div>
  );
}

export default ProjectBox;
