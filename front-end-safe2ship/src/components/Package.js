import React from "react";
import Customer from "./Customer";
export default function Package(props) {
  return (
    <div class="container py-4">
      <h2>Package #</h2>
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h4>Customer Information</h4>
            <Customer />
          <h4>Package Information</h4>
          <p>Status:&nbsp;&nbsp;<span class="badge bg-success">Ready</span></p>
          <p>map</p>
        </div>
      </div>
    </div>
  );
}