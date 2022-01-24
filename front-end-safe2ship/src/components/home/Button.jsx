import React from "react";

export default function Button(props) {
   
 
   return (
    <div className="homebtns">
      
        <div>
        <hr />

          <button type="button" onClick={() => props.hv_handler("signIn")} className="btn btn-secondary "><h1> [ Sign-In ] </h1></button>
        
        
          <hr />

          <button type="button" onClick={() => props.hv_handler("signUp")} className="btn btn-secondary "><h1>[Sign-Up]</h1></button>
          <hr />
        </div>
        
     
     
    </div>
   );
 }
