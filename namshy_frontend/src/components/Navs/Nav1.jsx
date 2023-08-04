import { useReactMediaRecorder } from "react-media-recorder-2";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import logoo from "../../images/logoo.png";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Nav2 } from "./Nav2";
import * as prod_cat from '../../api/product_category'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {backend_url} from '../../config'
const proxy = `${backend_url}/external/speech`

export function NavBar({visible = true}) {
  const [language] = React.useState("en-US");
  const [categories, setCategories] = useState([])

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
          .post(proxy,
          { audiofile: splited, languageCode: language },
         )
          .then((res) => {
            setQuery(res.data);
            console.log(res.data);
          });
      };
    };
  React.useEffect(() => {
    const getCategory = async () => {
      await prod_cat.all_product_category().then(e => {
        setCategories(e.response)
      })
    }
    getCategory()
  },[])
  React.useEffect(() => {
    if (mediaBlobUrl) {

      speechToText();
    }
  }, [mediaBlobUrl]);
  const currentpage = window.location.pathname.split('/')[2];
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleLinkClick = (href,name) => {
    
    navigate(href,{state:{name:name}});
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
              <button 
                  style={{border:"none" ,backgroundColor:"transparent",color:isActive?"red":"black"}}
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
            <div className="hell" style={{width:"50%",display:"flex",flexDirection:"row" ,overflowY:"auto"}}>
              {categories.map((category)=>(<div
                href={'/cat/'+category.name}
                style={{
                  ...linkStyle,
                  background:
                    currentpage === category._id
                      ? "white"
                      : "transparent",
                  color:
                    currentpage === category._id
                      ? "black"
                      : "white",
                }}
                onClick={() => handleLinkClick('/cat/'+category._id,category.name)}
                className="navhover navclick"
              >
                {category.name}
              </div>))}
             
            </div>
            <Navbar.Brand>
              
                <div 
                    onClick={() => {
                      navigate("/", { replace: true });
                    }}
                    height={"100%"}
                    width={"90px"}
                    style={{display:"flex", marginRight: "20px",color:"white" }}
                  >
                    <img src={logoo} style={{height:"70px",width:"100px"}}></img>
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
