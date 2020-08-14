import React, { useState, forwardRef, useImperativeHandle } from "react";
import { ReactComponent as HeaderContact } from "../../svgs/Header/Header_Contact.svg";
import { ReactComponent as EmailIcon } from "../../svgs/Contact Page/Email Box.svg";
//these need to be links later
import { ReactComponent as GitHubIcon } from "../../svgs/Contact Page/GitHub Box.svg";
import { ReactComponent as LinkedInIcon } from "../../svgs/Contact Page/LinkedIn Box.svg";
import { ReactComponent as TwitterIcon } from "../../svgs/Contact Page/Twitter Box.svg";
import DrawSVG from "../Animation/DrawSVG";
import "./Contact.css";

function Contact(props, ref) {
  const [shouldUndraw, setUndraw] = useState();

  useImperativeHandle(ref, () => ({
    undraw(duration = 1000, delay = 300, easingFunction = "ease") {
      setUndraw({
        duration: duration,
        delay: delay,
        easingFunction: easingFunction,
      });
      return new Promise((resolve) => setTimeout(resolve, duration + delay));
    },
  }));

  const iconsHandle = {
    Email: {
      component: <EmailIcon className="icon" />,
      href: "mailto:allanlago1@gmail.com",
    },
    GitHub: {
      component: <GitHubIcon className="icon" />,
      href: "https://github.com/alago1",
    },
    LinkedIn: {
      component: <LinkedInIcon className="icon" />,
      href: "https://www.linkedin.com/in/allan-lago-a6b5131a8/",
    },
    Twitter: {
      component: <TwitterIcon className="icon" />,
      href: "https://twitter.com/lago_allan",
    },
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <DrawSVG
          delay={500}
          duration={3000}
          easingFunction="cubic-bezier(1, 0.16, 1, 0.3)"
          undraw={shouldUndraw}
          startTransparent
        >
          <HeaderContact className="page-title" />
        </DrawSVG>
      </div>
      <div className="contact-page page-content">
        <div className="icon-bar">
          {Object.keys(iconsHandle).map((elem, index) => {
            return (
              <div className="icon-box" key={elem + " Contact Icon"}>
                <DrawSVG
                  duration={2000}
                  delay={1000 + index * 300}
                  undraw={shouldUndraw}
                  className="transparent"
                >
                  {iconsHandle[elem].component}
                </DrawSVG>
                <div className="contact-icon enter-animation">
                  <a
                    href={iconsHandle[elem].href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {typeof shouldUndraw === "undefined" &&
                      iconsHandle[elem].component}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Contact);
