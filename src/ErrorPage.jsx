import React from "react";

const ErrorPage = () => {
  return (
    <div className="text-center mt-5">
      <img className="w-50" src="assets/err.jpg" />
      <h2>
        {" "}
        <i class="fa-solid fa-triangle-exclamation"></i> PAGE NOT FOUND
      </h2>
    </div>
  );
};

export default ErrorPage;
