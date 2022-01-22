import React from "react";

import Scrollup from "../../scollup";
import '../signUp/signUp.css'

export default function SignIn(props) {
   
 
   return (
    <div className="userform">
      
      <form onSubmit={'handleSubmit'}>
        <fieldset>
        
        <p>
          <label for="email">Email:</label>
          <input type="email" name='email' id="email" placeholder="test@example.com"/>
        </p>
        
        <p>
          <label for="password">Password:</label>
          <input type="password" name='password' id="password" placeholder="x42x58s5d4s898"/>
        </p>
        
      </fieldset>
          <label for="formSubmitButton">Sign-In</label>
          <input type="submit" name="formSubmitButton" value={'value'} onClick={'(e) => setName(e.target.value)'}/>
      </form>
       
    <Scrollup/> 
    </div>
   );
 }