import React, { useEffect, useRef } from "react";
import "./FreshIngredients.css";
import ScalingImage from "./ScalingImage";

export const FreshIngredients = ({ parallax }) => {
  return (
    <div className="fresh-ingredients-block">
      <div className="top">
        <h1 className="discover-text">Discover</h1>
        <h1 className="sub-header">The Best Ingredients</h1>
        <p className="main-text">
          We take an enormous amount of pride in sourcing our ingredients
          carefully to ensure that the flavors of our food are as delicious and
          authentic as possible. We're only able to achieve this level of
          excellence by putting an extra level of care into our menu items that
          is difficult to find at other restaurants.
        </p>
      </div>
      <ScalingImage parallax={parallax} />
    </div>
  );
};
