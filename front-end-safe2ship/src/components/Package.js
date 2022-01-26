import React, {useState} from "react";
import Profile from "./Profile";
import axios from "axios";
import "./package.css";


export default function Package(props) {
 
  const [view, setView] = useState({v: 'pkg', profile:{}, vtracker:[]})

  const vSwitch = (view) => {
    setView(prev => ({...prev, v: view }))
  }

  const profileviewHandler = (input) => {
    axios.post('/api/users/other', {id: input})
          .then((userInfo) => { 
            console.log(userInfo.data) //--------------------------------------
            setView(prev => ({...prev, profile: userInfo.data}))
            vSwitch('profile')
          })
          .catch(err => console.log(err)) //-------------------------------
  } 
  
  const addToOrderCartHandler = (props) => {
    props.updatePkgAndOders(props.setOrdercart, props.pkg, 'active')
    console.log(props.ordercart) //------------------------------------------
  }

  console.log('these props ===>', props.user[0].status) // ---------------------------------

  return (
    <div className="card">
    {view.v === "profile" &&<Profile  {...view.profile} vSwitch={vSwitch} />}
      {view.v === "pkg" && 
      <div>
      <div className="card-header d-flex justify-content-between">
        <div>Package #: {props.id}</div>
        <div>Current Status:&nbsp;&nbsp;<span className="badge bg-success">{props.status}</span></div>
      </div>
      <div className="card-body">
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <div className="text-center">
              <p>
                <i className="bi bi-box box-size-small"></i>
                <br></br>
                <strong>{props.size}</strong>
              </p>
              <hr></hr>
              <p className="price">${props.price/100}</p>
            </div>
          </div>
          <div className="col-md-6">
            <p><strong>Source:</strong>&nbsp;&nbsp;{props.source}</p>
            <p><strong>Destination:</strong>&nbsp;&nbsp;{props.destination}</p>
            <div className="card border-primary mb-3">
              <div className="card-body">
                <h5 className="card-title">Package Details:</h5>
                <p>Size:{props.size}</p>
                <p>Weight:{props.size}</p>
                <p>Customer Details:</p>
                
              </div>
            <div>
              <p>Customer ID: {props.customer_id}</p>
            </div>

            </div>
          </div>
          <div className="col">
            <div>
              <h6>Estimated Delivery Deadline:</h6>
              <p>{props.delivery_deadline}</p>
            </div>
          </div>
        </div>
      </div>
   
      <div className="card-footer d-flex justify-content-end">
      <div className="text-center">
              <button type="button" onClick={() => props.pkgvswitch('all')} className="btn btn-lg btn-primary"><i className="bi-lg bi-reply-all"></i></button>
      </div>
      <i id='diffsquare' className="bi bi-square"></i>
        {props.user[0].status === 'shipper' && <button type="button" className="btn btn-primary btn-lg" onClick={(e) => addToOrderCartHandler(props)}> Request to Deliver This Package</button>}
        <i id='diffsquare' className="bi bi-square"></i>
        <button type="button" className="btn btn-primary btn-lg" onClick={(e) => profileviewHandler(props.customer_id)} >View Custermer(owner) Profile</button>
      </div>
      </div>
      }
    </div>
  ); 
}