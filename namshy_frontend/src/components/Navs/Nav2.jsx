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
          <Nav.Link className="text-dark " href="/newarrivals">
            New arrivals
          </Nav.Link>
          <Nav.Link className="text-dark " href="/clothing">
            clothing
          </Nav.Link>
          <Nav.Link className="text-dark " href="/shoes">
            shoes
          </Nav.Link>
          <Nav.Link className="text-dark " href="/bags">
            Bags
          </Nav.Link>
          <Nav.Link className="text-dark " href="/accessories">
            accessories
          </Nav.Link>
          <Nav.Link className="text-dark " href="/grooming">
            grooming
          </Nav.Link>
          <Nav.Link className="text-dark " href="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-dark " href="/sport">
            sport
          </Nav.Link>
          <Nav.Link className="text-dark " href="/premium">
            Premium
          </Nav.Link>
          <Nav.Link className="text-dark " href="/brand">
            Brand
          </Nav.Link>
          <Nav.Link className="text-dark " href="/gifts">
            Gifts
          </Nav.Link>
          <Nav.Link className="text-dark " href="/sale">
            Sale
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
}
