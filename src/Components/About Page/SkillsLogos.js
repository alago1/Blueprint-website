import React, { useState } from "react";
import { ReactComponent as Portrait } from "../../svgs/About Page/Self_Portrait.svg";
//this needs to be replaced with links later but for testing/now we'll go with this
import { ReactComponent as HtmlCssLogo } from "../../svgs/About Page/Logos/Html + Css Logo.svg";
import { ReactComponent as JsLogo } from "../../svgs/About Page/Logos/Js Logo.svg";
import { ReactComponent as ReactLogo } from "../../svgs/About Page/Logos/React Logo.svg";
import { ReactComponent as GitLogo } from "../../svgs/About Page/Logos/Git Logo.svg";
import { ReactComponent as LinuxLogo } from "../../svgs/About Page/Logos/Linux Logo.svg";
import { ReactComponent as PythonLogo } from "../../svgs/About Page/Logos/Python Logo.svg";
import "./SkillsLogos.css";

function SkillsLogos(props) {
  const [selectedLogo, setSelectedLogo] = useState("Portrait");

  const handleChangeLogo = (newLogo) => {
    if (newLogo !== selectedLogo) {
      setSelectedLogo(newLogo);
    }
  };

  // Easy way to modify order without copy pasting inside logosHandle
  const order = [
    "HtmlCss",
    "Js",
    "React",
    "Portrait",
    "Git",
    "Linux",
    "Python",
  ];

  const logoClassName = (logoName) =>
    selectedLogo === logoName ? "logo selected" : "logo";

  const logosHandle = {
    HtmlCss: {
      component: (
        <HtmlCssLogo
          className={logoClassName("HtmlCss")}
          onClick={() => handleChangeLogo("HtmlCss")}
        />
      ),
      subtitle: "HTML & CSS",
    },
    Js: {
      component: (
        <JsLogo
          className={logoClassName("Js")}
          onClick={() => handleChangeLogo("Js")}
        />
      ),
      subtitle: "Javascript",
    },
    React: {
      component: (
        <ReactLogo
          className={logoClassName("React")}
          onClick={() => handleChangeLogo("React")}
        />
      ),
      subtitle: "React",
    },
    Git: {
      component: (
        <GitLogo
          className={logoClassName("Git")}
          onClick={() => handleChangeLogo("Git")}
        />
      ),
      subtitle: "Git",
    },
    Linux: {
      component: (
        <LinuxLogo
          className={logoClassName("Linux")}
          onClick={() => handleChangeLogo("Linux")}
        />
      ),
      subtitle: "Linux",
    },
    Python: {
      component: (
        <PythonLogo
          className={logoClassName("Python")}
          onClick={() => handleChangeLogo("Python")}
        />
      ),
      subtitle: "Python",
    },
    Portrait: {
      component: (
        <Portrait
          className={logoClassName("Portrait")}
          onClick={() => handleChangeLogo("Portrait")}
        />
      ),
      subtitle: "",
    },
  };

  return (
    <div className="skills-logos">
      {order.map((elem, index) => {
        return (
          <div className={"logo-box" + index} key={index}>
            {logosHandle[elem].component}
            {/* h3 is probably placeholder ...? */}
            <h3 className="logo-subtitle">{logosHandle[elem].subtitle}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsLogos;
