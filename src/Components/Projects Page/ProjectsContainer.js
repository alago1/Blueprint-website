import React from "react";
import { useRecoilValue } from "recoil";
import { projects_selectedTags } from "./atoms";
import ProjectBox from "./ProjectBox/ProjectBox";
import { ProjectsList } from "./ProjectsList";

function ProjectsContainer() {
  const selectedTags = useRecoilValue(projects_selectedTags);

  //change it later to apply filters
  const displayedProjects = ProjectsList.filter((elem) =>
    elem.tags.reduce((acc, curr) => {
      return acc || selectedTags.has(curr);
    }, false)
  );

  return (
    <div className="project-boxes-container">
      {displayedProjects.length !== 0 &&
        [...Array(Math.floor((displayedProjects.length + 1) / 2)).keys()].map(
          (row_index) => {
            return (
              <div
                className="project-box-row"
                key={`displayed-project-row-${row_index}`}
              >
                {[0, 1].map((col_index) => {
                  return (
                    2 * row_index + col_index < displayedProjects.length && (
                      <ProjectBox
                        content={displayedProjects[2 * row_index + col_index]}
                        key={col_index}
                        style={{
                          width: "500px",
                          height: "250px",
                          margin: "50px",
                        }}
                      />
                    )
                  );
                })}
              </div>
            );
          }
        )}
    </div>
  );
}

export default ProjectsContainer;
