import React from "react";
import { ReactComponent as BannerText1 } from "../../svgs/Home Page/Banner Text 1.svg";
import { ReactComponent as BannerText2 } from "../../svgs/Home Page/Banner Text 2.svg";
import { ReactComponent as BannerText3 } from "../../svgs/Home Page/Banner Text 3.svg";
import DrawSVG from "../Animation/DrawSVG";
import "./Home.css";

function BannerText(props) {
  return (
    <div className="banner-text">
      <DrawSVG
        duration={6000}
        delay={5500}
        easingFunction="cubic-bezier(1, 0.16, 1, 0.3)"
        undraw={props.undraw}
        startTransparent
        style={{
          width: "100%",
        }}
      >
        <BannerText1
          className="banner text1"
          style={{
            visibility: props.animationStage >= 1 ? "visible" : "hidden",
          }}
        />
      </DrawSVG>
      <DrawSVG
        duration={6000}
        delay={12500}
        easingFunction="cubic-bezier(1, 0.16, 1, 0.3)"
        undraw={props.undraw}
        startTransparent
        style={{
          width: "93%",
        }}
      >
        <BannerText2
          className="banner text2"
          style={{
            visibility: props.animationStage >= 4 ? "visible" : "hidden",
          }}
        />
      </DrawSVG>
      <DrawSVG
        duration={6000}
        delay={15000}
        easingFunction="cubic-bezier(1, 0.16, 1, 0.3)"
        undraw={props.undraw}
        startTransparent
        style={{
          width: "79%",
        }}
      >
        <BannerText3
          className="banner text3"
          style={{
            visibility: props.animationStage >= 5 ? "visible" : "hidden",
          }}
        />
      </DrawSVG>
    </div>
  );
}

export default BannerText;
