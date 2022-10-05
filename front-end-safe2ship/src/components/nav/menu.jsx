import React from "react";
import classNames from "classnames";


export default function Menu(props) {

  const vSwitch = (user) => {  //yet to rectify
    user[0].status === 'customer' ? props.hv_handler('customerHome') : props.hv_handler('shipperHome')
  }
  
  //  className="btn disabled"
  // disabled={true}
  // const buttonClass = classNames("dropdown-item", {"disabled": props.confirm,}) 

  const s = props.user[0].status === 'shipper' ? true : false;
  const c = props.user[0].status === 'customer' ? true : false;
  const o = !['shipper', 'customer', 'admin'].includes(props.user[0].status) ? true : false;

  
   return (
    <div className='menu'>
      <div className="dropdown">
      
      <button className="btn btn-secondary dropdown-toggle dropdown-toggle-split btn-lg" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">[ <i className="bi bi-list"></i> ]&nbsp;&nbsp;</button>
      
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li><hr className="dropdown-divider"/></li>
        <li><button className={classNames("dropdown-item danger", {"disabled": o, })} type="button" onClick={(e) => props.logoutHandler(props)} > <i className="bi bi-eject"></i>logout</button></li>
        <li><hr className="dropdown-divider"/></li>
        <li><button className={classNames("dropdown-item", {"disabled": c || o, })} type="button" onClick={(e) => {props.setPkgsview(() => props.ordercart.active); console.log(props.ordercart.active.length); vSwitch(props.user)}}> <i className="bi bi-chevron-left"></i> order Cart</button></li>
        <li><button className={classNames("dropdown-item", {"disabled": c || o })} type="button" onClick={(e) => {props.setPkgsview(() => [...props.ordercart.declined, ...props.ordercart.delivered]); vSwitch(props.user)}}> <i className="bi bi-chevron-left"></i> order History</button></li>
        <li><button className={classNames("dropdown-item", {"disabled": o, })} type="button" onClick={(e) => {props.setPkgsview(() => props.pkgs.active); vSwitch(props.user)}}> <i className="bi bi-chevron-left"></i> packages</button></li>
        <li><button className={classNames("dropdown-item", {"disabled": o })} type="button" onClick={(e) => {props.setPkgsview(() => [...props.pkgs.declined, ...props.pkgs.delivered]); vSwitch(props.user)}}> <i className="bi bi-chevron-left"></i> package History</button></li>
        <li><button className={classNames("dropdown-item", {"disabled": o })} type="button" > <i className="bi bi-chevron-left"></i> messages</button></li>
        <li><button className={classNames("dropdown-item", {"disabled": o })} type="button" onClick={(e) => props.hv_handler('profile')} > <i className="bi bi-chevron-left"></i> my Profile</button></li>
        <li><button className={classNames("dropdown-item", {"disabled": o })} type="button" > <i className="bi bi-chevron-left"></i> help?</button></li>
        <li><button className={classNames("dropdown-item", {"disabled": o })} type="button" > <i className="bi bi-chevron-left"></i> safe2ship?</button></li>
        <li><button className={classNames("dropdown-item", {"disabled": o })} type="button" > <i className="bi bi-chevron-left"></i> settings</button></li>
        <li><hr className="dropdown-divider"/></li>
        <li><button className={classNames("dropdown-item", {"disabled": c || s || o,})} type="button" > <i className="bi bi-chevron-left"></i> Admin</button></li>
      </ul>
      </div>  
    </div>
   );
 }



