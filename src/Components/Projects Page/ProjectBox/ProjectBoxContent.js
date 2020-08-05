import React from "react";
import ReactLogo from "../../../svgs/Projects Page/React Logo.svg";
import module_styles from "./ProjectBox.module.css";

function ProjectBoxContent(props) {
  return (
    <div className={module_styles["project-box-content-container"]}>
      <div className={module_styles["project-image-container"]}>
        <img
          src={props.content.image}
          alt=""
          className={module_styles["project-image"]}
        />
      </div>
      <div className={module_styles["project-description-container"]}>
        <h3>{props.content.title}</h3>
        <h5 className={module_styles["project-description"]}>
          {props.content.description}
        </h5>
        <div className={module_styles["project-links"]}>
          <a
            href={props.content.links.github_repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ReactLogo}
              alt=""
              title="GitHub Repository"
              className={module_styles["project-link-image"]}
            />
          </a>
          {typeof props.content.links.other !== "undefined" && (
            <a
              href={props.content.links.other}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ReactLogo}
                alt=""
                title="Website"
                className={module_styles["project-link-image"]}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectBoxContent;
