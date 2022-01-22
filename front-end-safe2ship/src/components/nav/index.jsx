import React from "react";
import Logo from "./logo";
import Menu from "./menu";




import './nav.css';

export default function Nav(props) {
    
   return (
     <nav className="nav">
      <Logo/>
      <div className="menu">
        <div>
          <button type="button" className="btn btn-outline-success">[<i className="bi bi-unlock-fill"></i> Signed-In as:    ]</button>
          
        </div>
        <i id='diffsquare' className="bi bi-square"></i>
        <div>
          <Menu/>
        </div>
     </div>
     </nav>
     
   );
 }
