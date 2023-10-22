import React from "react";
import { ParallaxConfig } from "../../ParallaxConfig";
import { ParallaxLayer } from "@react-spring/parallax";

import herbs from "../../images/herbs1.png";
import salt from "../../images/salt.png";
import pepper from "../../images/pepper.png";

import thyme from "../../images/thyme-stem.png";
import thyme2 from "../../images/thyme-stem2.png";
import woodSpoon2 from "../../images/wooden-spoon2.png";

const ParallaxBlock = ({ height }) => {
  return (
    <>
      <ParallaxLayer
        offset={ParallaxConfig[height]["salt4"].offset}
        speed={ParallaxConfig[height]["salt4"].speed}
      >
        <img src={salt} alt="salt" className="salt-4" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.15}>
        <img src={salt} className="salt-3" alt="salt" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={ParallaxConfig[height]["thyme1"].offset}
        speed={ParallaxConfig[height]["thyme1"].speed}
        style={{ zIndex: 1 }}
      >
        <img className="thyme-stem-img" src={thyme} alt="thyme" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={ParallaxConfig[height]["thyme2"].offset}
        speed={ParallaxConfig[height]["thyme2"].speed}
      >
        <img className="thyme2-stem-img" src={thyme2} alt="thyme" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={ParallaxConfig[height]["pepper2"].offset}
        speed={ParallaxConfig[height]["pepper2"].speed}
      >
        <img src={pepper} alt="pepper" className="pepper-2" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={ParallaxConfig[height]["herbs2"].offset}
        speed={ParallaxConfig[height]["herbs2"].speed}
      >
        <img src={herbs} alt="herbs" className="herbs-2" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={ParallaxConfig[height]["salt5"].offset}
        speed={ParallaxConfig[height]["salt5"].speed}
      >
        <img src={salt} alt="salt" className="salt-5" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={ParallaxConfig[height]["woodspoon2"].offset}
        speed={ParallaxConfig[height]["woodspoon2"].speed}
        style={{ zIndex: 1 }}
      >
        <img src={woodSpoon2} alt="wood spoon" className="woodspoon-2" />
      </ParallaxLayer>
    </>
  );
};

export default ParallaxBlock;
