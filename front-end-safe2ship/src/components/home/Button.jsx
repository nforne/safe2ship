import React from "react";

export default function Button(props) {
   
 
   return (
    <div className="homebtns">
        <div>
          <button type="button" onClick={() => props.hv_handler("signIn")} className="btn btn-primary"><h1>Login</h1></button>
          <hr />
          <button type="button" onClick={() => props.hv_handler("signUp")} className="btn btn-primary"><h1>Sign up</h1></button>
        </div>
    </div>
   );
 }
