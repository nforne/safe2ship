import React from "react";
import PackageListItem from "../components/PackageListItem";

export default function ShipperHome(props) {
  const packageList =  []; 
  for (let index = 0; index < 5; index++) {
    packageList.push(<PackageListItem />);
  }
  
  return (
    <div class="container">
      { packageList }
    </div>
  );
}