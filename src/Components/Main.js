import React, { Fragment } from "react";
import { ReactComponent as BannerText1 } from "../svgs/2. Home Page/Banner Text 1.svg";
import { ReactComponent as BannerText2 } from "../svgs/2. Home Page/Banner Text 2.svg";
import { ReactComponent as BannerText3 } from "../svgs/2. Home Page/Banner Text 3.svg";
import BannerFigures from "./BannerFigures";
import DrawSVG from "./Animation/DrawSVG";
import "./Styles/Main.css";

function Main() {
  return (
    <Fragment>
      <div className="banner-text">
        <DrawSVG duration="6000" delay="5500">
          <BannerText1 className="banner text1" />
        </DrawSVG>
        <DrawSVG duration="6000" delay="15500">
          <BannerText2 className="banner text2" />
        </DrawSVG>
        <DrawSVG duration="6000" delay="20000">
          <BannerText3 className="banner text3" />
        </DrawSVG>
      </div>
      <BannerFigures />
    </Fragment>
  );
}

export default Main;
