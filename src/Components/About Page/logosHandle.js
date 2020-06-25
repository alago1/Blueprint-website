import React from "react";
import { ReactComponent as SelfPortrait } from "../../svgs/About Page/Self_Portrait.svg";
//this needs to be replaced with links later but for testing/now we'll go with this
import { ReactComponent as HtmlCssLogo } from "../../svgs/About Page/Logos/Html + Css Logo.svg";
import { ReactComponent as JsLogo } from "../../svgs/About Page/Logos/Js Logo.svg";
import { ReactComponent as ReactLogo } from "../../svgs/About Page/Logos/React Logo.svg";
import { ReactComponent as GitLogo } from "../../svgs/About Page/Logos/Git Logo.svg";
import { ReactComponent as LinuxLogo } from "../../svgs/About Page/Logos/Linux Logo.svg";
import { ReactComponent as PythonLogo } from "../../svgs/About Page/Logos/Python Logo.svg";

export const logosHandle = {
  HtmlCss: {
    portrait: <HtmlCssLogo className="selected-portrait" />,
    title: "HTML5 & CSS3",
    description: "I'm aight",
  },
  Js: {
    portrait: <JsLogo className="selected-portrait" />,
    title: "Javascript",
    description: `  I have a strong understanding of the use of semantic HTML and CSS as well as Javascript features including those added in ES6+ (such as Promises, async, await).`,
  },
  React: {
    portrait: <ReactLogo className="selected-portrait" />,
    title: "React",
    description: `  Primarily, React is my web framework of choice. I can build simple and complex, scalable applications using this state-of-the-art technology.
      
  Relevant and Related:
    - Hooks API
    - Recoil js (Learning)`,
  },
  Git: {
    portrait: <GitLogo className="selected-portrait" />,
    title: "Git",
    description: "IDK, im alright",
  },
  Linux: {
    portrait: <LinuxLogo className="selected-portrait" />,
    title: "Common in the workplace",
    description: `  Among the common workplace/workflow tech, I have a basic understanding of how to work with a linux kernel as well as reading and implementing Bash scripts. Additionally, with regards to Version Control Systems, I am familiar with using VCS's such as Git.
      
  Relevant and Related:
    - Windows Subsystem for Linux.`,
  },
  Python: {
    portrait: <PythonLogo className="selected-portrait" />,
    title: "Python",
    description: `  Python is the language I am most familiar with. From grading scripts to competitive programming, I have written code in this language since my early days of High School. I have a strong grasp of how to write 'pythonic' code and have experience with some of the language's most common libraries.
  
  Relevant and Related:
    - Flask
    - Numpy and Pandas
    - SQLite3`,
  },
  SelfPortrait: {
    portrait: <SelfPortrait className="selected-portrait" />,
    title: "About Me",
    description: `  I am a developer currently residing in Miami, Florida pursuing a Bachelor of Computer Science at the University of Florida.
        
  I am especially interested in work that will help me develop my knowledge in the field or that serves a purpose in society.`,
  },
};
