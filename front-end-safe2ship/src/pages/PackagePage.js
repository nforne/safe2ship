import React from "react";
import Profile from "../components/Profile";
import Package from "../components/Package";
import "./package-page.css"

export default function PackagePage(props) {
  return (
    <div class="container py-4">
      <h2>Package #</h2>
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h4 class="header-info">Customer Information</h4>
            <Profile />
          <h4  class="header-info">Package Information</h4>
            <Package />
        </div>
      </div>
    </div>
  );
}