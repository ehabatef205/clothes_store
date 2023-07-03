import React, {useState, useEffect} from "react";
import Homeslider from "../components/section/homeslider";
import { Container } from "react-bootstrap";
import Homecards from "../components/section/homecards";
import * as prod_cat from '../api/product_category'
import "../components/section/slider.css";
export default function Home() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const getCategory = async () => {
      await prod_cat.all_product_category().then(e => {
        setCategories(e.response)
      })
    }
    getCategory()
  },[])
  return (
    <div
      className="homee"
      style={{ height: "fit-content", position: "relative", top: "70px" }}
    >
      <div
        className="d-flex"
        style={{ height: "500px", justifyContent: "center" }}
      >
        <Homeslider></Homeslider>
      </div>

      <Container className="my-4  " style={{ justifyContent: "center" }}>
        <div>
          <div className="" style={{ height: "fit-content" }}>
            {categories?.map((category, index)=>(<Homecards category_id = {category._id} category_name={category.name} />))}          </div>
        </div>
      </Container>
    </div>
  );
}
