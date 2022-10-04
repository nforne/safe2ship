import React from "react";
import { useState } from "react";
import axios from 'axios';


export default function Shippersignup(props) {

  const shipperInfo_init = {status:'shipper', number_of_orders:0, 
    number_of_packages: 0, rating_sum:0, 
    total_declined: 0, system_id: "", messages: {},
    name: "", phone: "",  email: "", password: "", 
    photo: "", address: "",
    bio:"", ccard_info: {}, company_information: {}, 
    driving_record: {}, photo_id: "", 
    web_link: "", work_schedule: {}};

  const [sstate, setSstate] = useState({
    shipperInfo : {...shipperInfo_init},
    view: 'shipper'
  })

  const sinfo_handler = (key, value) => {
    setSstate(prev => {
      const updating = {...prev};
      updating.shipperInfo[key] = value;
      return updating});
  }

  const sv_handler = (view) => {
    setSstate(prev => ({...prev, view: view }))
  }

  const sinputFormValidation = (sinfo) => {
    if (sinfo.name === '') return 'Enter your full name!';
    if (sinfo.phone === '' || sinfo.phone.split('').includes(' ')) return 'Enter your phone number, without spaces!';
    if (sinfo.email === '' || sinfo.email.split('').includes(' ')) return 'Enter your email, without spaces!';
    if (sinfo.password === '' || sinfo.password.split('').includes(' ')) return 'Enter a password, without spaces!';
    if (sinfo.address === '' ) return 'Enter your address, without spaces!';
    if (sinfo.bio === '' ) return 'Enter a sentence or more about who you are!';
    return 'good!'; //------------------------------------------
  }

  const handleSubmit = (shipperInfo, event) => {
    
    event.preventDefault();
    // switch to pending...
    props.hv_handler('pending')
    if (sinputFormValidation(shipperInfo) === 'good!') {
      axios.post('/api/users/signup', {...shipperInfo})
        .then(userinfo => {
          console.log(userinfo.data) //-----------------------------
          setSstate(prev => ({...prev, customerInfo: {...shipperInfo_init} }))
          //switch to user view with userinfo.rows and set it to state
        })
        .catch((error) => props.errorHandler('Oop! Something went wrong. Please Consider trying again shortly!'))

    } else {
      props.errorHandler(`Oops! Something is missing or missentered: ${sinputFormValidation(shipperInfo)}. Please verify and make sure of the right information and resubmit. Thank you!`)
    }
  } 
   
 
   return (
      

      <div className="userform">
          
        <form onSubmit={event =>  handleSubmit(sstate.shipperInfo, event)}>

          <fieldset>
      
          <p>
          <label className="form-group row" htmlFor="input">Names:</label>
          <input type="text" name='name' placeholder="Jane Doe" onChange={(e) => sinfo_handler('name', e.target.value)}/>
          </p>

          <p>
            <label className="form-group row" htmlFor="phone">Phone:</label>
            <input type="text" name='phone' id="phone" onChange={(e) => sinfo_handler('phone', e.target.value)} placeholder="phone +2374302560"/>
          </p>
          <p>
            <label className="form-group row" htmlFor="email">Email:</label>
            <input type="email" name='email' id="email" onChange={(e) => sinfo_handler('email', e.target.value)} placeholder="test@example.com"/>
          </p>
          
          <p>
            <label className="form-group row" htmlFor="password">Password:</label>
            <input type="password" name='password' id="password" onChange={(e) => sinfo_handler('password', e.target.value)} placeholder="x42x58s5d4s898"/>
          </p>
          
          <p>
            <label className="form-group row"  htmlFor="address">Address:</label>
            <input type="text" name='address' id="input" onChange={(e) => sinfo_handler('address', e.target.value)} placeholder="210 Steeles Av W, Brampton ON, CA"/>
          </p>
          
          <p>
            <label className="form-group row" htmlFor="bio">Bio:</label>
            <input type="text" name='bio'  id="bio" onChange={(e) => sinfo_handler('bio', e.target.value)} placeholder="I am not a conventional person and ..." />
          </p>

          <p>
            <label className="form-group row" htmlFor="web_link">Web_link:</label>
            <input type="url" name='web_link' id="web_link" onChange={(e) => sinfo_handler('web_link', e.target.value)} placeholder="www.example.ca"/>
          </p>
 <hr />
          <p>
            <label className="form-group row" htmlFor="photo">Photo:</label>
            <input type="file" name='photo' id="photo" onClick={(e) => sv_handler('photo')} placeholder="./photo/diretctory/orURL"/>
          </p>

          <p>
            <label className="form-group row" htmlFor="photo_id">PhotoID:</label>
            <input type="file" name='photo_id' id="photo_id" onClick={(e) => sv_handler('photo_id')} placeholder="uploade one file of both faces. Clear copies!"/>
          </p>
 <hr />
          <p>
            <label className="form-group row" htmlFor="ccard_info">ccard_info:</label>
            <input type="button" name='ccard_info'  id="ccard_info" onClick={(e) => sv_handler('ccard_info')} />
          </p>
          
          <p>
            <label className="form-group row" htmlFor="company_infomation">Company_infomation:</label>
            <input type="button" name='company_infomation' onClick={(e) => sv_handler('company_infomation')} id="company_infomation" />
          </p>
          
          <p>
            <label className="form-group row" htmlFor="driving_record">Driving_record:</label>
            <input type="button" name='driving_record' onClick={(e) => sv_handler('company_infomation')} id="driving_record" />
          </p>       
          
          <p>
            <label className="form-group row" htmlFor="work_schedule">Work_schedule:</label>
            <input type="button" name='work_schedule' id="work_schedule"  onClick={(e) => sv_handler('work_schedule')} placeholder="click to enter your swork schedule. Optional!"/>
          </p>

        </fieldset>
            <label className="form-group row" htmlFor="formSubmitButton"></label>
            <input type="submit" name="formSubmitButton" className="btn btn-secondary " onClick={(e) => console.log("not yet shipper", e)}/>
       </form>


      </div>

   );
 }