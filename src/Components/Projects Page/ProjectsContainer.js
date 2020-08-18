import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { projects_selectedTags } from "./atoms";
import ProjectBox from "./ProjectBox/ProjectBox";
import { ProjectsList } from "./ProjectsList";

function ProjectsContainer(props) {
  const selectedTags = useRecoilValue(projects_selectedTags);
  const elems_per_row = 2;

  //change it later to apply filters
  const displayedProjects = useMemo(
    () =>
      ProjectsList.filter((elem) =>
        elem.tags.reduce((acc, curr) => {
          return acc || selectedTags.has(curr);
        }, false)
      ),
    [selectedTags]
  );

  return (
    <div className="project-boxes-container">
      {displayedProjects.length !== 0 &&
        [
          ...Array(
            Math.floor((displayedProjects.length + 1) / elems_per_row)
          ).keys(),
        ].map((row_index) => {
          return (
            <div
              className="project-box-row"
              key={`displayed-project-row-${row_index}`}
            >
              {[...Array(elems_per_row).keys()].map((col_index) => {
                let index = elems_per_row * row_index + col_index;

                return (
                  index < displayedProjects.length && (
                    <ProjectBox
                      undraw={props.undraw}
                      content={displayedProjects[index]}
                      key={displayedProjects[index].title}
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
        })}
    </div>
  );
}

export default ProjectsContainer;
