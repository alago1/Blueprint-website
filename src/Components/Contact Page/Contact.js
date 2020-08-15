import React, { useState, forwardRef, useImperativeHandle } from "react";
import { ReactComponent as HeaderContact } from "../../svgs/Header/Header_Contact.svg";
import { IconsList } from "./IconsList";
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
          {Object.keys(IconsList).map((elem, index) => {
            return (
              <div className="icon-box" key={elem + " Contact Icon"}>
                <DrawSVG
                  duration={1500}
                  delay={500 + index * 300}
                  undraw={shouldUndraw}
                  className="transparent"
                >
                  {IconsList[elem].component}
                </DrawSVG>
                <div
                  className="contact-icon"
                  style={{
                    animation:
                      typeof shouldUndraw === "undefined"
                        ? "fade-in 1s ease 1.5s forwards, delay-appear 1.5s ease"
                        : "fade-out 0.5s ease forwards",
                  }}
                >
                  <a
                    href={IconsList[elem].href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {IconsList[elem].component}
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
