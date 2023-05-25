import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

const PopularFoods = () => {
  return (
    <div className="my-5 text-center">
      <h2>Turkish Popular Foods</h2>
      <Container>
        <Row className="gap-4 my-5 justify-content-center">
          <Card style={{width: "18rem"}}>
            <Card.Img
              variant="top"
              className="py-3"
              src="/assets/Baklava.png"
            />
            <Card.Body>
              <Card.Title>Baklava</Card.Title>
              <Card.Text>
                Baklava is a layered pastry dessert made of filo pastry, filled
                with chopped nuts, and sweetened with syrup or honey.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{width: "18rem"}}>
            <Card.Img
              variant="top"
              className="py-3"
              src="/assets/Doner-Kabab.jpg"
            />
            <Card.Body>
              <Card.Title>Doner Kabab</Card.Title>
              <Card.Text>
                Doner kebabs are made from slices of marinated meat, which are
                placed on a large skewer and roasted while rotating.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{width: "18rem"}}>
            <Card.Img
              variant="top"
              className="py-3"
              src="/assets/Lahmacun.jpg"
            />
            <Card.Body>
              <Card.Title>Lahmacun</Card.Title>
              <Card.Text>
                Lahmacun is a flatbread topped with minced meat (most commonly
                beef or lamb), minced vegetables, and herbs
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{width: "18rem"}}>
            <Card.Img variant="top" className="py-3" src="/assets/meze.jpg" />
            <Card.Body>
              <Card.Title> Mezee</Card.Title>
              <Card.Text>
                Meze is a selection of small dishes served as appetizers in the
                Turkey...
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default PopularFoods;
