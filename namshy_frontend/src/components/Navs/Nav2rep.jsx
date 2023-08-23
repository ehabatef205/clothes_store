import React from "react";
import "./Nave.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import * as sub_cat from '../../api/subcategory'
import { useParams, useLocation } from 'react-router-dom';

function Nav2rep({ current_page }) {
 const { id } = useParams();
  const prevIdRef = React.useRef(id);
  const [categories, setCategories] = React.useState([])
  React.useEffect(() => {
    const getCategory = async () => {
      await sub_cat.get_product_category_by_id(prevIdRef.current).then(e => {
        setCategories(e.response)
      })
    }
    getCategory()
  }, [])

  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="subnav"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body">
       
     {window.location.pathname === "/" ? <div></div> :
      <div className="navtwo">
        <Container className="d-flex justify-content-evenly nav2 w-100">
          <Nav className="me-auto text-dark ">
            {categories?.map((subcategory,index) => (
              <Nav.Link key={index} className="text-dark  nav2hover " href={current_page + subcategory._id}>
                {subcategory.name}
              </Nav.Link>
            ))}

          </Nav>
        </Container>
      </div>}
      </div>
    </div>
  );
}


export default Nav2rep
