import React, {useState, useEffect} from "react";
import Homeslider from "../components/section/homeslider";
import { Container } from "react-bootstrap";
import Homecards from "../components/section/homecards";
import * as prod_cat from '../api/product_category'
import "../components/section/slider.css";
import Header from "../components/Navs/Header";
export default function Home({section}) {
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
    <div>
       <Header></Header>
        
       <div
        className="homee"
        style={{ height: "fit-content", position: "relative", top: "70px" }}
      >
        <div
          className="d-flex"
          style={{ height: "500px", justifyContent: "center", borderRadius:"50px" }}
        >
          <Homeslider></Homeslider>
        </div>

        <Container className="my-4  " style={{ justifyContent: "center" }}>
          <div>
            <div className="" style={{ height: "fit-content" }}>
              <h1 style={{display:"flex",justifyContent:"center"}}>{section}</h1>
              {categories?.map((category, index)=>(<Homecards category_id = {category._id} category_name={category.name}
              />))}          
            </div>
          </div>
        </Container>
      </div>
    </div>
    );
}
