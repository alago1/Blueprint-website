import React, { Fragment } from "react";
import { ReactComponent as HeaderName } from "../../svgs/Header/Header_Name.svg";
import HeaderNav from "./HeaderNav";
import DrawSVG from "../Animation/DrawSVG";
import "./Heading.css";

//low-stroke name header
setTimeout(() => {
  document.getElementById("name-header").classList.add("lowstroke");
}, 1000);

function Heading(props) {
  return (
    <Fragment>
      <section className="name">
        <DrawSVG
          duration={2000}
          delay={1000}
          easingFunction="cubic-bezier(1, 0.16, 1, 0.3)"
          startTransparent
        >
          <HeaderName id="name-header" />
        </DrawSVG>
      </section>
      <HeaderNav signal={props.signal} />
    </Fragment>
  );
}

export default Heading;
