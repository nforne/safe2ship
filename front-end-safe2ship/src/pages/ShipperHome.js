import React from "react";
import PackageListItem from "../components/PackageListItem";

export default function ShipperHome(props) {
  const packageList =  []; 
  for (let index = 0; index < 5; index++) {
    packageList.push(<PackageListItem />);
  }
  
  return (
    <div class="m-5">
    <div class="row justify-content-center">
      <div class="col-12">
        <h2>Packages available for pickup</h2>
      </div>
    </div>
      { packageList }
    </div>
  );
}