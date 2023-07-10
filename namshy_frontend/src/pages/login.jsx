import {React, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import "../components/section/slider.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as user from '../api/user'
import logo from '../images/logo.jpg'
import {Cookies} from 'react-cookie'
import { NavBar } from "../components/Navs/Nav1";

export default function Login() {
    const cookie = new Cookies()

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const emailRef = useRef(null); 
    const passwordRef = useRef(null);

    const signup = () => {
        navigate("/signup", {replace: true});
    };

    const logIn = async () => {
        setLoading(true);
        cookie.remove("Auth")
        await user.login({email:emailRef.current.value,password:passwordRef.current.value}).then( async(res)=>{
          const message = res.data.message;
          
          if(message === 'Login Successful!'){
            setLoading(false);
            cookie.set("Auth", "Bearer " + res.data.token);
            navigate('/', {replace: true});
          }else if(message === "Id or password is invalid"){
            toast.warning(message, {
                position: toast.POSITION.TOP_RIGHT
            })
            setLoading(false);
          }else{
            setLoading(false);
          }
        }).catch((error) => {
            setLoading(false);
        })
      };
      

    return (
        <div>
             <NavBar visible={false}></NavBar>
        <div
        className="login"
        style={login}
        >
            <div className="" style={{flexDirection: "column", height: "fit-content", width: "80vw", justifyContent: "center", alignItems: "center", display:"flex"}}>
            <img src={logo} alt="logo" height={"100px"} width={"200px"}/>
            <h4>Log In</h4>
            <input
            ref={emailRef}
                    style={inputText}
                    placeholder="E-mail"
                    type="email"
                />
                <input
                ref={passwordRef}
                style={inputText}
                placeholder="password"
                type="password"
                />
                {!loading && <button onClick={logIn} style={loginButton}>
                    Login
                </button>}
                {loading && <button style={loginButton2} disabled>
                    Login...
                </button>}
                <div className="haveAccount" style={{marginTop: "20px"}}>
                    <>Don't have an account?</>
                    <span className="buttonSign" style={{color: "rgb(0, 111,255", cursor: "pointer"}} onClick={signup}>
                    Sign up
                    </span>
                </div>
            </div>
            <ToastContainer />
        </div>
        </div>
    );
}

const login = {
    position: "relative",
    top: "60px",
    backgroundColor: "#e7e7e7",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    height: "calc(100vh - 60px)"
};

const inputText = {
    border: "1px solid #000",
    borderRadius: "15px",
    width: "50%",
    padding: "10px",
    marginTop: "20px"
}

const loginButton = {
    marginTop: "20px",
    border: "none",
    backgroundColor: "rgb(0, 111, 225)",
    width: "40%",
    color: "#fff",
    padding: "10px",
    borderRadius: "15px",
}

const loginButton2 = {
    marginTop: "20px",
    border: "none",
    backgroundColor: "rgb(0, 111, 225)",
    width: "40%",
    color: "#fff",
    padding: "10px",
    borderRadius: "15px",
}