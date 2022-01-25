import React from "react";

export default function Signupbuttons(props) {
 
   return (
    <div className="signupbtns">
      <div>
      <button onClick={() => props.handlers.suhandler('shipper')} type="button" className="btn btn-primary btn-lg">Shipper </button>
      <i id='diffsquare' className="bi bi-square"></i>  
      <button onClick={() => props.handlers.suhandler('customer')} type="button" className="btn btn-primary btn-lg">Customer</button>
      <i id='diffsquare' className="bi bi-square"></i>  
      <button onClick={() => props.handlers.hv_handler('home')} type="button" className="btn btn-primary btn-lg"><i className="bi bi-arrow-left-square-fill"></i></button>
      </div>
    </div>
   );
 }