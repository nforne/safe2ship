import React from "react";

export default function Signupbuttons(props) {
 
   return (
    <div className="signupbtns">
      <div>
      <button onClick={() => props.handlers.suhandler('shipper')} type="button" className="btn btn-secondary ">[ shipper ]</button>
      <i id='diffsquare' className="bi bi-square"></i>  
      <button onClick={() => props.handlers.suhandler('customer')} type="button" className="btn btn-secondary ">[ customer ]</button>
      <i id='diffsquare' className="bi bi-square"></i>  
      <button onClick={() => props.handlers.hv_handler('home')} type="button" className="btn btn-secondary ">[ <i className="bi bi-reply-all"></i> ]</button>
      </div>
    </div>
   );
 }