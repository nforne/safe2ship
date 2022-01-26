import React from "react";
import { useState } from "react";

import Shippersignup from "./shipperform";
import Customersignup from "./customerform";
import Button from "./buttons";
import Scrollup from "../../scollup";
// import Logo1 from "../../nav/logo.jpg";
import Logo1 from "../../nav/logo_2.svg";

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
        </div>

        <div className="form-group">
        <hr />

        <Button handlers={{suhandler: suhandler, hv_handler: props.hv_handler, view: suview.v}}/>
        <hr />
        <div>
        {suview.v === 'shipper' && <Shippersignup {...props} />}
        {suview.v === 'customer' && <Customersignup {...props} />}
        </div>
      </div>
       
      
        <hr />
      <Scrollup/>      
    </div>
   );
 }