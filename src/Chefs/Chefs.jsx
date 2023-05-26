import React from "react";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Chefs = ({chef}) => {
  const {
    id,
    chef_name,
    chef_picture,
    likes,
    number_of_recipes,
    years_of_experience,
  } = chef;
  return (
    <Card style={{width: "18rem"}}>
      <Card.Img variant="top" src={chef_picture} />
      <Card.Body>
        <Card.Title>{chef_name}</Card.Title>
        <p className="my-2">Experience: {years_of_experience} Years</p>
        <p className="my-2">Recipes: {number_of_recipes}</p>
        <p>Likes: {likes}</p>
        <Link to={`chef/${id}`}>
          <Button variant="primary">View Recipes</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Chefs;
