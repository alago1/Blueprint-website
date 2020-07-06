import React from "react";
import { useRecoilState } from "recoil";
import { about_SelectedPortrait } from "./atoms";
import { ReactComponent as SelfPortrait } from "../../svgs/About Page/Self_Portrait.svg";
//this needs to be replaced with links later but for testing/now we'll go with this
import { ReactComponent as JsHtmlCss } from "../../svgs/About Page/Logos/Js + Html + Css Logo.svg";
import { ReactComponent as ReactLogo } from "../../svgs/About Page/Logos/React Logo.svg";
import { ReactComponent as GitLinuxLogo } from "../../svgs/About Page/Logos/Linux + Git Logo.svg";
import { ReactComponent as PythonLogo } from "../../svgs/About Page/Logos/Python Logo.svg";
import DrawSVG from "../Animation/DrawSVG";
import "./SkillsLogos.css";

function SkillsLogos(props) {
  const [selectedLogo, setSelectedLogo] = useRecoilState(
    about_SelectedPortrait
  );

  const handleChangeLogo = (newLogo) => {
    if (newLogo !== selectedLogo) {
      setSelectedLogo(newLogo);
    }
  };

  // Easy way to modify order without copy pasting inside logosHandle
  const order = ["JsHtmlCss", "React", "SelfPortrait", "GitLinux", "Python"];

  const logoClassName = (logoName) =>
    selectedLogo === logoName ? "logo selected" : "logo";

  const skillsLogosHandle = {
    JsHtmlCss: (
      <JsHtmlCss
        className={logoClassName("JsHtmlCss")}
        onClick={() => handleChangeLogo("JsHtmlCss")}
      />
    ),
    React: (
      <ReactLogo
        className={logoClassName("React")}
        onClick={() => handleChangeLogo("React")}
      />
    ),
    GitLinux: (
      <GitLinuxLogo
        className={logoClassName("GitLinux")}
        onClick={() => {
          handleChangeLogo("GitLinux");
        }}
      />
    ),
    Python: (
      <PythonLogo
        className={logoClassName("Python")}
        onClick={() => handleChangeLogo("Python")}
      />
    ),
    SelfPortrait: (
      <SelfPortrait
        className={logoClassName("SelfPortrait")}
        onClick={() => handleChangeLogo("SelfPortrait")}
      />
    ),
  };

  return (
    <div className="skills-logos">
      {order.map((elem, index) => {
        return (
          <div className={"logo-box " + elem} key={index}>
            <DrawSVG
              delay={1000 + index * 300}
              duration="2000"
              outlineOnly="true"
              easingFunction="ease"
              undraw={props.undraw}
            >
              {skillsLogosHandle[elem]}
            </DrawSVG>
            {elem !== "SelfPortrait" && typeof props.undraw === "undefined" && (
              <div className="logo-icon enter-animation">
                {skillsLogosHandle[elem]}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SkillsLogos;
