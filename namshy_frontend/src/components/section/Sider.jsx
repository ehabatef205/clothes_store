import React from "react";
import "./Section.css";
import { useNavigate } from "react-router-dom";
import * as prod_cat from "../../api/product_category";

import { options, type, size } from "./prodlist";

export default function Sider(props) {
  const navigate = useNavigate();
  const handleLinkClick = (href, name) => {
    navigate(href, { state: { name: name } });
    window.scrollTo(0,0)

  };
  const [Colorarr] = React.useState([
    "red",
    "blue",
    "orange",
    "black",
    "white",
    "green",
  ]);
  const [pricearr] = React.useState([
    { text: ["<100$"], value: { price_after:{ $lt: 100 }} },
    { text: ["100$ إلى 150$ "], value: { price_after:{ $gte: 100, $lt: 150 }} },
    { text: ["150$ إلى 200$  "], value: { price_after:{ $gte: 150, $lt: 200 }} },
    { text: ["200$ إلى 300$ "], value: { price_after:{ $gte: 200, $lt: 300 }} },
    { text: ["300$ إلى 500$ "], value: { price_after:{ $gte: 300, $lt: 500 }} },
    { text: ["500$+"], value: { price_after:{ $gte: 500 }} },
  ]);
  const [datearr] = React.useState([
    { text: ["هذا الإسبوع"], value: "week" },
    { text: ["هذا الشهر"], value: "month" }
  ]);
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    const getCategory = async () => {
      await prod_cat.all_product_category().then((e) => {
        setCategories(e.response);
      });
    };
    getCategory();
  }, []);
  return (
    <div>
      <div
        className="contianer  sider1  d-flex flex-wrap "
        style={{ width: "100%" }}
      >
        <div
          className="border-bottom border-2 border-secondary w-100 col-12"
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1 d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>Catigories</b>
            </p>
          </div>

          {categories.map((category, index) => (
            <div className="change1 d-flex my-1" key={index}>
              <i
                style={{ fontSize: "11px" }}
                className="bi bi-caret-right-fill"
              ></i>
              <a
                className="link-opacity-75 text-black mx-2"
                style={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() =>
                  handleLinkClick("/cat/" + category._id, category.name)
                }
              >
                {category.name}
              </a>
            </div>
          ))}
        </div>

        <div
          className="border-bottom border-2 border-secondary w-100 "
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1  d-flex my-1  ">
            <i style={{ fontSize: "11px" }} className="bi bi-caret-down-fill"></i>
            <a
              className="change1 text-black mx-2"
              href="#"
              style={{ textDecoration: "none", fontSize: "15px" }}
            >
              price
            </a>

            <input
                      className="mx-2"
                      type="checkbox"
                      name="filter"
                      onChange={() => {props.setpriceactive(!props.priceactive)}}
                      checked={props.priceactive}
                    />
          </div>

          <div className="d-flex">
            <ul
              className="m-0"
              style={{ listStyleType: "none", padding: "0px" }}
            >
              {pricearr.map((range, index) => (
                <li className="my-1" key={index}>
                  <div className="change2" style={{ textDecoration: "none" }}>
                    <input type="checkbox" name="filter"
                    
                    onChange={() => props.handlepriceChange(range.value)}
                    checked={props.pricefilter.includes(range.value)}
                    
                    />
                    <span className="mx-2" style={{ direction: "ltr" }}>
                      {range.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border-bottom border-2 border-secondary w-100 "
          style={{ fontSize: "14px ", paddingBottom: "25px" }}
        >
          <div className="change1  d-flex my-1  ">
            <i style={{ fontSize: "11px" }} className="bi bi-caret-down-fill"></i>
            <a
              className="change1 text-black mx-2"
              href="#"
              style={{ textDecoration: "none", fontSize: "15px" }}
            >
              Color
            </a>
            <input
                      className="mx-2"
                      type="checkbox"
                      name="filter"
                      onChange={() => {props.setcoloractive(!props.coloractive)}}
                      checked={props.coloractive}
                    />
          </div>
          <div className="d-flex">
            <ul
              className="m-0 w-100"
              style={{ listStyleType: "none", padding: "0px" }}
            >
              {Colorarr.map((color, index) => (
                <li className="my-1" key={index}>
                  <div
                    className="change2 d-flex"
                    style={{
                      justifyContent: "space-between",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="d-flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <i
                        className={`bi bi-circle-fill `}
                        style={{ color: color }}
                      ></i>
                      <span className="mx-2">{color}</span>
                    </div>
                    <input
                      className="mx-2"
                      type="checkbox"
                      name="filter"
                      onChange={() => props.handleColorChange(index)}
                      checked={props.colorfilter.includes(index)}

                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border-bottom border-2 border-secondary w-100 "
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1  d-flex my-1  ">
            <i style={{ fontSize: "11px" }} className="bi bi-caret-down-fill"></i>
            <a
              className="change1 text-black mx-2"
              href="#"
              style={{ textDecoration: "none", fontSize: "15px" }}
            >
              New arrivals
            </a>

            <input
                      className="mx-2"
                      type="checkbox"
                      name="filter"
                      onChange={() => {props.setdateactive(!props.dateactive)}}
                      checked={props.dateactive}
                    />
          </div>

          <div className="d-flex">
            <ul
              className="m-0"
              style={{ listStyleType: "none", padding: "0px" }}
            >
              {datearr.map((range, index) => (
                <li className="my-1" key={index}>
                  <div className="change2" style={{ textDecoration: "none" }}>
                    <input type="checkbox" name="filter"
                    
                    onChange={() => props.setdatefilter(range.value)}
                    checked={props.datefilter===range.value}
                    
                    />
                    <span className="mx-2" style={{ direction: "ltr" }}>
                      {range.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div
          className="border-bottom border-2 border-secondary w-100 col-12"
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1 d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>header</b>
            </p>
          </div>

          {type.map((word, index) => (
            <div className="change1 d-flex my-1" key={index}>
              <i
                style={{ fontSize: "11px" }}
                className="bi bi-caret-right-fill"
              ></i>
              <a
                className="link-opacity-75 text-black mx-2"
                href="#"
                style={{ textDecoration: "none" }}
              >
                {word}
              </a>
            </div>
          ))}
        </div>

        <div
          className="border-bottom border-2 border-secondary w-100 col-12 "
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1  d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>header</b>
            </p>
          </div>
          <div className="d-flex ">
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
              veniam, soluta optio dolorem possimus nihil omnis t otam eum a
              odit laudantium, reprehenderit quae quisquam ad? Illum quis
              adipisci officiis labore! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Alias sit repellendus nulla voluptate laborum
              quas quisquam possimus praesentium fuga. Explicabo ad quae aliquam
              delectus molestiae voluptatum sapiente nulla Lorem ipsum dolor sit
              amet, consectetur adipis icing elit. Delectus illum quos omnis qui
              magnam aliquid, dolorum tempore, est officia, dolorem veniam
              cumque. Molestias neque aliquam inventore sapiente excepturi
              obcaecati ipsum? perspiciatis corporis!
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
