import React from "react";
import "./package.css";

export default function PackageListItem(props) {
  return (
    <div class="row m-5">
      <div class="col-12">
        <div class="card package-list-item">
          <div class="card-body">
            <div class="row justify-content-between align-items-center">
              <div class="col-md-3">
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
              <div class="col-sm-12 col-md-7">
                <p><strong>Source:</strong>&nbsp;&nbsp;123 Huntington Street, Toronto, ON</p>
                <p><strong>Destination:</strong>&nbsp;&nbsp;111 Markham Street, Markham, ON</p>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <i class="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}