import React from "react";
import "./Menu.css";
import Typewriter from "../Typewriter/Typewriter";
import RotatingImage from "../Animated Image/RotatingImage";

import maindish from "../../images/maindish.png";

import salt from "../../images/salt.png";
import appetizer from "../../images/appetizer.png";
import sidedish from "../../images/sidedish.png";
import dessert from "../../images/dessert.png";

export const MenuBlock = ({ parallax }) => {
  return (
    <div className="menu-block" id="Menu">
      <div className="menu-block-wrapper">
        <div className="menu-intro">
          <div className="menu-intro-header">
            <h1>Discover</h1>
            <h2>Our Menu</h2>
          </div>
          <p>
            Few things come close to the joy of steak and chips - cooked simply
            with tender, loving care. Rest assured that our chefs treat our
            Irish beef with the respect it deserves. The open ktichens in many
            of our steakhouses are testimony to that.
          </p>
        </div>
        <div className="menu-items">
          <div className="menu-item appetizer-item">
            <RotatingImage src={appetizer} maxwidth={400} parent={parallax} />
            <div className="menu-item-info">
              <h1 className="menu-item-head">Appetizer</h1>
              <div className="min-width-375">
                <Typewriter className="menu-item-desc" speed={40}>
                  Start with our fresh baked bread topped with tomatoes and
                  olives
                </Typewriter>
              </div>
            </div>
            <img className="salt-behind-plate-1" src={salt} alt="salt" />
          </div>
          <div className="menu-item">
            <div className="menu-item-info">
              <h1 className="menu-item-head">Main Dish</h1>

              <Typewriter className="menu-item-desc" speed={40}>
                Our juicy fresh grilled steak served the way you like it to
                satisfy your appetite
              </Typewriter>
            </div>
            <RotatingImage src={maindish} parent={parallax} />
          </div>
          <div className="menu-item side-dish-item">
            <RotatingImage src={sidedish} parent={parallax} />
            <div className="menu-item-info">
              <h1 className="menu-item-head">Side Dish</h1>
              <div className="min-width-375">
                <Typewriter className="menu-item-desc" speed={40}>
                  Have a healthy salad mixed with light sliced salmon supplement
                  your steak
                </Typewriter>
              </div>
            </div>
          </div>

          <div className="menu-item">
            <div className="menu-item-info">
              <h1 className="menu-item-head">Dessert</h1>
              <Typewriter className="menu-item-desc" speed={40}>
                Finish your experience with slice of our made to order warn
                chocolate cake topped with a secret recipe light sweet icing
              </Typewriter>
            </div>

            <RotatingImage src={dessert} maxwidth={400} parent={parallax} />
          </div>
        </div>
      </div>
    </div>
  );
};
