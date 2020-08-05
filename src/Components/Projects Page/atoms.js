import { atom } from "recoil";
import { TagsList } from "./Tags/TagsList";

export const projects_selectedTags = atom({
  key: "selected-tags",
  default: new Set(Object.keys(TagsList)),
});
