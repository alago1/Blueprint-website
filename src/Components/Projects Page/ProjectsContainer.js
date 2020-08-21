import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../../Store";
import { useMediaQuery } from "react-responsive";
import ProjectBox from "./ProjectBox/ProjectBox";

function ProjectsContainer(props) {
  const store = useContext(StoreContext);
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });
  const elems_per_row = isTabletOrMobile ? 1 : 2;

  return useObserver(() => (
    <div className="project-boxes-container">
      {store.displayedProjects.length !== 0 &&
        [
          ...Array(
            Math.floor((store.displayedProjects.length + 1) / elems_per_row)
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
                  index < store.displayedProjects.length && (
                    <ProjectBox
                      undraw={props.undraw}
                      content={store.displayedProjects[index]}
                      key={store.displayedProjects[index].title}
                      style={{
                        width: isTabletOrMobile
                          ? "calc(100% - 100px)"
                          : "500px",
                        height: "250px",
                        margin: isTabletOrMobile ? "10px 50px" : "50px",
                      }}
                    />
                  )
                );
              })}
            </div>
          );
        })}
    </div>
  ));
}

export default ProjectsContainer;
