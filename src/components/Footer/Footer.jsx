import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <section>
        <h1>Location</h1>
        <div className="content-wrapper">
          <div className="line-height">
            <p className="quip">Start with our fresh shrimps</p>
            <p>1223 Roosevelt, NY</p>
          </div>
          <div className="line-height">
            <p className="quip">End with our fresh sliced squid</p>
            <p>1223 Roosevelt, NY</p>
          </div>
        </div>
      </section>
      <section>
        <h1>Working Hours</h1>
        <div className="content-wrapper">
          <div className="line-height">
            <p>Monday - Thursday</p>
            <p>Friday</p>
            <p>Saturday - Sunday</p>
          </div>
          <div className="line-height">
            <p>10 am - 9 pm</p>
            <p>4 pm - 11pm</p>
            <p>10 am - 11pm</p>
          </div>
        </div>
      </section>
      <section className="brand-tag">
        <h1>Starry Bites</h1>
        <p>info@starrybites.com</p>
      </section>
    </footer>
  );
};
