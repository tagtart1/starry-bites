import React from "react";
import "./AboutUs.css";
import thyme from "../../images/thyme-stem.png";
import grilledSteak from "../../images/grilled-steak.png";

const AboutUs = () => {
  return (
    <div class="our-story-block">
      <section>
        <div>
          <img src={grilledSteak} alt="steak on a grill" class="steak-grill" />
        </div>
        <div class="our-story-text">
          <div class="story-headers">
            <h1 class="discover-text">Discover</h1>
            <h1 class="our-story-header-text">Our Story</h1>
          </div>
          <p class="text-body">
            Starry Bites is not just a gourmet steakhouse; it's an ode to the
            finest cuts of meat, seasoned with tales of age-old traditions and
            grilled to perfection under a canopy of stars. Nestled in the heart
            of the city, our establishment beckons connoisseurs who cherish an
            authentic culinary experience. Each plate is a testament to our
            unwavering commitment to quality and a passion for reimagining
            classic steakhouse favorites. At Starry Bites, we believe that every
            meal should be as unforgettable as a clear, starlit night.
          </p>
          <p class="more-about-us-text">More About Us ⟶</p>
        </div>
        <img class="thyme-stem-img" src={thyme} alt="thyme stem" />
      </section>
    </div>
  );
};

export default AboutUs;
