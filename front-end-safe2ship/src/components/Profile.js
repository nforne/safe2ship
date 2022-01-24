import React from "react";
import "./profile.css";

export default function Profile(props) {
  return (
    <div class="card">
      <div class="card-body">
        <div class="row g-2 align-items-center">
          <div class="col-md-3">
            <img class="img-thumbnail profile-img" src="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg" alt="profile-picture"/>
          </div>
          <div class="col-md-9">
            <h5 class="card-title">Full Name</h5>
            <div class="card-subtitle mb-2 text-muted">
              <h6>
                <i class="bi bi-star-fill star-color"></i>
                <i class="bi bi-star-fill star-color"></i>
                <i class="bi bi-star-fill star-color"></i>
                <i class="bi bi-star-fill star-color"></i>
                <i class="bi bi-star-fill"></i>
                &nbsp;&nbsp;# Reviews
              </h6>
            </div>
            <p><strong>Member Since:</strong> January, 12, 2020</p>
            <p>Bio</p>
          </div>
        </div>
      </div>
    </div>
  );
}