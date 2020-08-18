import { useState, useEffect, useRef } from "react";

export const useDimensions = ([startWidth, startHeight]) => {
  const [dimensions, setDimensions] = useState([startWidth, startHeight]);

  const domRef = useRef();

  useEffect(() => {
    if (domRef.current) {
      setDimensions([
        domRef.current?.offsetWidth,
        domRef.current?.offsetHeight,
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domRef.current?.offsetWidth, domRef.current?.offsetHeight]);

  return [dimensions, domRef];
};
