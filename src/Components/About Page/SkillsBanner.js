import React from "react";
import SkillsLogos from "./SkillsLogos";
import { ReactComponent as SkillsTitle } from "../../svgs/About Page/Logos/Skills Text.svg";
import DrawSVG from "../Animation/DrawSVG";
import "./SkillsBanner.css";

function SkillsBanner(props) {
  return (
    <div className="skills-banner">
      <div className="skills-title">
        <DrawSVG
          delay="1000"
          duration="3000"
          easingFunction="ease-in"
          undraw={props.undraw}
        >
          <SkillsTitle />
        </DrawSVG>
      </div>
      <SkillsLogos undraw={props.undraw} />
    </div>
  );
}

export default SkillsBanner;
