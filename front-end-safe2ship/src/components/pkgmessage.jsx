import React from "react";
import axios from "axios";

export default function Pkgmessage(props) {  // delete from queue to be added
   const pkgConfirmHandler = () => {
      axios.post('/api/pkgs/message', {...props, status:'confirmed'})
           .then(fb => console.log(fb))
           .catch(error => console.log(error))
   } 
   
   const pkgDeclineHandler = () => {
    axios.post('/api/pkgs/message', {...props, status:'confirmed'})
        .then(fb => console.log(fb))
        .catch(error => console.log(error))
   } 

  //  needs: message, customer_id, shipper_id


 
   return (
    <div className="messeage">
        
        <div className="card">
          <div className="card-header">
             shipper id: {props.shipper_id}
             <i id='diffsquare' className="bi bi-square"></i>
            {props.user[0].status === 'customer' && <button class="btn btn-primary">view shipper's profile</button>}
          </div>
          <div className="card-body">
            <h5 className="card-title">Message</h5>
            <p className="card-text">{props.message}</p>
            <hr />
            {props.user[0].status === 'customer' && 
       <div>
        <button type="button" className="btn btn-primary" onClick={(e) => { pkgConfirmHandler(); console.log('pkg messages ...')}} >Confirm</button>
        <i id='diffsquare' className="bi bi-square"></i>
        <button type="button" className="btn btn-primary" onClick={(e) => { pkgDeclineHandler(); console.log('pkg messages ...')}} >Decline</button>
       </div>
       }
        </div>
       
        </div>  
    </div>
   );
 }
