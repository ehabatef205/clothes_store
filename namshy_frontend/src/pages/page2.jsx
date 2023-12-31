import React, { useEffect } from "react";
import "../components/section/Section.css";
import { SearchSlider } from "../components/section/SearchSlider";
import FirstHeader from "../components/section/FirstHeader";
import SecHeader from "../components/section/SecHeader";
import Sider from "../components/section/Sider";
import Header from "../components/Navs/Header";
import * as sub_cat from "../api/subcategory";
import FilterRep from "../components/section/FilterRep";

export default function Page1({ update_p, personal }) {
  const [category, setCategory] = React.useState({});
  const [Subcategory, setSubCategory] = React.useState({});
  const query = decodeURIComponent(window.location.pathname.split("/")[2]);
  const sub = window.location.pathname.split("/")[3];
  useEffect(() => {
    const getCategory = async () => {
      await sub_cat.get_product_category_by_id(sub).then((e) => {
        setSubCategory(e);
      });
    };
    getCategory();
  }, []);
  const [coloractive, setcoloractive] = React.useState(false)
  const [priceactive, setpriceactive] = React.useState(false)
  const [dateactive, setdateactive] = React.useState(false)
  const [colorfilter, setColorFilter] = React.useState([])
  const [datefilter, setdatefilter] = React.useState("")
  const handleColorChange = (color) => {
    console.log(color)
    if (colorfilter.includes(color)) {
      setColorFilter(colorfilter.filter(c => c !== color));
    } else {
      setColorFilter([...colorfilter, color]);
    }
  };
  const [pricefilter, setpricefilter] = React.useState([])
  const handlepriceChange = (price) => {
    console.log(price)
    if (pricefilter.includes(price)) {
      setpricefilter(pricefilter.filter(c => c !== price));
    } else {
      setpricefilter([...pricefilter, price]);
    }
  };

  return (
    <div className="sub_cat ">
      <Header visible={false} update_p={update_p} personal={personal} />
      <div
        className="section_container d-flex  flex-wrap justify-content-center align-content-center"
        style={{ position: "relative", top: "70px" }}
      >
        <div className="sectionone d-flex flex-wrap">
          <div className="w-100 ">
            <FirstHeader query={query} />
          </div>

          <div
            className="w-100 "
            style={{ height: "75px", textalign: "center" }}
          >
            {" "}
          </div>

          <div className="d-flex flex-row w-100 ">
            <div
              className="filter"
              style={{ width: "20%", marginLeft: "5%" }}
            >
              <Sider handleColorChange={handleColorChange} colorfilter={colorfilter} pricefilter={pricefilter} handlepriceChange={handlepriceChange}
                coloractive={coloractive} priceactive={priceactive} setcoloractive={setcoloractive} setpriceactive={setpriceactive}
                datefilter={datefilter} dateactive={dateactive} setdatefilter={setdatefilter} setdateactive={setdateactive} />
            </div>
            <div
              style={{ height: "100%", width: "75%" }}
              className="w-100 w-lg-auto"
            >
              {/* <div className="w-100  " style={{ "max-height": "10%" }}>
                <SecHeader />
              </div> */}
              <div className=" filterrep " >
                <button
                  data-bs-toggle="offcanvas"
                  data-bs-target="#filter"
                  aria-controls="offcanvasRight"
                  className="w-50 btn btn-outline-secondary my-3 "
                >filter <i className=" mx-2 bi bi-filter-square "></i>
                </button>
              </div>
              <div className=" cards w-100 ">
                <SearchSlider query={query}
                  dateactive={dateactive} datefilter={datefilter}
                  colorfilter={colorfilter} pricefilter={pricefilter} coloractive={coloractive} priceactive={priceactive} update_p={update_p} personal={personal}>
                </SearchSlider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FilterRep handleColorChange={handleColorChange} colorfilter={colorfilter} pricefilter={pricefilter} handlepriceChange={handlepriceChange}
        coloractive={coloractive} priceactive={priceactive} setcoloractive={setcoloractive} setpriceactive={setpriceactive}
        datefilter={datefilter} dateactive={dateactive} setdatefilter={setdatefilter} setdateactive={setdateactive} > </FilterRep>
    </div>
  );
}
