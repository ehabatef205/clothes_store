import { useReactMediaRecorder } from "react-media-recorder-2";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import logoo from "../../images/logoo.png";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { Nav2 } from "./Nav2";
import * as prod_cat from "../../api/product_category";
import { searchProduct } from "../../api/product";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";
import { backend_url } from "../../config";
const proxy = `${backend_url}/external/speech`;

export function NavBar({ visible = true }) {
  const [language] = React.useState("en-US");
  const [categories, setCategories] = useState([]);

  const [isActive, setIsActive] = React.useState(false);
  const { startRecording, stopRecording, mediaBlobUrl, clearBlobUrl } =
    useReactMediaRecorder({
      video: false,
      audio: true,
      echoCancellation: true,
    });

  const speechToText = async () => {
    const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
    var reader = new FileReader();
    reader.readAsDataURL(audioBlob);
    reader.onloadend = function () {
      var base64String = reader.result;
      var splited = base64String.substr(base64String.indexOf(",") + 1);
      axios
        .post(proxy, { audiofile: splited, languageCode: language })
        .then((res) => {
          setQuery(res.data);
          console.log(res.data);
        });
    };
  };
  React.useEffect(() => {
    const getCategory = async () => {
      await prod_cat.all_product_category().then((e) => {
        setCategories(e.response);
      });
    };

    const setq = async () => {
      if (window.location.pathname.split("/")[1] === "search") {
        const q = window.location.pathname.split("/")[2]
        setQuery(q)
      }
    };
    getCategory();
    setq()
  }, []);
  React.useEffect(() => {
    if (mediaBlobUrl) {
      speechToText();
    }
  }, [mediaBlobUrl]);
  const currentpage = window.location.pathname.split("/")[2];
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const [items, setItems] = useState([]);
  useEffect(() => {
    if (query === "") setItems([]);
    else if ((window.location.pathname.split("/")[1] === "search" && window.location.pathname.split("/")[2] === query)) setItems([]);
    else {
      searchProduct(query).then((e) => {
        setItems(e.data.response);
      });
    }
  }, [query]);

  const handleLinkClick = (href, name) => {
    navigate(href, { state: { name: name } });
    window.scrollTo(0, 0)
  };
  const profileElements = ["profile", "orders", "returns"]

  const linkStyle = {
    padding: "0.5rem 2.1rem",
    borderRight: "1px solid white",
  };

  const cookie = new Cookies();

  return (
    <div>
      <div
        style={{
          height: "60px",
          width: "100%",
          backgroundColor: "rgb(0, 0, 0)",
        }}
      >
        <Container fluid className="px-0">
          <Nav
            className="me-auto hider"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <a style={{ paddingLeft: "2%", textDecoration: "none" }} href={"/profile"}>
              <i style={{

                color:
                  profileElements.includes(window.location.pathname.split("/")[1]) ? "#d99d2b" : "white", fontSize: "1.5rem"
              }} className="navhover navclick bi bi-person-circle" />
            </a>
            <a
              style={{ paddingLeft: "2%", textDecoration: "none" }}
              href="/bag"
            >
              <i style={{
                color:
                  window.location.pathname.split("/")[1] === 'bag' ? "#d99d2b" : "white", fontSize: "1.5rem"
              }}
                className="navhover navclick bi bi-handbag">
                <b style={{ borderRadius: "50px", width: "fit-content", fontSize: "1rem", position: "relative", right: "15px", bottom: "20px" }}
                  className=" bg-success-subtle ">
                  <span className='mx-2 text-dark'>
                    2</span></b></i>  </a>
            <a
              onClick={() => {
                navigate("/favorites");
                window.scrollTo(0, 0)
              }}
              style={{ paddingLeft: "2%", cursor: "pointer", textDecoration: "none" }}
            >
              <i style={{ color: window.location.pathname.split("/")[1] === 'favorites' ? "#d99d2b" : "white", fontSize: "1.5rem" }}
                className="navhover navclick bi bi-heart">
                <b style={{ borderRadius: "50px", width: "fit-content", fontSize: "1rem", position: "relative", right: "15px", bottom: "20px" }}
                  className=" bg-danger-subtle ">
                  <span className='mx-2 text-dark'>
                    2</span></b>
              </i>
            </a>

            <div style={container}>
              <div style={{ color: "#fff" }}>
                <SearchOutlinedIcon className="search-icon" style={{ color: "#000" }} onClick={() => {
                  if (query !== "") {
                    var reloader = window.location.pathname.split("/")[1] === "search"
                    navigate(`/search/${query}`)

                    if (reloader)
                      window.location.reload()

                  }
                }} />
              </div>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: isActive ? "red" : "black",
                }}
                onClick={() => {
                  if (!isActive) {
                    clearBlobUrl();
                    startRecording();
                  } else {
                    stopRecording();
                  }

                  setIsActive(!isActive);
                }}
              >
                <KeyboardVoiceIcon className="icon" />
              </button>
              <input
                style={{
                  color: "#000",
                  border: "none",
                  outline: "none",
                  textAlign: "right",
                  background: "#fff",
                  borderRadius: "25px",
                  width: "100%",
                }}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>
            {/* <div href={"#cart"} style={{marginLeft:'3%'}} onClick={() => setShow(false)}><ShoppingBagOutlinedIcon /></div>  */}
            <div
              className="hell"
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "row",
                overflowY: "auto",
              }}
            >
              {categories.map((category, index) => (
                <div
                  key={index}
                  href={"/cat/" + category.name}
                  style={{
                    ...linkStyle,
                    background:
                      currentpage === category._id ? "white" : "transparent",
                    color: currentpage === category._id ? "black" : "white",
                  }}
                  onClick={() =>
                    handleLinkClick("/cat/" + category._id, category.name)
                  }
                  className="navhover navclick"
                >
                  {category.name}
                </div>
              ))}
            </div>
            <Navbar.Brand>
              <div
                onClick={() => {
                  navigate("/", { replace: true });
                }}
                height={"100%"}
                width={"90px"}
                style={{ display: "flex", marginRight: "20px", color: "white" }}
              >
                <img
                  src={logoo}
                  style={{ height: "70px", width: "100px", cursor: "pointer" }}
                ></img>
              </div>
            </Navbar.Brand>
          </Nav>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
            }}
          >
            <div
              className="list-group"
              style={{
                width: "40vw",
                marginTop: "3px",
                marginRight: "20%",
                zIndex: 9999,

              }}
            >
              {items?.map((item) => {
                return (
                  <a
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      direction: "ltr",
                    }}
                    className="list-group-item list-group-item-action"
                    key={item._id}
                    href={"/selectedproductpage/" + item._id}
                  >
                    <img
                      style={{ height: "50px", marginRight: "5px" }}
                      src={item?.imageSrc[0]}
                      alt={item.name}
                    />
                    {item.name}
                    <i style={{ position: "relative" }}>{item.price_after}</i>
                  </a>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
      {visible && <Nav2 current_page={currentpage + "/"}></Nav2>}
    </div>
  );
}
const container = {
  display: "flex",
  backgroundColor: "white",
  paddingRight: "3%",
  marginRight: "3%",
  marginLeft: "3%",
  borderRadius: 50,
};
