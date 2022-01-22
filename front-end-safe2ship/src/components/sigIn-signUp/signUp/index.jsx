import React from "react";
import { useState } from "react";

import Shippersignup from "./shipperform";
import Customersignup from "./customerform";
import Button from "./buttons";
import Scrollup from "../../scollup";
import Logo1 from "../../nav/logo.jpg";

import './signUp.css'


export default function SignUp(props) {
 
  const [suview, setSuview] = useState({v:'', vtracker: []})

  const suhandler = (suview) => {
    setSuview(prev => ({...prev, v: suview}));
  }
   
   return (
    <div className="signupbtns">
      <div>
          <img src={Logo1} id="homelogoimg" className="rounded rounded-pill img-fluid" alt={"logo"}/>
        <hr />
        <div className="form-group">

        <Button suhandler={{suhandler: suhandler, hhandler: props.hhandler}}/>
        <hr />
        <div>
        {suview.v === 'shipper' && <Shippersignup suhandler={suhandler} errorHandler={props.errorHandler}/>}
        {suview.v === 'customer' && <Customersignup suhandler={suhandler} errorHandler={props.errorHandler}/>}
        </div>
        <hr />
      </div>
      <i id='diffsquare' className="bi bi-square"></i>  
        </div>
        <hr />
      <Scrollup/>      
    </div>
   );
 }