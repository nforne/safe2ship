import React from "react";
import "./profile.css";

export default function Profile(props) {
  return (
    <div className="card">
      <div className="card-body">
      
        <div className="row g-2 align-items-center">
          <div className="col-md-3">
            <img className="img-thumbnail profile-img" src={props.photo} alt="profile-picture"/>
          </div>
          <div className="col-md-9">
            <h5 className="card-title">Name: {props.name}</h5>
            <div className="card-subtitle mb-2 text-muted">
              <h6>
                <i className="bi bi-star-fill star-color"></i>
                <i className="bi bi-star-fill star-color"></i>
                <i className="bi bi-star-fill star-color"></i>
                <i className="bi bi-star-fill star-color"></i>
                <i className="bi bi-star-fill"></i>
                &nbsp;&nbsp;# Reviews: {(props.rating_sum/(props.number_of_orders + props.number_of_packages)).toFixed(1)}
              </h6>
            </div>
            <p><strong>Member Since:</strong> {props.time_created}</p>
            <p>Bio:{ props.bio}</p>
          </div>
        </div>
      </div>

      <div>
<hr/>
      <i id='diffsquare' className="bi bi-square"></i>
      <button type="button" className="btn btn-primary btn-lg" onClick={() => {props.vSwitch('pkg'); if (props.v === 'zoomin') props.zoom();}}><i className="bi-lg bi-reply-all"></i></button>
      </div>
    </div>
  );
}