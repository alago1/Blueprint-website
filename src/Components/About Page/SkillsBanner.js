import React from "react";
import SkillsLogos from "./SkillsLogos";
import { ReactComponent as SkillsTitle } from "../../svgs/About Page/Logos/Skills Text.svg";
import "./SkillsBanner.css";

function SkillsBanner(props) {
  return (
    <div className="skills-banner">
      <SkillsTitle className="skills-title" />
      <SkillsLogos />
    </div>
  );
}

export default SkillsBanner;
