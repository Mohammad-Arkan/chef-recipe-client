import React from "react";

const Blog = () => {
  return (
    <div className="container my-5 d-flex flex-column gap-5">
      <div>
        <h4>
          Q1. The differences between uncontrolled and controlled components.
        </h4>
        <p className="fs-4">
          Ans: Uncontrolled component doesn't manage its own state & Controlled
          Components Manages its own state and contorls the value of form input.
        </p>
      </div>
      <div>
        <h4>Q2. How to validate React props using PropTypes</h4>
        <p className="fs-4">
          we validate them by setting the propTypes property of the FooComponent
          component to an object{" "}
        </p>
      </div>
      <div>
        <h4>Q3. The difference between nodejs and express js.</h4>
        <p className="fs-4 ">
          NodeJS is the package, which provides the JavaScript run-time
          environment, whereas Express is a framework that sits on top of NodeJS
          and helps us to handle requests and responses.
        </p>
      </div>
      <div>
        <h4>
          Q4. What is a custom hook, and why will you create a custom hook?
        </h4>
        <p className="fs-4 ">
          Custom Hooks start with "use" and that may call other hooks. we will
          use custom hook to reused easily, which ensures clean code and reduces
          the time to write the code.
        </p>
      </div>
    </div>
  );
};

export default Blog;
