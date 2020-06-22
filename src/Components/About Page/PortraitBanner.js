import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { about_SelectedPortrait } from "../../Storage";
import { ReactComponent as Portrait } from "../../svgs/About Page/Self_Portrait.svg";
import PortraitPhoto from "../../imgs/PortraitPhoto.png";
//this needs to be replaced with links later but for testing/now we'll go with this
import { ReactComponent as HtmlCssLogo } from "../../svgs/About Page/Logos/Html + Css Logo.svg";
import { ReactComponent as JsLogo } from "../../svgs/About Page/Logos/Js Logo.svg";
import { ReactComponent as ReactLogo } from "../../svgs/About Page/Logos/React Logo.svg";
import { ReactComponent as GitLogo } from "../../svgs/About Page/Logos/Git Logo.svg";
import { ReactComponent as LinuxLogo } from "../../svgs/About Page/Logos/Linux Logo.svg";
import { ReactComponent as PythonLogo } from "../../svgs/About Page/Logos/Python Logo.svg";
import DrawSVG from "../Animation/DrawSVG.js";
import "./PortraitBanner.css";

function PortraitBanner(props) {
  const selectedPortrait = useRecoilValue(about_SelectedPortrait);

  useEffect(() => {
    //restarts the appear animation
    let elem = document.getElementsByClassName(
      "selected-portrait-container"
    )[0];
    elem.classList.remove("enter-animation");
    // forces the browser to make all necessary calculations before evaluating the animations
    void elem.offsetWidth;
    elem.classList.add("enter-animation");
  }, [selectedPortrait]);

  const logosHandle = {
    HtmlCss: <HtmlCssLogo className="selected-portrait" />,
    Js: <JsLogo className="selected-portrait" />,
    React: <ReactLogo className="selected-portrait" />,
    Git: <GitLogo className="selected-portrait" />,
    Linux: <LinuxLogo className="selected-portrait" />,
    Python: <PythonLogo className="selected-portrait" />,
    Portrait: <Portrait className="selected-portrait" />,
  };

  const getPortraitComponent = (name) => {
    if (name in logosHandle) {
      return logosHandle[name];
    }
    // if name is not a key in the logosHandle, Portrait is showed instead
    console.log("Unrecognizable portrait name.");
    return logosHandle.Portrait;
  };

  return (
    <div className="portrait-banner">
      <div className="portrait-container">
        <DrawSVG
          delay="1500"
          duration="3000"
          outlineOnly="true"
          easingFunction="ease"
          undraw={props.undraw}
        >
          {getPortraitComponent(selectedPortrait)}
        </DrawSVG>
        <div
          className="selected-portrait enter-animation selected-portrait-container"
          style={{
            visibility:
              typeof props.undraw === "undefined" ? "visible" : "hidden",
          }}
        >
          {selectedPortrait === "Portrait" ? (
            <img
              src={PortraitPhoto}
              alt=""
              className={"selected-portrait filled"}
            />
          ) : (
            getPortraitComponent(selectedPortrait)
          )}
        </div>
      </div>
      <div className="portrait-description">
        {/* placeholder for svg, text, or box*/}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam
          nisi libero eum labore, fuga ipsa, cum numquam, perferendis nostrum
          dignissimos optio! Maxime quasi autem qui officiis corporis,
          aspernatur suscipit?
        </h1>
      </div>
    </div>
  );
}

export default PortraitBanner;
