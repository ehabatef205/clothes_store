import React from "react";
import profileholder from "../images/profileholder.svg"
import navarrow from "../images/navarrow.svg"
import rewardsicon from "../images/rewardsicon.svg"
import ordersicon from "../images/ordersicon.svg"
import returnicon from "../images/returnicon.svg"
import creditcards from "../images/creditcards.svg"
import "./Profile.css";
import ProfileInfo from "../components/profilecontainer/ProfileInfo"

import Returns from "../components/profilecontainer/returns"
import Orders from "../components/profilecontainer/orders"
import Credit from "../components/profilecontainer/cedit";
import { NavBar } from "../components/Navs/Nav1";
import * as user from '../api/user'



function Profile({path,update_p, personal}) {
  const [subpages,setsubpages]=React.useState([
    (<ProfileInfo />),
    (<Returns/>),
    (<Orders/>),
    (<Credit/>)
  ])
  const [userdata,setUserData]=React.useState({})
  React.useEffect(() => {
    user.view_profile().then(data=>{
      setUserData(data.respone)
      setsubpages(([
        (<ProfileInfo Uinfo={data.respone}/>),
        (<Returns/>),
        (<Orders/>),
        (<Credit/>)
      ]))
    }) 
  },[])


  return (
    <div> 
      <NavBar visible={false}update_p={update_p} personal={personal}></NavBar>
    <div className="wrapper">
      <nav className="navigation">
        <a href="/profile/">
          <div className="navmember">
            <div className="prof1">
              <div className="profpic">
                <img
                  src={profileholder}
                  alt="الملف الشخصي"
                />
              </div>
              <div className="profilenav">
                <div className="username">
                  {userdata.first_name} {userdata.last_name}
                </div>
                <div className="email">{userdata.email}</div>
              </div>
            </div>
            <div>
              <img
                src={navarrow}
                className="navarrow" alt="<<"
              />
            </div>
          </div>
        </a>
        
        <a href="/orders/">
          <div className="navmember">
            <div>
              <div className="sc-kMjNwy navicons outline-icon">
                <img
                  src={ordersicon}
                  alt="My orders"
                ></img>
              </div>
              <div className="navtext">My orders</div>
            </div>
            <div>
              <img
                src={navarrow}
                className="navarrow" alt="<<"
              />
            </div>
          </div>
        </a>
        <a href="/returns/">
          <div className="navmember">
            <div>
              <div className="sc-kMjNwy navicons outline-icon">
                <img
                  src={returnicon}
                  alt="returns"
                />
              </div>
              <div className="navtext">returns</div>
            </div>
            <div>
              <img
                src={navarrow}
                className="navarrow" alt="<<"
              />
            </div>
          </div>
        </a>
{/*       
        
        <a href="/cards/">
          <div className="navmember">
            <div>
              <div className="sc-kMjNwy navicons outline-icon">
                <img
                  src={creditcards}
                  alt="My cards"
                />
              </div>
              <div className="navtext">My cards</div>
            </div>
            <div>
              <img
                src={navarrow}
                className="navarrow" alt="<<"
              />
            </div>
          </div>
        </a> */}
        
      </nav>
      <div className="Container">
        {subpages[path]}
      </div>
    </div>
    </div>
  );
}

export default Profile;