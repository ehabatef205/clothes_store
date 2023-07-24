import React from "react";
import "./Nave.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import * as sub_cat from '../../api/subcategory'

export function Nav2({current_page}) {
  const [categories, setCategories] = React.useState([])
  React.useEffect(() => {
    const getCategory = async () => {
      await sub_cat.all_product_category().then(e => {
        setCategories(e.response)
      })
    }
    getCategory()
  },[])

  return (
        window.location.pathname==="/"?<div></div>:
    <div className="navtwo">
      <Container className="d-flex justify-content-evenly nav2 w-100">
        <Nav className="me-auto text-dark ">
          {categories?.map((subcategory)=>(
            <Nav.Link className="text-dark  nav2hover " href={current_page + subcategory._id}>
            {subcategory.name}
          </Nav.Link>
          ))}
          
        </Nav>
      </Container>
    </div>
  );
}
