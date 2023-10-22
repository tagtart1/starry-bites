import React, { useLayoutEffect, useState, useEffect } from "react";

const useAdaptiveSize = () => {
  const [height, setHeight] = useState("m");
  const [width, setWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerHeight < 1080) {
        console.log("med");
        return setHeight("m");
      } else {
        console.log("larg");
        return setHeight("l");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { height, width };
};

export default useAdaptiveSize;
