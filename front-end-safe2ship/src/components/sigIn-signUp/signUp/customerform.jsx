import React from "react";
import { useState } from "react";
import axios from 'axios';

export default function Customersignup(props) {

  const customerInfo_init = {status:'customer',
    number_of_packages: 0, rating_sum:0, 
    total_declined: 0, system_id: "", messages: {},
    name: "", phone: "",  email: "", password: "", 
    photo: "", address: "",
    bio:"", ccard_info: {}, company_infomation: {}, 
    driving_record: {}, photo_id: "", 
    web_link: ""};

  const [cstate, setCstate] = useState({
    customerInfo: {...customerInfo_init},
    view: 'customer'
    })


  const cinfo_handler = (key, value) => {
    setCstate(prev => {
      const updating = {...prev};
      updating.customerInfo[key] = value;
      return updating});
  }

  const cv_handler = (view) => {
    setCstate(prev => ({...prev, view: view }))
  }

  const cinputFormValidation = (sinfo) => {
    return true; //------------------------------------------
  }

  const handleSubmit = (customerInfo, event) => {
    
    event.preventDefault();
    if (cinputFormValidation(customerInfo)) {
      axios.post('/api/users', {user: customerInfo})
        .then(userinfo => {
          setCstate(prev => ({...prev, customerInfo: {...customerInfo_init} }));
          //switch to user view with userinfo.rows and set it to state
        })
        .catch((error) => props.errorHandler('Oop! Something went wrong. Please Consider trying again shortly!'))

    } else {
      props.errorHandler('Oops! Something is missing or missentered. Please verify and make sure of the right information and resubmit. Thank you!')
    }
  } 
   
   
 
   return (
    <div className="userform">
        
      <form onSubmit={event =>  handleSubmit(cstate.customerInfo, event)}>
        <fieldset>

        <p>
        <label htmlFor="input">Names:</label>
        <input type="text" name='name' onChange={(e) => cinfo_handler('name', e.target.value)}/>
        </p>

        <p>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" name='phone' id="phone" onChange={(e) => cinfo_handler('phone', e.target.value)} placeholder="phone +2374302560"/>
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' id="email" onChange={(e) => cinfo_handler('email', e.target.value)} placeholder="test@example.com"/>
        </p>
        
        <p>
          <label htmlFor="password">Password:</label>
          <input type="password" name='password' id="password" onChange={(e) => cinfo_handler('password', e.target.value)} placeholder="x42x58s5d4s898"/>
        </p>

        <p>
          <label htmlFor="web_link">Web_link:</label>
          <input type="url" name='web_link' id="web_link" onChange={(e) => cinfo_handler('web_link', e.target.value)} placeholder="www.example.ca"/>
        </p>
        
        <p>
          <label htmlFor="address">Address:</label>
          <input type="text" name='address' id="input" onChange={(e) => cinfo_handler('address', e.target.value)} placeholder="210 Steeles Av W, Brampton ON, CA"/>
        </p>
        
        <p>
          <label htmlFor="bio">Bio:</label>
          <input type="text" name='bio'  id="bio" onChange={(e) => cinfo_handler('bio', e.target.value)} placeholder="I am not a conventional person and ..." />
        </p>
        
        <p>
          <label htmlFor="ccard_info">ccard_info:</label>
          <input type="button" name='ccard_info' id="ccard_info" onClick={(e) => cv_handler('ccard_info')} />
        </p>
        
        <p>
          <label htmlFor="company_infomation">Company_infomation:</label>
          <input type="button" name='company_infomation' id="company_infomation" onClick={(e) => cv_handler('company_infomation')}/>
        </p>
        
        <p>
          <label htmlFor="photo">Photo:</label>
          <input type="file" name='photo' id="photo" onClick={(e) => cv_handler('photo')} placeholder="./photo/diretctory/orURL"/>
        </p>
        
        <p>
          <label htmlFor="photo_id">PhotoID:</label>
          <input type="file" name='photo_id' id="photo_id" onClick={(e) => cv_handler('photo_id')} placeholder="uploade one file of both faces. Clear copies!"/>
        </p>     
        
        
      </fieldset>
          <label htmlFor="formSubmitButton">Sign-Up</label>
          <input type="submit" name="formSubmitButton" className="btn btn-secondary " onClick={(e) => console.log("not yet customer", e)}/>
  </form>
        
    </div>
   );
 }