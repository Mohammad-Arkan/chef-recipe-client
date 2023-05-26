import React from "react";
import {useLoaderData} from "react-router-dom";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Chef = () => {
  const chef = useLoaderData();
  console.log(chef);
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
        <div className="row justify-content-center gap-5 my-5">
          {recipes.map((recipe, idx) => (
            <div className="col-3 p-4 shadow-sm rounded border" key={idx}>
              <h5>Recipe: {recipe.recipe_name}</h5>
              <p>
                <span className="fw-semibold">Ingredients:</span>
                {recipe.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </p>
              <p>
                <span className="fw-semibold">Cooking Method:</span>{" "}
                {recipe.instructions}
              </p>
              <p>
                Rating: <span className="fw-semibold">{recipe.rating}</span>
              </p>
              <button className="btn btn-outline-primary">
                Add To Favorite
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chef;
