import React from "react";

const Tips = () => {
  return (
    <>
      <h3 className="text-center">Prevent Failure (Tips)</h3>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        <img width={400} src="assets/chef.png" />
        <div className="p-4 border rounded">
          <h5>
            To help prevent failure, here are our top five tips for successfully
            preparing a recipe:
          </h5>
          <li>
            The most important rule is to read the entire recipe before
            starting.
          </li>
          <li>
            measure first. After reading a recipe, do all prep work first.
          </li>
          <li>No substitutions.</li>
          <li>tweak and tinker.</li>
        </div>
      </div>
    </>
  );
};

export default Tips;
