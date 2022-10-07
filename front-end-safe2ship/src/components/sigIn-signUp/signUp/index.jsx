import React from "react";
import { useState } from "react";

import Shippersignup from "./shipperform";
import Customersignup from "./customerform";
import Button from "./buttons";
import Scrollup from "../../scrollup";
import Logo1 from "../../nav/logo.jpg";

import './signUp.css'


export default function SignUp(props) {
 
  const [suview, setSuview] = useState({v:'', vtracker: []})

  const [state, setState] = useState('off')

  const suhandler = (suview) => {
    if (state === 'off') {
      setState(prev => 'on')
      setSuview(prev => ({...prev, v: suview}));
    } else if (state === 'on') {
      setState(prev => 'off')
      setSuview(prev => ({...prev, v:''}));
    }
  }
   
   return (
    <div className="signupbtns">
        <div>
          <img src={Logo1} id="homelogoimg" className="rounded rounded-pill img-fluid" alt={"logo"}/>
        </div>

        <div className="form-u">
        <hr />

        <Button handlers={{suhandler: suhandler, hv_handler: props.hv_handler, view: suview.v}}/>
        <hr />
      {(suview.v === 'shipper' || suview.v === 'customer') && <div>
        {suview.v === 'shipper' && <Shippersignup {...props} />}
        {suview.v === 'customer' && <Customersignup {...props} />}
      </div>}
        
      </div>
       
      
        <hr />
       
      <Scrollup/>      
    </div>
   );
 }