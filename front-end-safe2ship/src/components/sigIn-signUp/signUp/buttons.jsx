import React from "react";

export default function Signupbuttons(props) {
 
   return (
    <div className="signupbtns">
      <div>
      <button onClick={() => props.suhandler.suhandler('shipper')} type="button" className="btn btn-secondary ">[ shipper ]</button>
      <i id='diffsquare' className="bi bi-square"></i>  
      <button onClick={() => props.suhandler.suhandler('customer')} type="button" className="btn btn-secondary ">[ customer ]</button>
      <i id='diffsquare' className="bi bi-square"></i>  
      <button onClick={() => props.suhandler.hhandler('')} type="button" className="btn btn-secondary ">[ <i className="bi bi-reply-all"></i> ]</button>
      </div>
    </div>
   );
 }