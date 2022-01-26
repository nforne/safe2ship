import React, {useState} from "react";
import PackageListItem from "../components/PackageListItem";
import Package from "../components/Package";
import "./customerHome.css";

export default function CustomerHome(props) {

  console.log('this # of pkgs', props.udata.packages.length) //------------------------------

  const [vpkg, setVpkg] = useState({pkg: {}, v: 'all', vtracker: []})
  
  const [pkgs, setPkgs] = useState({delivered:[], acitve:[], declined:[] })

  const pkgvswitch = (view) => {
    setVpkg(prev => ({...prev, v: view}))
  }

  const pkglItemClickHandler = (itemInfo, view) => {
    setVpkg(prev => ({...prev, v: view, pkg: itemInfo}))
  };

  let key = props.pkgsview.length + 1;
  const packages = props.pkgsview.map(pkg => {
    key += 1;
    return <PackageListItem key={key} {...pkg} pkglItemClickHandler={pkglItemClickHandler}/>
  });

// onClick={(pkg) => pkglItemClickHandler(props, 'pkg')}
// const pkgp = {
//   status:props.status,
//   id : props.id,
//   size: props.size,
//   price : props.price,
//   source: props.source,
//   destination: props.destination,
//   delivery_deadline: props.delivery_deadline,
//   customer_id: props.customer_id
// }


  return (
      <div className="m-5">
        {vpkg.v === 'pkg' && <Package  {...vpkg.pkg}  pkgvswitch={pkgvswitch} {...props}/>}
        
        {vpkg.v === 'all' && 
          <div>
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
            <h2>Shipper Request Messages</h2>
            
          </div>
        </div>

        </div>
        }

      </div>
  );
}