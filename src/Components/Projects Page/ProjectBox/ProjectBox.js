import React from "react";
import BoxBookmark from "./BoxBookmark";
import ProjectBoxSketch from "./ProjectBoxSketch";
import module_styles from "./ProjectBox.module.css";

function ProjectBox(props) {
  return (
    <div className={module_styles["project-box"]} style={{ ...props.style }}>
      <BoxBookmark tags={props.content.tags} undraw={props.undraw} />
      <ProjectBoxSketch content={props.content} undraw={props.undraw} />
    </div>
  );
}

export default ProjectBox;
