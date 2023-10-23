import React, { useLayoutEffect, useState, useEffect } from "react";

const useAdaptiveSize = () => {
  const [height, setHeight] = useState("m");
  const [width, setWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth < 1270) {
        console.log("s");
        return setHeight("s");
      } else if (window.innerHeight < 1080 && window.innerWidth > 1270) {
        console.log("med");
        return setHeight("m");
      } else if (window.innerHeight > 1080 && window.innerWidth > 1920) {
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
