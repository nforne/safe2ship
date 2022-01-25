import React from "react";
import { useState } from "react";
import axios from 'axios';

import Scrollup from "../../scollup";
// import Logo1 from "../../nav/logo.jpg";
import Logo1 from "../../nav/logo_2.png";
import './signIn.css'
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

  const signputFormValidation = (signfo) => {
    if (signfo.email === '' || signfo.email.split('').includes(' ')) return 'Enter your email, without spaces!';
    if (signfo.password === '' || signfo.password.split('').includes(' ')) return 'Enter a password, without spaces!';
    return 'good!'; //------------------------------------------
  }
  const handleSubmit = (info, event) => {
    event.preventDefault();
    props.hv_handler('pending')
    if (signputFormValidation(info) === 'good!') {
      axios.post('/api/users/signin', {...info})
        .then(user => {
          console.log(user.data) //---------------------------------
          setSistate(prev => ({...prev, info: {...info_init} })); //raise state with info from here for access ot other resources
          //switch to user view with userinfo.rows and set it to state // or pks queue view
        })
        .catch((error) => props.errorHandler('Oop! Something went wrong. Please Consider trying again shortly!'))

    } else {
      props.errorHandler(`Oops! Something is missing or missentered: ${signputFormValidation(info)}. Please verify and make sure of the right information and resubmit. Thank you!`)
    }

  }

   return (

      <div className="form-group ">

            <div>
            <img src={Logo1} id="homelogoimg" className="rounded rounded-pill img-fluid" alt={"logo"}/>
            </div>

            <div>


            <div className="signin">
            
            <div>


        <div className="userform">
          <div>
            <form  onSubmit={(e) => handleSubmit(sistate.info, e)}>
              <fieldset >
              
                  <p>
                    <label className="form-group row" htmlFor="email">Email:</label>
                    <input type="email" name='email' id="email" onChange={(e) => signfo_handler('email', e.target.value)} placeholder="test@example.com"/>
                  </p>
                  
                  <p>
                    <label className="form-group row" htmlFor="password">Password:</label>
                    <input type="password" name='password' id="password" onChange={(e) => signfo_handler('password', e.target.value)} placeholder="x42x58s5d4s898"/>
                  </p>
              
              </fieldset>
    
                <label className="form-group row" htmlFor="formSubmitButton"></label>
                <input type="submit"  name="formSubmitButton" className="btn btn-primary btn-lg" onClick={() => console.log('signing In...')}/>
            </form>
          </div>
        </div>
        
        <div>
          <hr />
          <button onClick={() => props.hv_handler("home")} type="button" className="btn btn-primary btn-lg back-button"><i class="bi bi-arrow-left-square-fill"></i></button>
        </div>
      </div>
      </div>
        </div>
      <Scrollup/> 
     </div>

  );

 }