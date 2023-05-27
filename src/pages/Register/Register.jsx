import React, {useState} from "react";
import {useContext} from "react";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {createUser, updateUserData} = useContext(AuthContext);

  const handleRegister = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserData(user, name, photoURL);
        navigate("/login");
        setSuccess("Account Has Created Successfully");
      })
      .catch((err) => {
        setError(err.message);
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
      <Form.Text className="text-danger">{error}</Form.Text>
      <Form.Text className="text-success">{success}</Form.Text>
    </Container>
  );
};

export default Register;
