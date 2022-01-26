import React from "react";
import "./package.css";

export default function Package(props) {
  return (
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <div>Package #</div>
        <div>Current Status:&nbsp;&nbsp;<span class="badge bg-success">Ready</span></div>
      </div>
      <div class="card-body">
        <div class="row justify-content-between align-items-center">
          <div class="col">
            <div class="text-center">
              <p>
                <i class="bi bi-box box-size-small"></i>
                <br></br>
                <strong>Small</strong>
              </p>
              <hr></hr>
              <p class="price">$12.89</p>
            </div>
          </div>
          <div class="col-md-6">
            <p><strong>Source:</strong>&nbsp;&nbsp;123 Huntington Street, Toronto, ON</p>
            <p><strong>Destination:</strong>&nbsp;&nbsp;111 Markham Street, Markham, ON</p>
            <div class="card border-primary mb-3">
              <div class="card-body">
                <h5 class="card-title">Package Details:</h5>
                <p>Size:</p>
                <p>Weight:</p>
                <p>Customer Details:</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <h6>Estimated Delivery Time:</h6>
              <p>By End of Today</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <button type="button" class="btn btn-primary btn-lg">Deliver This Package</button>
      </div>
    </div>
  ); 
}