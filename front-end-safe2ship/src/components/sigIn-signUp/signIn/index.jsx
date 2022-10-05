import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import Scrollup from "../../scollup";
import Logo1 from "../../nav/logo.jpg";
// import Logo1 from "../../nav/logo_2.png";
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

  useEffect(() => {
    setSistate(prev => ({...prev, info: {...info_init} })); 
  }, []);

  // const pollQueue = (pollKeys) => {

  //   setInterval(() => {
  //     axios.post('/api/users/signin', {...pollKeys})
  //         .then(user => {
  //           props.sortUser(user.data);  
  //         })
  //         .catch(err => console.log(err)) //------------------------------------------------
  // } ,5000);

  // };


  const pollKeys = {}

  const handleSubmit = (info, event) => {
    event.preventDefault();
    props.hv_handler('pending')
    if (signputFormValidation(info) === 'good!') {
      axios.post('/api/users/signin', {...info})
        .then(user => {
          props.sortUser(user.data);
          props.setUser(prev => ({...prev,  ...user.data }))
          
          // switch to user view with userinfo.rows and set it to state // or pks queue view
          user.data.user[0].status === 'customer' ? props.hv_handler('customerHome') : props.hv_handler('shipperHome');
          // Promise.all([pollQueue({...pollKeys})]) // polling ...

          console.log('this important data ===>', user.data) //---------------------------------
          //switch to user view with userinfo.rows and set it to state // or pks queue view
                    
        })
        .catch((error) => {
          props.hv_handler('home');
          props.errorHandler('Oop! Something went wrong. Please Consider trying again shortly!');
        })

    } else {
      props.hv_handler('home');
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

            <hr />
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
                <input type="submit"  name="formSubmitButton" className="btn btn-secondary btn-lg" onClick={() => console.log('signing In...')}/>
            </form>
          </div>
        </div>
          <hr />
          <button onClick={() => props.hv_handler("home")} type="button" className="btn btn-secondary btn-lg back-button"><i class="bi bi-reply-all"></i></button>
          <hr />
      </div>
      </div>
        </div>
      <Scrollup/> 
     </div>

  );

 }