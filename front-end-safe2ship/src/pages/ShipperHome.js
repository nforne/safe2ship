import React from "react";
import PackageListItem from "../components/PackageListItem";

export default function ShipperHome(props) {
  console.log('this # of pkgs', props.udata.packages.length) //------------------------------

  const packages = [];
  let key = props.udata.packages.length;
  props.udata.packages.forEach(pkg => {
    key += 1;
    if (pkg.status === 'ready') packages.push(<PackageListItem key={key} {...pkg} />);
  });

  // const packageList =  []; 
  // for (let index = 0; index < 5; index++) {
  //   packageList.push(<PackageListItem udata={props.udata}/>);
  // }
  
  return (
    <div className="m-5">
    <div className="row justify-content-center">
      <div className="col-12">
        <h2>Packages available for pickup</h2>
      </div>
    </div>
      { packages }
    </div>
  );
}