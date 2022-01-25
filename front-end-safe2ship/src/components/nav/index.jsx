import React, {useEffect} from "react";
import axios from "axios";

import Logo from "./logo";
import Menu from "./menu";

import './nav.css';

export default function Nav(props) {

  const logoutHandler = (input) => {
    axios.post('/api/users/logout', {system_id: ""})
      .then(e => {
        console.log(props.user.email) //-------------------------------
        props.setUser(prev => ({...prev, ...props.user_init}))
        input.hv_handler('home');
        console.log(e.data); //----------------------------------
    });
  }

  const signInAs = props.user.email;
  useEffect(() => {}, [signInAs]);
    
   return (
     <nav className="nav">
      <Logo hv_handler={props.hv_handler} logoutHandler={logoutHandler}/>
      <div className="menu">
        <div>

          {signInAs && 
          <button type="button" className="btn btn-outline-success btn-lg"><i className="bi bi-unlock-fill"></i> Signed-In as: {props.user.user.email}</button>
          }

        </div>
        <i id='diffsquare' className="bi bi-square"></i>
        <div>
          <Menu hv_handler={props.hv_handler} logoutHandler={logoutHandler}/>
        </div>
     </div>
     </nav>
     
   );
 }
