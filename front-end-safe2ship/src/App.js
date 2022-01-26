import { useState } from "react";

import Nav from "./components/nav";
import Home from "./components/home"
import Pending from "./components/home/pending";

import SignIn from './components/sigIn-signUp/signIn';
import SignUp from './components/sigIn-signUp/signUp';

import Package from "./pages/PackagePage";
import ShipperHome from "./pages/ShipperHome";
import CustomerHome from "./pages/CustomerHome";
import PostPackage from "./pages/PostPackage";
import Profile from "./components/Profile";
import './App.css';


const App = () => {
  
  const user_init = {user: [{}], packages: [{}], orders:[{}]};

  const [hview, setHview] = useState({v: 'home', hvtracker: []});
  const [user, setUser] = useState({...user_init});
  const [error, setError] = useState('');
  const [pkg, setPkg] = useState({});

// for differentiated view of packages in packages and orders
  const [ordercart, setOrdercart] = useState({delivered:[], active:[], declined:[] }); 
  const [pkgs, setPkgs] = useState({delivered:[], active:[], declined:[] });

  //for pages in current view
  const [pkgsview, setPkgsview] = useState([]);
  const [ordersview, setOrdersview] = useState([]);


  const updatePkgAndOders = (cb, obj, status) => {
    cb(prev => {
      const updating = {...prev};
      const update = updating[status];
      update.push(obj);
      updating[status] = update;
      return updating;
    })
  }

  const sortUser = (user) => {
    const packages = user.packages;
    const orders = user.orders;

if (pkgs.length !== 0) {
  packages.forEach(pkg => {
      if (pkg.status === 'delivered') {
        updatePkgAndOders(setPkgs, pkg, 'delivered');
      } else if (pkg.status === 'ready'|| pkg.status === "inqueue" ) {
        updatePkgAndOders(setPkgs, pkg, 'active');
      } else if (pkg.status === 'declined') {
        updatePkgAndOders(setPkgs, pkg, 'declined');
      }
    })
  }

  if (orders.length !== 0) {
    orders.forEach(pkg => {
      if (pkg.status === 'delivered') {
        updatePkgAndOders(setOrdercart, pkg, 'delivered');
      } else if (pkg.status === 'ready') {
        updatePkgAndOders(setOrdercart, pkg, 'active');
      } else if (pkg.status === 'declined') {
        updatePkgAndOders(setOrdercart, pkg, 'declined');
      }
    })
  }

    setPkgsview(() => pkgs.active)
    setOrdersview(() => ordercart.active) 
  }


  const hv_handler = (view) => {
    setHview(prev => ({...prev, v: view }))
  }

  const errorHandler = (errorMessage) => {
    setError(() => ([<p key={'1'}>{errorMessage}</p>]))
    setTimeout(() => {
      setError(() => [<p key={'2'}></p>]);
    }, 120000)
  }

  const props = {
    hv_handler: hv_handler,
    user: user.user,
    setUser: setUser,
    user_init: {...user_init},
    errorHandler: errorHandler,
    udata:{...user},
    sortUser,
    pkg, setPkg,
    ordercart, setOrdercart,
    pkgs, setPkgs,
    pkgsview, setPkgsview,
    ordersview, setOrdersview,
    updatePkgAndOders
  }

  return (
    <div className="App">
      
      <Nav {...props}/>
      <hr className='line'/>
      <br></br>
      
        <div className='errmsgs'>
          {error}
        </div>

      <hr/>
      <section className='main'>
        {hview.v === 'pending' &&  <Pending/>}
        {hview.v === "home" &&<Home  {...props} />}
        {hview.v === "profile" &&<Profile  {...user.user[0]} {...props} />}

        {hview.v === "signIn" && <SignIn {...props}/>}
        {hview.v === "signUp" && <SignUp {...props}/>}
        {hview.v === "customerHome" && <CustomerHome  {...props}/>}
        {hview.v === "shipperHome" && <ShipperHome  {...props}/>}
        {hview.v === "packagePage" && <Package {...props}/>}
        {hview.v === "postPackage" && <PostPackage {...props}/>}
      </section>



    </div>
  );
}

export default App;
