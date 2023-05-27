import React, {useState} from "react";
import {useLoaderData} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Chef = () => {
  const chef = useLoaderData();
  const [disabled, setDisabled] = useState(false);
  const handleDisabled = () => {
    event.target.setAttribute("disabled", "");
    toast.success("The Recipe Is Your Favorite!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setDisabled(!disabled);
  };

  const {
    chef_name,
    chef_picture,
    likes,
    short_bio,
    years_of_experience,
    recipes,
  } = chef;

  return (
    <>
      <div className="d-lg-flex w-75 mx-auto align-items-center gap-3 my-5 border rounded p-3 shadow">
        <img
          width={400}
          className="rounded shadow-sm img-fluid"
          src={chef_picture}
        />
        <div className="my-4 my-md-0">
          <h4>Chef Name: {chef_name}</h4>
          <h5 className="my-2 lh-base ">Short Bio: {short_bio}</h5>
          <h5>Experience: {years_of_experience} Years</h5>
          <h5 className="my-2">Likes: {likes}</h5>
        </div>
      </div>
      <div>
        <h3 className="text-center pt-3">Available Recipes</h3>
        <div className="row justify-content-center gap-5 my-5 pb-5">
          {recipes.map((recipe, idx) => (
            <div className="col-3 p-4 shadow-sm rounded border" key={idx}>
              <h5>Recipe: {recipe.recipe_name}</h5>
              <p>
                <span className="fw-semibold">Ingredients:</span>
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </p>
              <p>
                <span className="fw-semibold">Cooking Method:</span>{" "}
                {recipe.instructions}
              </p>
              <p>
                Rating: <span className="fw-semibold">{recipe.rating}</span>
              </p>
              <button
                onClick={handleDisabled}
                className="btn btn-outline-primary">
                Add To Favorite
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chef;
