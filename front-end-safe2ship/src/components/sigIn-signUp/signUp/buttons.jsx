import React from "react";

export default function Signupbuttons(props) {
   
 
   return (
    <div className="signupbtns">
      
      <button onClick={() => props.suhandler('shipper')} type="button" className="btn btn-secondary ">[ shipper ]</button>  
      <button onClick={() => props.suhandler('customer')} type="button" className="btn btn-secondary ">[ customer ]</button>  
      <button onClick={() => props.suhandler('')} type="button" className="btn btn-secondary ">[ <i class="bi bi-reply-all"></i> ]</button>
       
    </div>
   );
 }