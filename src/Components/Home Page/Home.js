import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  useCallback,
  useRef,
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
  const isCurrent = useRef(true);

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
    undraw(duration = 1000, delay = 300, easingFunction = "ease") {
      setUndraw({
        duration: duration,
        delay: delay,
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
        if (!shouldUndraw && isCurrent.current) {
          setAnimationStage(animationStage + 1);
        }
      }, animEventDuration[animationStage]);
    }
  }, [animationStage, animEventDuration, shouldUndraw]);

  useEffect(() => scheduleNextEvent(), [animationStage, scheduleNextEvent]);

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  // useEffect(() => console.log(animationStage), [animationStage]);

  return (
    <div className="home-page">
      <div className="banner-text">
        <DrawSVG
          duration={6000}
          delay={5500}
          easingFunction="cubic-bezier(1, 0.16, 1, 0.3)"
          undraw={shouldUndraw}
          startTransparent
          style={{
            width: "100%",
          }}
        >
          <BannerText1
            className="banner text1"
            style={{
              visibility: animationStage >= 1 ? "visible" : "hidden",
            }}
          />
        </DrawSVG>
        <DrawSVG
          duration={6000}
          delay={12500}
          easingFunction="cubic-bezier(1, 0.16, 1, 0.3)"
          undraw={shouldUndraw}
          startTransparent
          style={{
            width: "93%",
          }}
        >
          <BannerText2
            className="banner text2"
            style={{
              visibility: animationStage >= 4 ? "visible" : "hidden",
            }}
          />
        </DrawSVG>
        <DrawSVG
          duration={6000}
          delay={15000}
          easingFunction="cubic-bezier(1, 0.16, 1, 0.3)"
          undraw={shouldUndraw}
          startTransparent
          style={{
            width: "79%",
          }}
        >
          <BannerText3
            className="banner text3"
            style={{
              visibility: animationStage >= 5 ? "visible" : "hidden",
            }}
          />
        </DrawSVG>
      </div>
      <BannerFigures undraw={shouldUndraw} animationStage={animationStage} />
    </div>
  );
}

export default forwardRef(Home);
