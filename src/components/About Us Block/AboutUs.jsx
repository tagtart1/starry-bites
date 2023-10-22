import React from "react";
import "./AboutUs.css";
import thyme from "../../images/thyme-stem.png";
import grilledSteak from "../../images/grilled-steak.png";

const AboutUs = () => {
  return (
    <div className="our-story-block" id="About Us">
      <section>
        <div className="image-wrapper">
          <img
            src={grilledSteak}
            alt="steak on a grill"
            className="steak-grill"
          />
        </div>
        <div className="our-story-text">
          <div className="story-headers">
            <h1 className="discover-text">Discover</h1>
            <h1 className="our-story-header-text">Our Story</h1>
          </div>
          <p className="text-body">
            Starry Bites is not just a gourmet steakhouse; it's an ode to the
            finest cuts of meat, seasoned with tales of age-old traditions and
            grilled to perfection under a canopy of stars. Nestled in the heart
            of the city, our establishment beckons connoisseurs who cherish an
            authentic culinary experience. Each plate is a testament to our
            unwavering commitment to quality and a passion for reimagining
            classic steakhouse favorites. At Starry Bites, we believe that every
            meal should be as unforgettable as a clear, starlit night.
          </p>
          <p className="more-about-us-text">More About Us ⟶</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
