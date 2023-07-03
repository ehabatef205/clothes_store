import React from "react";
import "./Nave.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
export function Nav2() {
  return (
    <div>
      <Container className="d-flex justify-content-evenly nav2 w-100">
        <Nav className="me-auto text-dark ">
          <Nav.Link className="text-dark " href="#home">
            New arrivals
          </Nav.Link>
          <Nav.Link className="text-dark " href="/page1">
            clothing
          </Nav.Link>
          <Nav.Link className="text-dark " href="#pricing">
            shoes
          </Nav.Link>
          <Nav.Link className="text-dark " href="#home">
            Bags
          </Nav.Link>
          <Nav.Link className="text-dark " href="#features">
            accessories
          </Nav.Link>
          <Nav.Link className="text-dark " href="#pricing">
            grooming
          </Nav.Link>
          <Nav.Link className="text-dark " href="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-dark " href="#features">
            sport
          </Nav.Link>
          <Nav.Link className="text-dark " href="#pricing">
            Premium
          </Nav.Link>
          <Nav.Link className="text-dark " href="#home">
            Brand
          </Nav.Link>
          <Nav.Link className="text-dark " href="#features">
            Gifts
          </Nav.Link>
          <Nav.Link className="text-dark " href="#pricing">
            Sale
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
}
