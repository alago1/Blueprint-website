import React from "react";
import { useLocalStore } from "mobx-react";
import "mobx-react-lite/batchingForReactDom";
import { TagsList } from "./Components/Projects Page/Tags/TagsList";
import { ProjectsList } from "./Components/Projects Page/ProjectsList";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    selectedPortrait: "SelfPortrait",

    selectedTags: new Set(Object.keys(TagsList)),
    updateTagState: (tag) =>
      store.selectedTags.has(tag)
        ? store.selectedTags.delete(tag)
        : store.selectedTags.add(tag),

    get displayedProjects() {
      return ProjectsList.filter((elem) =>
        elem.tags.reduce(
          (acc, curr) => acc || store.selectedTags.has(curr),
          false
        )
      );
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
