import React from "react";
import { useState } from "react";
import axios from 'axios';

import Scrollup from "../../scollup";
import Logo1 from "../../nav/logo.jpg";
import Pending from "../../home/pending";
import '../signUp/signUp.css'

export default function SignIn(props) {

  const info_init = {email:'', password:''}; 
  
  const [sistate, setSistate] = useState({
    info:{...info_init}, 
    view: 'signIn'
  })

  const signfo_handler = (key, value) => {
    setSistate(prev => {
      const updating = {...prev};
      updating.info[key] = value;
      return updating});
  }

  const signv_handler = (view) => {
    setSistate(prev => ({...prev, view: view }))
  }

  const signputFormValidation = () => {
    return true //---------------------------------
  }
  const handleSubmit = (info, event) => {
    event.preventDefault();
    if (signputFormValidation(info)) {
      axios.get('/api/users', {user: info})
        .then(userinfo => {
          setSistate(prev => ({...prev, info: {...info_init} }));
          //switch to user view with userinfo.rows and set it to state // or pks queue view
        })
        .catch((error) => props.errorHandler('Oop! Something went wrong. Please Consider trying again shortly!'))

    } else {
      props.errorHandler('Oops! Something is missing or missentered. Please verify and make sure of the right information and resubmit. Thank you!')
    }

  }

   return (
     <div>
       {sistate.view === 'pending' &&  <Pending/>}
       { sistate.view === 'signIn' && 
      

      <div>

      
            <div>
            <img src={Logo1} id="homelogoimg" className="rounded rounded-pill img-fluid" alt={"logo"}/>
            </div>
          <hr />
            <button onClick={() => props.hhandler('')} type="button" className="btn btn-secondary ">[ <i className="bi bi-reply-all"></i> ]</button>
            <hr />
        <div className="userform">
          <div>
            <form  onSubmit={(e) => handleSubmit(sistate.info, e)}>
              <fieldset >
              
                  <p>
                    <label className="form-group row" htmlFor="email">Email:</label>
                    <input type="email" name='email' id="email" placeholder="test@example.com"/>
                  </p>
                  
                  <p>
                    <label className="form-group row" htmlFor="password">Password:</label>
                    <input type="password" name='password' id="password" placeholder="x42x58s5d4s898"/>
                  </p>
              
              </fieldset>
    
                <label htmlFor="formSubmitButton"></label>
                <input type="submit"  name="formSubmitButton" className="btn btn-secondary " onClick={() => signv_handler('pending')}/>
            </form>
            <hr />
          </div>
          <Scrollup/> 
        </div>
      
        </div>
      }

     </div>

  );

 }