import React from "react";
import { useState, useEffect } from "react";
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

  const cinputFormValidation = (cinfo) => {
    if (cinfo.name === '') return 'Enter your full name!';
    if (cinfo.phone === '' || cinfo.phone.split('').includes(' ')) return 'Enter your phone number, without spaces!';
    if (cinfo.email === '' || cinfo.email.split('').includes(' ')) return 'Enter your email, without spaces!';
    if (cinfo.password === '' || cinfo.password.split('').includes(' ')) return 'Enter a password, without spaces!';
    if (cinfo.address === '' ) return 'Enter your address, without spaces!';
    if (cinfo.bio === '' ) return 'Enter a sentence or more about who you are!';
    return 'good!'; //------------------------------------------
  }

  useEffect(() => {
    setCstate(prev => ({...prev, customerInfo: {...customerInfo_init} }));
  }, []);


  const handleSubmit = (customerInfo, event) => {
    event.preventDefault();

    if (cinputFormValidation(customerInfo) === 'good!') {

      // switch to pending...
      props.hv_handler('pending')
      axios.post('/api/users/signup', {...customerInfo})
        .then(userinfo => {
          console.log('this customer ===>', userinfo.data) //--------------------------------------
          //switch to user view with userinfo.data and set it to state
          props.sortUser(userinfo.data);
          props.setUser(prev => ({...prev,  ...userinfo.data }))

          props.hv_handler('customerHome');
        })
        .catch((error) => props.errorHandler('Oop! Something went wrong. Please Consider trying again shortly!'))

    } else {
      props.errorHandler(`Oops! Something is missing or missentered: ${cinputFormValidation(customerInfo)}. Please verify and make sure of the right information and resubmit. Thank you!`)
    }
  } 
   
   
 
   return (


    <div className="userform">
        
      <form className="form" onSubmit={event =>  handleSubmit(cstate.customerInfo, event)}>
        <fieldset>

        <p>
        <label className="form-group row"  htmlFor="input">Names:</label>
        <input type="text" name='name' placeholder="Jane Doe" onChange={(e) => cinfo_handler('name', e.target.value)}/>
        </p>

        <p>
          <label className="form-group row"  htmlFor="phone">Phone:</label>
          <input type="tel" name='phone' id="phone" onChange={(e) => cinfo_handler('phone', e.target.value)} placeholder="phone +2374302560"/>
        </p>
        <p>
          <label  className="form-group row" htmlFor="email">Email:</label>
          <input type="email" name='email' id="email" onChange={(e) => cinfo_handler('email', e.target.value)} placeholder="test@example.com"/>
        </p>
        
        <p>
          <label  className="form-group row" htmlFor="password">Password:</label>
          <input type="password" name='password' id="password" onChange={(e) => cinfo_handler('password', e.target.value)} placeholder="x42x58s5d4s898"/>
        </p>

        <p>
          <label  className="form-group row" htmlFor="web_link">Web_link:</label>
          <input type="url" name='web_link' id="web_link" onChange={(e) => cinfo_handler('web_link', e.target.value)} placeholder="www.example.ca"/>
        </p>
        
        <p>
          <label className="form-group row" htmlFor="address">Address:</label>
          <input type="text" name='address' id="input" onChange={(e) => cinfo_handler('address', e.target.value)} placeholder="210 Steeles Av W, Brampton ON, CA"/>
        </p>
        
        <p>
          <label className="form-group row" htmlFor="bio">Bio:</label>
          <input type="text" name='bio'  id="bio" onChange={(e) => cinfo_handler('bio', e.target.value)} placeholder="I am not a conventional person and ..." />
        </p>
        <hr />
        <p>
          <label className="form-group row"  htmlFor="photo">Photo:</label>
          <input type="file" name='photo' id="photo" onClick={(e) => cv_handler('photo')} placeholder="./photo/diretctory/orURL"/>
        </p>
        
        <p>
          <label className="form-group row" htmlFor="photo_id">PhotoID:</label>
          <input type="file" name='photo_id' id="photo_id" onClick={(e) => cv_handler('photo_id')} placeholder="uploade one file of both faces. Clear copies!"/>
        </p>    
        <hr />
        <p>
          <label className="form-group row" htmlFor="ccard_info">ccard_info:</label>
          <input type="button" name='ccard_info' id="ccard_info" onClick={(e) => cv_handler('ccard_info')} />
        </p>
        
        <p>
          <label className="form-group row" htmlFor="company_infomation">Company_infomation:</label>
          <input type="button" name='company_infomation' id="company_infomation" onClick={(e) => cv_handler('company_infomation')}/>
        </p> 
        
      </fieldset>
          <label className="form-group row" htmlFor="formSubmitButton"></label>
          <input type="submit" name="formSubmitButton" className="btn btn-secondary btn-lg" onClick={(e) => console.log("not yet customer", e)} />
  </form>
        
    </div>
  

   );
 }