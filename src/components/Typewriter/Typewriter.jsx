import React, { useEffect, useState, useRef } from "react";

const Typewriter = ({ children, className, speed }) => {
  const [resultText, setResultText] = useState("");
  const typewriterRef = useRef(null);
  useEffect(() => {
    // Current typewriter Ref
    const typewriter = typewriterRef.current;

    // Speed
    const BASE_SPEED = 1000; // 1 second
    const durationInterval = BASE_SPEED / speed;

    // Observer options
    const options = {
      threshold: 0.75,
    };

    // Observer function declaration
    let startTypewriting;

    // For startTypewriting interval callback
    let count = -1;
    const textArray = Array.from(children);

    // Observer Callback
    const handleIntersect = (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        startTypewriting = setInterval(() => {
          if (count >= textArray.length - 1) {
            clearInterval(startTypewriting);
            return;
          }
          count++;
          setResultText((prevText) => prevText + textArray[count]);
        }, durationInterval);

        // Unobserve once we insterect since we do not want to repeat
        observer.unobserve(entry.target);
      }
    };
    const observer = new IntersectionObserver(handleIntersect, options);

    if (typewriter) {
      observer.observe(typewriter);
    }

    return () => {
      clearInterval(startTypewriting);
      if (typewriter) {
        observer.unobserve(typewriter);
      }
    };
  }, [children]);

  return (
    <div ref={typewriterRef} className={className}>
      {resultText}
    </div>
  );
};

export default Typewriter;
