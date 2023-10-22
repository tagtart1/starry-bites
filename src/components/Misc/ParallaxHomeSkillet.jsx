import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

import steakSkillet from "../../images/steak-skillet.png";
import woodSpoon from "../../images/wooden-spoon.png";

import dill from "../../images/dill.png";
import rosemary from "../../images/rosemary.png";
import herbs from "../../images/herbs1.png";
import salt from "../../images/salt.png";
import pepper from "../../images/pepper.png";

const ParallaxHomeSkillet = () => {
  return (
    <>
      <ParallaxLayer offset={0} speed={0.3}>
        <img className="salt-1" src={salt} alt="salt flakes" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.33}>
        <img className="salt-2" src={salt} alt="salt flakes" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.25}>
        <img className="pepper-1" src={pepper} alt="pepper flakes" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.45}>
        <img className="wooden-spoon-img" src={woodSpoon} alt="wood spoon" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.75}>
        <img className="rosemary" src={rosemary} alt="rosemary" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.6}>
        <img className="dill-1" src={dill} alt="dill" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.7}>
        <img src={herbs} alt="Herbs" className="herbs-1" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.8}>
        <img
          className="steak-skillet"
          src={steakSkillet}
          alt="Gourmet steak on skillet"
        />
      </ParallaxLayer>
    </>
  );
};

export default ParallaxHomeSkillet;
