import React, { useMemo, useContext, useCallback } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../../Store";

import { ReactComponent as SelfPortrait } from "../../svgs/About Page/Self_Portrait.svg";
import { ReactComponent as JsHtmlCss } from "../../svgs/About Page/Logos/Js + Html + Css Logo.svg";
import { ReactComponent as ReactLogo } from "../../svgs/About Page/Logos/React Logo.svg";
import { ReactComponent as GitLinuxLogo } from "../../svgs/About Page/Logos/Linux + Git Logo.svg";
import { ReactComponent as PythonLogo } from "../../svgs/About Page/Logos/Python Logo.svg";
import DrawSVG from "../Animation/DrawSVG";
import "./SkillsLogos.css";

function SkillsLogos(props) {
  const store = useContext(StoreContext);

  const handleChangeLogo = useCallback(
    (newLogo) => {
      if (newLogo !== store.selectedPortrait) {
        store.selectedPortrait = newLogo;
      }
    },
    [store.selectedPortrait]
  );

  const skillsLogosHandle = useMemo(
    () => ({
      JsHtmlCss: (
        <JsHtmlCss
          className="logo"
          onClick={() => handleChangeLogo("JsHtmlCss")}
        />
      ),
      React: (
        <ReactLogo className="logo" onClick={() => handleChangeLogo("React")} />
      ),
      SelfPortrait: (
        <SelfPortrait
          className="logo"
          onClick={() => handleChangeLogo("SelfPortrait")}
        />
      ),
      GitLinux: (
        <GitLinuxLogo
          className="logo"
          onClick={() => {
            handleChangeLogo("GitLinux");
          }}
        />
      ),
      Python: (
        <PythonLogo
          className="logo"
          onClick={() => handleChangeLogo("Python")}
        />
      ),
    }),
    [handleChangeLogo]
  );

  return useObserver(() => (
    <div className="skills-logos">
      {Object.keys(skillsLogosHandle).map((elem, index) => {
        return (
          <div
            className={`logo-box ${elem} ${
              elem === store.selectedPortrait ? "selected" : ""
            }`}
            key={index}
          >
            <DrawSVG
              delay={1000 + index * 300}
              duration={2000}
              undraw={props.undraw}
              startTransparent
              className="transparent logo-outline"
            >
              {skillsLogosHandle[elem]}
            </DrawSVG>
            {elem !== "SelfPortrait" && typeof props.undraw === "undefined" && (
              <div className="logo-icon">{skillsLogosHandle[elem]}</div>
            )}
          </div>
        );
      })}
    </div>
  ));
}

export default SkillsLogos;
