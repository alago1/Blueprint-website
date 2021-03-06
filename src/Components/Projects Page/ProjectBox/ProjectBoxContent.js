import React, { forwardRef } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import module_styles from "./ProjectBox.module.css";

function ProjectBoxContent(props, ref) {
  return (
    <div
      className={module_styles["project-box-content-container"]}
      style={{
        ...props.style,
      }}
      ref={ref}
    >
      <div className={module_styles["project-image-container"]}>
        <img
          src={props.content.image}
          alt=""
          className={module_styles["project-image"]}
        />
        <div className={module_styles["project-links"]}>
          <a
            href={props.content.links.github_repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub
              title="GitHub Repository"
              className={module_styles["project-link-image"]}
              fill="black"
            />
          </a>
          {typeof props.content.links.other !== "undefined" && (
            <a
              href={props.content.links.other}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink
                title="Website"
                className={module_styles["project-link-image"]}
                stroke="black"
              />
            </a>
          )}
        </div>
      </div>
      <div className={module_styles["project-description-container"]}>
        <h3 className={module_styles["project-title"]}>
          {props.content.title}
        </h3>
        <h5 className={module_styles["project-description"]}>
          {props.content.description}
        </h5>
      </div>
    </div>
  );
}

export default forwardRef(ProjectBoxContent);
