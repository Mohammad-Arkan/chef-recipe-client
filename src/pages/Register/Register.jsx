import React from "react";
import {useContext} from "react";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);

  console.log(createUser);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        const logged = result.user;
        console.log(logged);
        console.log("Account Has Created Successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Container className="w-50 mx-auto my-5 pb-5">
      <h3 className="">Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicPhotoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Photo URL" />
        </Form.Group>
        <Form.Text className="text-dark">
          Already Have an Account?{" "}
          <Link className="text-decoration-none" to="/login">
            Login
          </Link>
        </Form.Text>{" "}
        <br />
        <Button className="my-2" variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <Form.Text className="text-danger"></Form.Text>
      <Form.Text className="text-success"></Form.Text>
    </Container>
  );
};

export default Register;
