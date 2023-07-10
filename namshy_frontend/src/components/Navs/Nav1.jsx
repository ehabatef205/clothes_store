import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Router, Route, Routes } from "react-router-dom";
import Page1 from "../../pages/page1";
import "./NavBar.css";
import logo from "../../images/logo.jpg";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Nav2 } from "./Nav2";

// import logo from '../../images/logo.png'

import { useNavigate } from "react-router-dom";

export function NavBar({visible = true}) {
  const currentpage = window.location.pathname.split('/')[1];
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleLinkClick = (href) => {
    
    navigate(href);
  };

  const linkStyle = {
    padding: "0.5rem 2.1rem",
    borderRight: "1px solid white",
  };

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
            <a style={{ paddingLeft: "2%" }} href={"/profile"}>
              <AccountCircleOutlinedIcon style={{ color: "#fff" }} />
            </a>
            <a
              style={{ paddingLeft: "2%" }}
              onClick={() => {
                navigate("/Bag");
              }}
            >
              <ShoppingBagOutlinedIcon style={{ color: "#fff" }} />
            </a>
            <a href={"/favorites"} style={{ paddingLeft: "2%" }}>
              <FavoriteBorderOutlinedIcon style={{ color: "#fff" }} />
            </a>

            <div style={container}>
              <div style={{ color: "#fff" }}>
                <SearchOutlinedIcon style={{ color: "#000" }} />
              </div>
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
            <div className="hell" style={{width:"50%",display:"flex",flexDirection:"row" ,overflowY:"auto"}}>
              <div
                href="/premiumCategory"
                style={{
                  ...linkStyle,
                  background:
                    currentpage === "premiumCategory"
                      ? "white"
                      : "transparent",
                  color:
                    currentpage === "premiumCategory"
                      ? "black"
                      : "white",
                }}
                onClick={() => handleLinkClick("/premiumCategory")}
              >
                Premium
              </div>
              <div
                href="/kids"
                style={{
                  ...linkStyle,
                  background:
                    currentpage === "kids"
                      ? "white"
                      : "transparent",
                  color:
                    currentpage === "kids" ? "black" : "white",
                }}
                onClick={() => handleLinkClick("/kids")}
              >
                Kids
              </div>
              <div
                href="/beauty"
                style={{
                  ...linkStyle,
                  background:
                    currentpage === "beauty"
                      ? "white"
                      : "transparent",
                  color:
                    currentpage === "beauty" ? "black" : "white",
                  whiteSpace: "nowrap",
                }}
                onClick={() => handleLinkClick("/beauty")}
              >
                Beauty
              </div>
              <div
                href="/"
                style={{
                  ...linkStyle,
                  background:
                    currentpage === "men"
                      ? "white"
                      : "transparent",
                  color:
                    currentpage === "men"
                      ? "black"
                      : "white",
                }}
                onClick={() => handleLinkClick("/men")}
              >
                Men
              </div>
              <div
                href="/women"
                style={{
                  ...linkStyle,
                  background:
                    currentpage === "women"
                      ? "white"
                      : "transparent",
                  color:
                    currentpage === "women" ? "black" : "white",
                  whiteSpace: "nowrap",
                }}
                onClick={() => handleLinkClick("/women")}
              >
                Women
              </div>
            </div>
            <Navbar.Brand>
              
                <div 
                    onClick={() => {
                      navigate("/", { replace: true });
                    }}
                    height={"100%"}
                    width={"60px"}
                    style={{display:"flex", marginRight: "10px",color:"white" }}
                  >
                    <img src={logo} style={{height:"50px"}}></img>
                </div>
            </Navbar.Brand>
          </Nav>
        </Container>
      </div>
      {visible && <Nav2 current_page={currentpage + '/'}></Nav2>}
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

