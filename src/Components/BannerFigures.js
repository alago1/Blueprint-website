import React, { useState, useEffect, Fragment } from "react";
import { ReactComponent as LightBulb } from "../svgs/2. Home Page/Light bulb.svg";
import { ReactComponent as BallerinaSketch } from "../svgs/2. Home Page/Ballerina Sketch.svg";
import { ReactComponent as BallerinaFilled } from "../svgs/2. Home Page/Ballerina Filled.svg";
import DrawSVG from "./Animation/DrawSVG";
import "./Styles/BannerFigures.css";

function BannerFigures() {
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
      const fillBallerina = 10000; //ballerina-filled is drawn

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

  const stages = {
    LightBulb: (
      <Fragment>
        <DrawSVG
          duration="2000"
          delay="3000"
          outlineOnly="true"
          easingFunction="ease"
        >
          <LightBulb
            className="figure-style light-bulb off"
            style={{ visibility: isLightBulbOn ? "hidden" : "visible" }}
          />
        </DrawSVG>
        <LightBulb
          className="figure-style light-bulb on"
          style={{ visibility: isLightBulbOn ? "visible" : "hidden" }}
        />
      </Fragment>
    ),
    Ballerina: (
      <Fragment>
        <DrawSVG duration="1000" delay="0" outlineOnly="true">
          <BallerinaSketch
            className="figure-style ballerina-sketch"
            style={{ opacity: isBallerinaFilled ? 0 : 1 }}
          />
        </DrawSVG>
        <BallerinaFilled
          className="figure-style ballerina-filled"
          style={{ visibility: isBallerinaFilled ? "visible" : "hidden" }}
        />
      </Fragment>
    ),
  };

  return <div className="figures">{stages[figure]}</div>;
}

export default BannerFigures;
