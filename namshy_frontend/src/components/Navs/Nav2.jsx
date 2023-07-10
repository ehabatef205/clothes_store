import React from "react";
import "./Nave.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
export function Nav2({current_page}) {
  return (
        window.location.pathname==="/"?<div></div>:
    <div>
      <Container className="d-flex justify-content-evenly nav2 w-100">
        <Nav className="me-auto text-dark ">
          <Nav.Link className="text-dark " href={current_page + "newarrivals"}>
            New arrivals
          </Nav.Link>
          <Nav.Link className="text-dark " href={current_page + "clothing"}>
            clothing
          </Nav.Link>
          <Nav.Link className="text-dark " href={current_page + "shoes"}>
            shoes
          </Nav.Link>
          <Nav.Link className="text-dark " href={current_page + "bags"}>
            Bags
          </Nav.Link>
          <Nav.Link className="text-dark " href={current_page + "accessories"}>
            accessories
          </Nav.Link>
          <Nav.Link className="text-dark " href={current_page + "grooming"}>
            grooming
          </Nav.Link>
          <Nav.Link className="text-dark " href={current_page + "sport"}>
            sport
          </Nav.Link>
          <Nav.Link className="text-dark " href={current_page + "premium"}>
            Premium
          </Nav.Link>
          <Nav.Link className="text-dark " href={current_page + "brand"}>
            Brand
          </Nav.Link>
          <Nav.Link className="text-dark " href={current_page + "gifts"}>
            Gifts
          </Nav.Link>
          <Nav.Link className="text-dark " href={current_page + "sale"}>
            Sale
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
}
