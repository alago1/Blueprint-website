import React, { Fragment, useState, useEffect } from "react";
import { ReactComponent as HeaderName } from "../../svgs/Header/Header_Name.svg";
import HeaderNav from "./HeaderNav";
import DrawSVG from "../Animation/DrawSVG";
import "./Heading.css";

function Heading(props) {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRendered(true);
    }, 3000);
  });

  return (
    <Fragment>
      <section className={rendered ? "name lowstroke" : "name"}>
        <DrawSVG duration="5000" delay="1000">
          <HeaderName />
        </DrawSVG>
      </section>
      <HeaderNav signal={props.signal} />
    </Fragment>
  );
}

export default Heading;
