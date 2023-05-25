import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="fs-5">
          <span class="navbar-brand mb-0 fs-4 h1">Savory Secrets</span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3">
              {/* <Link className="text-decoration-none" to="/">
                Home
              </Link>
              <Link className="text-decoration-none" to="/blog">
                Blog
              </Link> */}
            </Nav>
            <Link className="text-decoration-none" to="/login">
              <button className="btn btn-outline-primary fw-semibold fs-6">
                Login
              </button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
