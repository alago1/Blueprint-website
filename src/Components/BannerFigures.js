import React, { useState, useEffect } from "react";
import { ReactComponent as LightBulb } from "../svgs/2. Home Page/Light bulb.svg";
import { ReactComponent as BallerinaSketch } from "../svgs/2. Home Page/Ballerina Sketch.svg";
import { ReactComponent as BallerinaFilled } from "../svgs/2. Home Page/Ballerina Filled.svg";
import DrawSVG from "./Animation/DrawSVG";
import "./Styles/BannerFigures.css";

function BannerFigures(props) {
  const [figure, setFigure] = useState();
  const [isLightBulbOn, setLightBulbState] = useState(false);
  const [isBallerinaFilled, setBallerinaState] = useState(false);

  useEffect(() => {
    if (figure === "LightBulb") {
      const lightOn = 8000; //light bulb is turned on
      const moveToNextState = 1600; //next animation state is queued in

      //Turn on light bulb
      setTimeout(() => setLightBulbState(true), lightOn);

      //queue-in next animation
      setTimeout(() => setFigure("Ballerina"), lightOn + moveToNextState);
    } else if (figure === "Ballerina") {
      const fillBallerina = 6000; //ballerina-filled is drawn

      //Fill Ballerina
      setTimeout(() => setBallerinaState(true), fillBallerina);
    } else {
      //setup
      setLightBulbState(false);
      setBallerinaState(false);

      //queue-in first animation
      setFigure("LightBulb");
    }
  }, [figure, isLightBulbOn]);

  return (
    <div className="figures">
      <DrawSVG
        duration="2000"
        delay="3000"
        outlineOnly="true"
        easingFunction="ease"
        undraw={props.undraw}
      >
        <LightBulb
          className="figure-style light-bulb off"
          style={{
            visibility:
              figure === "LightBulb" && !isLightBulbOn ? "visible" : "hidden",
          }}
        />
      </DrawSVG>
      <DrawSVG animation="static" undraw={props.undraw}>
        <LightBulb
          className="figure-style light-bulb on"
          style={{
            visibility:
              isLightBulbOn && figure === "LightBulb" ? "visible" : "hidden",
          }}
        />
      </DrawSVG>

      <DrawSVG
        duration="2000"
        delay="9600"
        outlineOnly="true"
        easingFunction="ease"
        undraw={props.undraw}
      >
        <BallerinaSketch
          className="figure-style ballerina-sketch"
          style={{
            opacity: isBallerinaFilled ? 0 : 1,
            visibility:
              figure === "Ballerina" && figure === "Ballerina"
                ? "visible"
                : "hidden",
          }}
        />
      </DrawSVG>
      <DrawSVG animation="static" undraw={props.undraw}>
        <BallerinaFilled
          className="figure-style ballerina-filled"
          style={{
            visibility:
              isBallerinaFilled && figure === "Ballerina"
                ? "visible"
                : "hidden",
          }}
        />
      </DrawSVG>
    </div>
  );
}

export default BannerFigures;
