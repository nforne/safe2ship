import React from "react";

import Button from "./Button";
import Logo1 from "../nav/logo.jpg";
import Default from './default.jpg'

import "./home.css";

export default function Home(props) {
   

   return (
    <div className="homebtns">
       <img src={Logo1} id="homelogoimg" className="rounded rounded-pill img-fluid" alt={"logo"}/>
       <div style={{hieght: '15%',}}>
          <h1 id="welcome-msg">Welcome!</h1>
          <Button hv_handler={props.hv_handler}/>
       </div>
       <hr />
       <img style={{borderRadius: '10px'}}src={Default} alt={"default"}/>
       <hr />
        <div className="hometx-span">
          <hr />
          <span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          </span>
          <div>
            <hr />
            <span>External Links</span>
            <hr />
          </div>
        </div> 
    </div>
   );
 }
