import React, { Fragment } from "react";
import { ReactComponent as HeaderName } from "../svgs/1. Header/Header_Name.svg";
import HeaderNav from "./HeaderNav";
import "./Styles/Heading.css";

function Heading() {
  return (
    <Fragment>
      <section className="name">
        <HeaderName className="comp" />
      </section>
      <HeaderNav />
    </Fragment>
  );
}

export default Heading;
