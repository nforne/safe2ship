import React from "react";
import { useState } from "react";

import Shippersignup from "./shipperform";
import Customersignup from "./customerform";
import Button from "./buttons";
import Scrollup from "../../scollup";

import './signUp.css'


export default function SignUp(props) {
 
  const [su_view, set_SUView] = useState({v:'', vtracker: []})

  const suhandler = (su_view) => {
    set_SUView(prev => ({...prev, v: su_view}));
  }
   
   return (
    <div className="signupbtns">
      <Button suhandler={suhandler}/>
      {su_view.v === 'shipper' && <Shippersignup suhandler={suhandler}/>}
      {su_view.v === 'customer' && <Customersignup suhandler={suhandler}/>}
      <Scrollup/>      
    </div>
   );
 }