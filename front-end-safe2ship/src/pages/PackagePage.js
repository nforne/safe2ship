import React from "react";
import Profile from "../components/Profile";
import Package from "../components/Package";
import "./package-page.css"
import PackageListItem from "../components/PackageListItem";

export default function PackagePage(props) {
  return (
    <div class="container my-5 py-4">
      <h2>Package #</h2>
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid">
          <h3 class="header-info">Customer Information</h3>
            <Profile />
            <hr />
            <hr />

          <h3 class="header-info">Package Information</h3>

            <Package />
        </div>
      </div>
    </div>
  );
}