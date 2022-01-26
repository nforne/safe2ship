import React from "react";
import PackageListItem from "../components/PackageListItem";
import "./customerHome.css";

export default function CustomerHome(props) {
  
  console.log('this # of pkgs', props.udata.packages.length) //------------------------------

  let key = props.udata.packages.length + 1;
  const packages = props.udata.packages.map(pkg => {
    key += 1;
    return <PackageListItem key={key} {...pkg} />
  });

  return (
      <div className="m-5">
        <div className="row justify-content-end">
          <div className="col-sm-12 col-md-6">
            <h2>My Packages</h2>
          </div>
          <div className="col-sm-12 col-md-6">
              <button type="button" onClick={() => props.hv_handler("postPackage")} className="btn btn-lg btn-primary">+ Post New Package</button>
          </div>
        </div>
        {packages}
        <div className="row">
          <div className="col-12">
            <h2>Requests</h2>
            
          </div>
        </div>
      </div>
  );
}