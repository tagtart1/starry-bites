import React, { useState } from "react";
import ingredients from "../../images/ingredients.png";
import { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

const ScalingImage = ({ parallax }) => {
  const imgRef = useRef();
  const [scaleDegree, setScaleDegree] = useState(1);

  const SCALE_MAX = 1.1;

  useEffect(() => {
    const parallaxRef = parallax.current.container.current;

    const handleScroll = () => {
      const topBounding = imgRef.current.getBoundingClientRect().top;
      const elementHeight = imgRef.current.getBoundingClientRect().height;

      if (topBounding < 250 && topBounding > -350) {
        // Calculate the percentage of visibility of the image.
        const visibleHeight = elementHeight - topBounding;
        const percentageVisible = visibleHeight / elementHeight;

        // Calculate the scale based on visibility.
        // This formula will return values between 1 and SCALE_MAX.
        const calculatedScale = 1 + (SCALE_MAX - 1) * percentageVisible;

        setScaleDegree(calculatedScale);
      }
    };

    parallaxRef.addEventListener("scroll", handleScroll);

    return () => {
      parallaxRef.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const props = useSpring({
    config: { tension: 280, friction: 60 },
    transform: `scale(${scaleDegree})`,
  });

  return (
    <animated.img
      ref={imgRef}
      src={ingredients}
      alt="ingredients"
      className="fresh-ingredients"
      style={props}
    />
  );
};

export default ScalingImage;
