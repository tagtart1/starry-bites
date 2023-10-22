import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

const RotatingImage = ({
  src,
  maxwidth,
  parent,
  startThreshold = 0.35,
  rotateMax = 55,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [topBounding, setTopBounding] = useState(null);
  const [rotationDegree, setRotationDegree] = useState(0);
  const [opacityAmount, setOpacityAmount] = useState(0.25);
  const [lockOpacity, setLockOpacity] = useState(false);

  const lockOpacityRef = useRef(lockOpacity);

  const imgRef = useRef(null);

  const thresholds = Array.from({ length: 100 }).map((_, index) => index / 100);

  useEffect(() => {
    if (!parent.current) return;

    const container = parent.current.container.current;
    const handleScroll = () => {
      setScrollY(container.scrollTop);

      // Rotate Logic
      const topBounding = imgRef.current.getBoundingClientRect().top;
      const elementHeight = imgRef.current.getBoundingClientRect().height;

      if (
        topBounding <= elementHeight * startThreshold &&
        topBounding > -elementHeight * startThreshold
      ) {
        const scrollAmount = elementHeight * startThreshold - topBounding;

        const calculatedRotation = Math.min(rotateMax, scrollAmount / 5);

        setRotationDegree(calculatedRotation);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOpacityAmount(entry.intersectionRatio + 0.25);
        if (entry.intersectionRatio > 0.99) {
          observer.unobserve(imgRef.current);
        }
      },
      {
        threshold: thresholds,
      }
    );

    // Start observing the element
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    container.addEventListener("scroll", handleScroll);

    // Clean up when component unmounts or if dependencies change
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }

      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const props = useSpring({
    maxWidth: !maxwidth ? null : maxwidth,
    transform: `rotate(${rotationDegree}deg)`,
    config: { tension: 280, friction: 60 },
    opacity: opacityAmount,
  });

  return (
    <animated.img ref={imgRef} style={props} src={src} alt={"food image"} />
  );
};

export default RotatingImage;
