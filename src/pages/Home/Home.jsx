import React from "react";
import Header from "../../Header/Header";
import {useLoaderData} from "react-router-dom";
import Chefs from "../../Chefs/Chefs";
import PopularFoods from "../../PopuparFoods/PopularFoods";
import Tips from "../../Tips/Tips";
import {Container, Row} from "react-bootstrap";
import FoodMarquee from "../../FoodMarquee/FoodMarquee";

const Home = () => {
  const chefs = useLoaderData();
  return (
    <div>
      <Header />
      <Container>
        <Row className="my-5 w-100 justify-content-center ">
          <h2 className="text-center">Our Available Chefs</h2>
          {chefs.map((chef) => (
            <div key={chef.id} className="col-lg-4 col-md-6 col-12 my-4">
              <Chefs chef={chef} />
            </div>
          ))}
        </Row>
      </Container>

      <PopularFoods />
      <Tips />
      <FoodMarquee />
    </div>
  );
};

export default Home;
