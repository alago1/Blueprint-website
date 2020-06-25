import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  useCallback,
} from "react";
import { ReactComponent as BannerText1 } from "../../svgs/Home Page/Banner Text 1.svg";
import { ReactComponent as BannerText2 } from "../../svgs/Home Page/Banner Text 2.svg";
import { ReactComponent as BannerText3 } from "../../svgs/Home Page/Banner Text 3.svg";
import BannerFigures from "./BannerFigures";
import DrawSVG from "../Animation/DrawSVG";
import "./Home.css";

function Home(props, ref) {
  const [shouldUndraw, setUndraw] = useState();
  const [animationStage, setAnimationStage] = useState(0);

  const animEventDuration = [
    //stage : ms
    5450,
    2450,
    1550,
    2850,
    50,
    3350,
    1,
  ];

  useImperativeHandle(ref, () => ({
    undraw(duration = 2000, delay = 0, easingFunction = "ease") {
      setUndraw({
        duration: duration,
        delay: delay,
        outlineOnly: false,
        easingFunction: easingFunction,
      });

      return new Promise((resolve) => setTimeout(resolve, duration + delay));
    },
  }));

  const scheduleNextEvent = useCallback(() => {
    if (
      animationStage !== "undefined" &&
      animationStage < animEventDuration.length
    ) {
      setTimeout(() => {
        if (!shouldUndraw) {
          setAnimationStage(animationStage + 1);
        }
      }, animEventDuration[animationStage]);
    }
  }, [animationStage, animEventDuration, shouldUndraw]);

  useEffect(() => scheduleNextEvent(), [animationStage, scheduleNextEvent]);

  // useEffect(() => console.log(animationStage), [animationStage]);

  return (
    <div className="home-page">
      <div className="banner-text">
        <DrawSVG duration="6000" delay="5500" undraw={shouldUndraw}>
          <BannerText1
            className="banner text1"
            style={{ visibility: animationStage >= 1 ? "visible" : "hidden" }}
          />
        </DrawSVG>
        <DrawSVG duration="6000" delay="12500" undraw={shouldUndraw}>
          <BannerText2
            className="banner text2"
            style={{ visibility: animationStage >= 4 ? "visible" : "hidden" }}
          />
        </DrawSVG>
        <DrawSVG duration="6000" delay="15000" undraw={shouldUndraw}>
          <BannerText3
            className="banner text3"
            style={{ visibility: animationStage >= 5 ? "visible" : "hidden" }}
          />
        </DrawSVG>
      </div>
      <BannerFigures undraw={shouldUndraw} animationStage={animationStage} />
    </div>
  );
}

export default forwardRef(Home);
