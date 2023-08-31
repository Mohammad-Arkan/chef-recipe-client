import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

const FoodMarquee = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center my-4 py-4 fs-2 ">Weekend Recipes</h1>
      <Marquee>
        <div id="foodMarquee" className="d-flex gap-5">
          <img src={img1}></img>
          <img src={img2}></img>
          <img src={img3}></img>
          <img src={img4}></img>
          <img src={img5}></img>
          <img src={img6}></img>
          <img src={img7}></img>
          <img src={img8}></img>
        </div>
      </Marquee>
    </div>
  );
};

export default FoodMarquee;
