import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";

const NavigationBar = () => {
  const {user, logOut} = useContext(AuthContext);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="fs-5">
          <span className="navbar-brand mb-0 fs-4 h1">Savory Secrets</span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3">
              <Link className="text-decoration-none" to="/">
                Home
              </Link>
              <Link className="text-decoration-none" to="/blog">
                Blog
              </Link>
              {user ? (
                user.email
              ) : (
                <Link className="text-decoration-none" to="/blog">
                  Register
                </Link>
              )}
            </Nav>
            {user ? (
              <div>
                <span className="me-3">
                  {user.photoURL ? (
                    <img src={user.photoURL} />
                  ) : (
                    <i
                      className="fa-solid fa-user bg-secondary p-2 rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={user.displayName}></i>
                  )}
                </span>
                <button
                  onClick={logOut}
                  className="btn btn-outline-primary fw-semibold fs-6">
                  LogOut
                </button>
              </div>
            ) : (
              <Link className="text-decoration-none" to="/login">
                <button className="btn btn-outline-primary fw-semibold fs-6">
                  Login
                </button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
