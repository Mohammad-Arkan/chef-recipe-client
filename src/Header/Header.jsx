import React from "react";
import banner from "/assets/banner.png";

const Header = () => {
  return (
    <div className="container d-flex flex-lg-row flex-column-reverse align-items-center">
      <div>
        <h1>Savory Secrets</h1>
        <h3>Best Food for Your Test</h3>
        <p>
          “Tell me what you eat, and I will tell you who you are.” “So long as
          you have food in your mouth you have solved all questions for the time
          being.” “There is no sincere love than the love of food.” “If more of
          us valued food and cheer and song above hoarded gold, it would be a
          merrier world.”
        </p>
        <button className="btn btn-primary">Order Now</button>
      </div>
      <div className="d-flex justify-content-center">
        <img className="w-75" src={banner} />
      </div>
    </div>
  );
};

export default Header;
