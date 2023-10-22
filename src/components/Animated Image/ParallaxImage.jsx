import React from "react";
import { useState, useEffect, useRef } from "react";
import cafe from "../../images/cafe.png";
import "./ParallaxImage.css";
import { animated, useSpring } from "react-spring";

const ParallaxImage = ({ parallax }) => {
  const [translateY, setTranslateY] = useState(0);
  const imgRef = useRef();

  useEffect(() => {
    if (!parallax.current) return;
    const parallaxRef = parallax.current.container.current;

    const handleScroll = () => {
      const offset = imgRef.current.getBoundingClientRect().top;
      setTranslateY(-offset * 0.1); // The 0.1 value determines the speed. Adjust as needed.
    };

    parallaxRef.addEventListener("scroll", handleScroll);
    return () => parallaxRef.removeEventListener("scroll", handleScroll);
  }, []);

  const props = useSpring({
    transform: `translateY(${translateY}px)`,
    config: { tension: 280, friction: 60 },
  });

  return (
    <div className="image-container">
      <animated.img
        ref={imgRef}
        className="parallax-image"
        src={cafe}
        alt="Description"
        style={props}
      />
      <div className="image-overlay">
        <div className="image-content">
          <h1>Reservation</h1>
          <h2>Book Your Table</h2>
          <button>Online Booking</button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxImage;
