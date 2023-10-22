import React from "react";
import "./UpcomingEvents.css";
import grilledSteak from "../../images/grilled-steak.png";
import friends from "../../images/women-making-dinner-and-drinking-wine.jpg";

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events-block">
      <section>
        <div className="image-wrapper">
          <img src={friends} alt="friends talking over wine" />
        </div>
        <div className="upcoming-events-text">
          <div className="story-headers">
            <h1 className="discover-text">Discover</h1>
            <h1 className="upcoming-events-header-text">Upcoming Events</h1>
          </div>
          <p className="upcoming-events-text-body">
            Not only can you get the best food in town, you can gather up with
            your old friends while enjoying the food we provide.
          </p>
          <div className="event-details">
            <h2>Barbecue Party</h2>
            <p className="event-specifics">December 25 | Lunch Time | Casual</p>
          </div>
          <p className="more-events-text">More Events ⟶</p>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
