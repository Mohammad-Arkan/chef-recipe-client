import React from "react";
import Header from "../../Header/Header";
import {useLoaderData} from "react-router-dom";
import Chefs from "../../Chefs/Chefs";
import PopularFoods from "../../PopuparFoods/PopularFoods";
import Tips from "../../Tips/Tips";

const Home = () => {
  const chefs = useLoaderData();
  return (
    <div>
      <Header />
      <div className="row mx-5 mt-5 pt-4 pt-md-0 mt-md-0">
        <h2 className="text-center">Our Available Chefs</h2>
        {chefs.map((chef) => (
          <div key={chef.id} className="col-lg-4 col-md-6 col-12 my-4">
            <Chefs chef={chef} />
          </div>
        ))}
      </div>
      <PopularFoods />
      <Tips />
    </div>
  );
};

export default Home;
