import React from "react";
import { useState } from 'react';

import Button from "./Button";
import Logo1 from "../nav/logo.jpg";


import SignIn from '../sigIn-signUp/signIn';
import SignUp from '../sigIn-signUp/signUp';


import "./home.css";

export default function Home(props) {
   
  const [hview, sethView] = useState({v:'', vtracker: []})
  const hhandler = (hview) => {
    sethView(prev => ({...prev, v: hview}))
  }

   return (
    <div className="homebtns">
      { hview.v === "" && <div>
       <img src={Logo1} id="homelogoimg" className="rounded rounded-pill img-fluid" alt={"logo"}/>
        <h1>Welcome!</h1>
        <Button hhandler={hhandler}/>
      </div> }

       {hview.v === "signIn" && <SignIn hhandler={hhandler} errorHandler={props.errorHandler}/>}
       {hview.v === "signUp" && <SignUp hhandler={hhandler} errorHandler={props.errorHandler}/>}

      { hview.v === "" && <div className="hometx-span">
        <hr />
        <span>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </span>
        <div>
          <hr />
        <span>External Links</span>
        <hr />
        </div>
      </div> }
    </div>
   );
 }
