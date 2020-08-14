import React from "react";
import { ReactComponent as LightBulb } from "../../svgs/Home Page/Light bulb.svg";
import { ReactComponent as BallerinaSketch } from "../../svgs/Home Page/Ballerina Sketch.svg";
import { ReactComponent as BallerinaFilled } from "../../svgs/Home Page/Ballerina Filled.svg";
import DrawSVG from "../Animation/DrawSVG";
import "./BannerFigures.css";

function BannerFigures(props) {
  return (
    <div className="figures">
      <DrawSVG
        duration={2000}
        delay={3000}
        undraw={props.undraw}
        className="transparent"
      >
        <LightBulb
          className="figure-style light-bulb off"
          style={{
            visibility: props.animationStage < 2 ? "visible" : "hidden",
          }}
        />
      </DrawSVG>
      <LightBulb
        className="figure-style light-bulb on"
        style={{
          visibility:
            props.animationStage === 2 && typeof props.undraw === "undefined"
              ? "visible"
              : "hidden",
        }}
      />
      <DrawSVG
        duration={2000}
        delay={9600}
        undraw={props.undraw}
        className="transparent"
      >
        <BallerinaSketch
          className="figure-style ballerina-sketch"
          style={{
            visibility: props.animationStage >= 3 ? "visible" : "hidden",
          }}
        />
      </DrawSVG>
      <BallerinaFilled
        className="figure-style ballerina-filled"
        style={{
          visibility:
            props.animationStage > 5 && typeof props.undraw === "undefined"
              ? "visible"
              : "hidden",
        }}
      />
    </div>
  );
}

export default BannerFigures;
