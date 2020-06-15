import React, {
  Fragment,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { ReactComponent as BannerText1 } from "../svgs/2. Home Page/Banner Text 1.svg";
import { ReactComponent as BannerText2 } from "../svgs/2. Home Page/Banner Text 2.svg";
import { ReactComponent as BannerText3 } from "../svgs/2. Home Page/Banner Text 3.svg";
import BannerFigures from "./BannerFigures";
import DrawSVG from "./Animation/DrawSVG";
import "./Styles/Home.css";

function Home(props, ref) {
  const [shouldUndraw, setUndraw] = useState();

  useImperativeHandle(ref, () => ({
    undraw(duration = 2000, delay = 0, easingFunction = "ease") {
      setUndraw({
        duration: duration,
        delay: delay,
        outlineOnly: false,
        easingFunction: easingFunction,
      });
    },
  }));

  return (
    <Fragment>
      <div className="banner-text">
        <DrawSVG duration="6000" delay="5500" undraw={shouldUndraw}>
          <BannerText1 className="banner text1" />
        </DrawSVG>
        <DrawSVG duration="6000" delay="12500" undraw={shouldUndraw}>
          <BannerText2 className="banner text2" />
        </DrawSVG>
        <DrawSVG duration="6000" delay="15000" undraw={shouldUndraw}>
          <BannerText3 className="banner text3" />
        </DrawSVG>
      </div>
      <BannerFigures undraw={shouldUndraw} />
    </Fragment>
  );
}

export default forwardRef(Home);
