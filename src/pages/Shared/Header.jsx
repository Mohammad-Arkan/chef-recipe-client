import React from "react";
import banner from "/assets/banner.png";

const Header = () => {
  return (
    <div className="container d-flex flex-lg-row flex-column-reverse align-items-center">
      <div>
        <h1>Savory Secrets</h1>
        <h3>Best Food for Your Test</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
          molestiae? Voluptatum esse ducimus quae iure rem consequatur eaque
          voluptatem veniam doloribus possimus dolore, neque sit quibusdam est
          excepturi, ex doloremque.
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
