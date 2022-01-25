import React from "react";
import PackageListItem from "../components/PackageListItem";
import "./customerHome.css";

export default function CustomerHome(props) {
  return (
      <div class="m-5">
        <div class="row justify-content-end">
          <div class="col-sm-12 col-md-6">
            <h2>My Packages</h2>
          </div>
          <div class="col-sm-12 col-md-6">
              <button type="button" class="btn btn-lg btn-primary">+ Post New Package</button>
          </div>
        </div>
        <PackageListItem />
        <div class="row">
          <div class="col-12">
            <h2>Requests</h2>
            
          </div>
        </div>
      </div>
  );
}