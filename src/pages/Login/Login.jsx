import React, {useContext} from "react";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        console.log("Account Has Logged In Successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Container className="w-50 mx-auto my-5 pb-5">
      <h3 className="">Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
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
        <Form.Text className="text-dark">
          Dont't Have An Account?{" "}
          <Link className="text-decoration-none" to="/register">
            Create An Account
          </Link>
        </Form.Text>{" "}
        <br />
        <Button className="my-2" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Button className="my-2" variant="outline-primary" type="submit">
        <i className="fa-brands fa-google"></i> Sign-in with Google
      </Button>
      <Button className="my-2 ms-2" variant="outline-primary" type="submit">
        <i className="fa-brands fa-github"></i> Sign-in with Github
      </Button>
      <Form.Text className="text-danger"></Form.Text>
      <Form.Text className="text-success"></Form.Text>
    </Container>
  );
};

export default Login;
