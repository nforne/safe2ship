import React from "react";
import axios from "axios";

import Logo from "./logo";
import Menu from "./menu";



import './nav.css';

export default function Nav(props) {

  const logoutHandler = (props) => {
    axios.post('/api/users/logout', {system_id: ""})
      .then(e => {
        props.hv_handler('home');
        console.log(e.data); //----------------------------------
    });
  }
    
   return (
     <nav className="nav">
      <Logo hv_handler={props.hv_handler} logoutHandler={logoutHandler}/>
      <div className="menu">
        <div>
          <button type="button" className="btn btn-outline-success">[<i className="bi bi-unlock-fill"></i> Signed-In as:    ]</button>
          
        </div>
        <i id='diffsquare' className="bi bi-square"></i>
        <div>
          <Menu hv_handler={props.hv_handler} logoutHandler={logoutHandler}/>
        </div>
     </div>
     </nav>
     
   );
 }
