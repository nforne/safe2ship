import React from "react";


export default function Menu(props) {
 
  
   return (
    <div className='menu'>
      <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle dropdown-toggle-split" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">&#8626; [<i className="bi bi-list"></i>]<i className="bi bi-three-dots-vertical"></i></button>
      
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li><hr className="dropdown-divider"/></li>
        <li><button className="dropdown-item danger" type="button" onClick={(e) => props.logoutHandler(props)} > <i className="bi bi-eject"></i> logout</button></li>
        <li><hr className="dropdown-divider"/></li>
        <li><button className="dropdown-item" type="button"> <i className="bi bi-chevron-left"></i> order Cart</button></li>
        <li><button className="dropdown-item" type="button"> <i className="bi bi-chevron-left"></i> packages</button></li>
        <li><button className="dropdown-item" type="button"> <i className="bi bi-chevron-left"></i> order History</button></li>
        <li><button className="dropdown-item" type="button"> <i className="bi bi-chevron-left"></i> package History</button></li>
        <li><button className="dropdown-item" type="button"> <i className="bi bi-chevron-left"></i> messages</button></li>
        <li><button className="dropdown-item" type="button"> <i className="bi bi-chevron-left"></i> my Profile</button></li>
        <li><button className="dropdown-item" type="button"> <i className="bi bi-chevron-left"></i> help?</button></li>
        <li><button className="dropdown-item" type="button"> <i className="bi bi-chevron-left"></i> safe2ship?</button></li>
        <li><button className="dropdown-item" type="button"> <i className="bi bi-chevron-left"></i> settings</button></li>
        <li><hr className="dropdown-divider"/></li>
        <li><button className="dropdown-item" type="button"> <i className="bi bi-chevron-left"></i> Admin</button></li>
      </ul>
      </div>  
    </div>
   );
 }

