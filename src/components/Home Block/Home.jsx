import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import salt from "../../images/salt.png";
import woodSpoon from "../../images/wooden-spoon.png";
import steakSkillet from "../../images/steak-skillet.png";
import pepper from "../../images/pepper.png";
import herbs from "../../images/herbs1.png";
import rosemary from "../../images/rosemary.png";
import dillleaf from "../../images/dill.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
  return (
    <div className="intro-block">
      <Header />
      <div class="intro-main">
        <div class="intro-greeting">
          <h1>A Parallax And Authentic Steakhouse</h1>
          <button class="book-a-table">Book A Table</button>
        </div>

        <div class="steak-skillet-wrapper">
          <img
            class="steak-skillet"
            src={steakSkillet}
            alt="Gourmet steak on skillet"
          />
          <img class="wooden-spoon-img" src={woodSpoon} alt="wooden-spoon" />
          <img class="salt-1" src={salt} alt="salt dust" />
          <img class="salt-2" src={salt} alt="salt dust" />
          <img class="pepper-1" src={pepper} alt="pepper dust" />
          <img class="herbs-1" src={herbs} alt="tomatoe-bay" />
          <img class="rosemary" src={rosemary} alt="rosemary" />
          <img class="dill-1" src={dillleaf} alt="dill leaf" />
        </div>
      </div>
    </div>
  );
};

export default Home;
