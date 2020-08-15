import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import BannerText from "./BannerText";
import BannerFigures from "./BannerFigures";
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

  return (
    <div className="home-page">
      <BannerText undraw={shouldUndraw} animationStage={animationStage} />
      <BannerFigures undraw={shouldUndraw} animationStage={animationStage} />
    </div>
  );
}

export default forwardRef(Home);
