import React from "react";
import editicon from"../../images/editicon.svg"
import "./styles/ProfileInfo.css";
import * as user from"../../api/user"
import {Cookies} from 'react-cookie'
import { useNavigate } from "react-router-dom";

const ProfileInfo = ({Uinfo={
  email:"test@mail.com",
  first_name:"test",
  last_name:"test",
  telephone:"01",
  username:"user"

}}) => {
  const navigate=useNavigate()

  React.useEffect(() => { 
    const cookie = new Cookies()
    const token = cookie.get('Auth')
    if (!token){
      navigate('/login')
    }
   },[])

  const [username]=React.useState(Uinfo.username)
  const [first_name,setFirst_Name]=React.useState(Uinfo.first_name)
  const [last_name,setLast_Name]=React.useState(Uinfo.last_name)
  const [email,setEmail]=React.useState(Uinfo.email)
  const [telephone,setTelephone]=React.useState(Uinfo.telephone)
  React.useEffect(() => { 
    setTelephone(Uinfo.telephone)
    setFirst_Name(Uinfo.first_name)
    setLast_Name(Uinfo.last_name)
    setEmail(Uinfo.email)
   },[Uinfo])

  const HandelUpdate=async()=>{
   await user.update_profile({first_name, last_name, telephone}).then(()=>{
    window.location.reload(false);
    })
  }
  const logout=()=>{
    const cookie = new Cookies()
    cookie.remove('Auth')
    navigate('/men')
  }

return( 
    
    <div >
    <div className="HEAD">
      <div className="headtext">{username}</div>
    </div>
    
    <div className="Settings">
      <div className="holder">
        <div className="infogridholder">
          <div  style={{width: "100%"}}>
            <div className="infogrid">
              <div className="infofeild">
                <label  className="input-label">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  id="firstName"
                  value={first_name}
                  onChange={(e)=>{setFirst_Name(e.target.value)}}
                />
              </div>
              <div className="infofeild">
                <label  className="input-label">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  id="lastName"
                  value={last_name}
                  onChange={(e)=>{setLast_Name(e.target.value)}}
                />
              </div>
              
              
              <div className="infofeild">
                <label  className="input-label">
                  E-mail
                </label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  disabled={true}
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>
              <div className="infofeild">
                <label  className="input-label">
                Phone

                </label>
                <input
                  onChange={(e)=>{setTelephone(e.target.value)}}
                  name="telephone"
                  type="text"
                  id="telephone"
                  value={telephone}
                />
              </div>
            </div>
            <div>
              <button onClick={()=>{HandelUpdate()}} className="updatebutton">
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="reset">
          <p>Update Password ?</p>
          <button type="button" className="resetbutton">
            Change password
          </button>
        </div>
        
        <div>
          <div className="MySizesCard" >
            <div className="AccountCard Card">
              <div className="AccountCard__title">
                <strong>My sizes</strong>
                <button className="Button Button--account ">
                  <img src={editicon} />
                </button>
              </div>
              <div className="AccountCard__children">
                <div className="MySizeCard__content">
                  <div className="MySizeCard__item">
                    <span>Top :</span>
                    <span>6</span>
                  </div>
                  <div className="MySizeCard__item">
                    <span>Pants & Shorts:</span>
                    <span>XS</span>
                  </div>
                  <div className="MySizeCard__item">
                    <span>Shoe:</span>
                    <span>2.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="settingsButtonBar">
      <button className="Button Button--greenTransparent ">
        <strong>Delete my ACCOUNT</strong>
      </button>
      <button className="Button Button--greenFilled " onClick={()=>{logout()}}>
        <strong>Log out</strong>
      </button>
    </div>
  </div>
)};
export default ProfileInfo;
