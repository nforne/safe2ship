import React, {useState} from "react";
import PackageListItem from "../components/PackageListItem";
import Package from "../components/Package";
import PackagePage from "./PackagePage";

export default function ShipperHome(props) {

  console.log('this # of pkgs', props.udata.packages.length) //------------------------------

  const [vpkg, setVpkg] = useState({pkg: {}, v: 'all', vtracker: []})

  const pkgvswitch = (view) => {
    setVpkg(prev => ({...prev, v: view}))
  }

 const [currentv, setCurrentv] = useState({v:'mine'})
  

  const pkglItemClickHandler = (itemInfo, view) => {
    setVpkg(prev => ({...prev, v: view, pkg: itemInfo}))
  };
 
  const [vitem, setVitem] = useState({v:'zoomout', vtacker:[]})

  const zoom = () => {
    if (vitem.v === 'zoomout') setVitem(prev => ({...prev, v: 'zoomin'}))
    if (vitem.v === 'zoomin') setVitem(prev => ({...prev, v: 'zoomout'}))
  }

  // props.pkgsview
  const myPkgs = () => {
    const mpkgs = [];
    for (let pkg of props.pkgs.active) {
      if (pkg.customer_id === props.user[0].id) mpkgs.push(pkg); 
    }
    return mpkgs;
  }

  const Vpkgs = currentv.v === 'mine' ? myPkgs()  : props.pkgsview; //******* */

  const packages = [];
  let key = props.udata.packages.length;
  console.log('these vpkgs ===>', props.pkgsview) //-------------------------------------------
  Vpkgs.forEach(pkg => {
    key += 1;
    if (pkg.status === 'ready') packages.push(
    <div key={key} className="justify-content-center">
        <hr/> 
        {vitem.v === 'zoomout' && <PackageListItem key={key} {...pkg} pkglItemClickHandler={pkglItemClickHandler} {...props}/>}
        {vitem.v === 'zoomin' && <PackagePage zoom={zoom} listpkg={pkg} {...pkg} {...vitem}  pkgvswitch={pkgvswitch} {...props}/>}
        <button type="button" onClick={() => zoom()} className="btn btn-lg btn-primary">ZOOM +/-</button>
        <hr/>
    </div>
    );
  });
  
  return (
    <div>
    {vpkg.v === 'pkg' && <Package listpkg={vpkg.pkg} {...vpkg.pkg}  pkgvswitch={pkgvswitch} {...props}/>}
        
    {vpkg.v === 'all' && 
    <div className="m-5">
    <div className="row justify-content-center">
    <div className="buttonz col-sm-12 col-md-6">
        <button type="button" onClick={() => setCurrentv(prev => ({...prev, v:'mine'}))} className="btn btn-lg btn-primary">My own Packages</button>
        <i id='diffsquare' className="bi bi-square"></i>
        <button type="button" onClick={() => setCurrentv(prev => ({...prev, v:'all'}))} className="btn btn-lg btn-primary">Packages available for pickup</button>
        <i id='diffsquare' className="bi bi-square"></i>
        <button type="button" onClick={() => props.hv_handler("postPackage")} className="btn btn-lg btn-primary">+ Post New Package</button>
        <hr/>
        </div>
      <div className="col-12">
      </div>
    </div>
      { packages }
      </div>
    }
    </div>
  );
}