import React from "react";
import PackageListItem from "../components/PackageListItem";
import "./customerHome.css";

export default function CustomerHome(props) {
  return (
      <div class="container m-5">
        <div class="row justify-content-between">
          <div class="col">
            <h2>My Packages</h2>
          </div>
          <div class="col d-flex justify-content-end">
              <button type="button" class="btn btn-lg btn-primary">+ Post New Package</button>
          </div>
        </div>
        <PackageListItem />
        <div class="row">
          <div class="col">
            <h2>Requests</h2>
            
          </div>
        </div>
      </div>
  );
}