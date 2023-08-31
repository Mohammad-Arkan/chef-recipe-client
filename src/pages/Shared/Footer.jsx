import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="footer" className=" mt-5 border shadow rounded py-5">
        <div className="footer footer-links mb-4 d-flex flex-column flex-lg-row justify-content-center text-center gap-4 fw-semibold">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
        </div>
        <div className="d-flex justify-content-center gap-2">
          <input
            className="p-2 rounded border shadow-sm"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="btn btn-outline-primary ">Subscribe</button>
        </div>
        <div className="fs-2 my-4 d-flex justify-content-center gap-3">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <h5 className="text-center">&copy; Copyright 2023 Savory Secrets</h5>
      </div>
    </>
  );
};

export default Footer;
