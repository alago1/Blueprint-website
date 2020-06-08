import React, { Fragment } from "react";
import { ReactComponent as HeaderName } from "../svgs/1. Header/Header_Name.svg";
import HeaderNav from "./HeaderNav";
import DrawSVG from "./Animation/DrawSVG";
import "./Styles/Heading.css";

function Heading() {
  return (
    <Fragment>
      <section className="name">
        <DrawSVG duration="3000" delay="1500">
          <HeaderName />
        </DrawSVG>
      </section>
      <HeaderNav />
    </Fragment>
  );
}

export default Heading;
