import React from "react";
import Header from "../shared/Header";
import {useLoaderData} from "react-router-dom";
import Chefs from "../../Chefs/Chefs";
import PopularFoods from "../../PopuparFoods/PopularFoods";

const Home = () => {
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <div>
      <Header />
      <div className="row mx-5 mt-5 pt-4 pt-md-0 mt-md-0">
        <h2 className="text-center">Our Available Chefs</h2>
        {chefs.map((chef, idx) => (
          <div className="col-lg-4 col-md-6 col-12 my-4">
            <Chefs key={idx} chef={chef} />
          </div>
        ))}
      </div>
      <PopularFoods />
    </div>
  );
};

export default Home;
