import { useState, useEffect } from "react";

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


// client-side
import  io  from "socket.io-client";

const URL = "http://localhost:3001";



const App = () => {

  const [conn, setConn ] = useState('');
  useEffect(() => {

    const socket = io(URL, {
      withCredentials: false,
    });

  }, []);

  const [hview, setHview] = useState({v: 'home', hvtracker: []})
  
  const user_init = {user: [{}], packages: [{}], orders:[{}]};

  const [user, setUser] = useState({...user_init});
  const [error, setError] = useState([]);
  const [pkg, setPkg] = useState({});

  // for differentiated view of packages in packages and orders
  const [ordercart, setOrdercart] = useState({delivered:[], active:[], declined:[] }); 
  const [pkgs, setPkgs] = useState({delivered:[], active:[], declined:[] });

  //for pages in current view
  const [pkgsview, setPkgsview] = useState([]);
  const [ordersview, setOrdersview] = useState([]);


  // const updatePkgAndOders = (cb, obj, status) => {
  //   cb(prev => {
  //     const updating = {...prev};
  //     const update = [...updating[status]];
  //     update.push(obj);
  //     updating[status] = update;
  //     return updating;
  //   })
  // }

  const sortUser = (user) => {

    let pkgList = {delivered:[], active:[], declined:[] };
    let ordList = {delivered:[], active:[], declined:[] };

    if (user.packages.length !== 0) {
      for (let pkg in packages) {
        if (pkg.status === 'delivered') {
          pkgList.delivered.push(pkg)
        } else if (pkg.status === 'inqueue' || pkg.status === 'ready') {
          pkgList.active.push(pkg)
        } else if (pkg.status === 'declined') {
          pkgList.declined.push(pkg)
        }
      }
      setPkgs(prev => ({...prev, ...pkgList}))
      pkgList = {delivered:[], active:[], declined:[] };
      console.log(JSON.stringify('these pkgs ==>', pkgs)) //---------------------------------------------------
    }

    if (user.orders.length !== 0) {
      for (let ord in packages) {
        if (ord.status === 'delivered') {
          ordList.delivered.push(ord)
        } else if (ord.status === 'inqueue') {
          ordList.active.push(ord)
        } else if (ord.status === 'declined' || ord.status === 'ready') {
          ordList.declined.push(ord)
        }
      }
      setOrdercart(prev => ({...prev, ...ordList}))
      ordList = {delivered:[], active:[], declined:[] };
      console.log(JSON.stringify('this ordercart ==>', ordercart)) //---------------------------------------------------
    }

    setUser(prev => ({...prev, ...user}))

    // if (packages.length !== 0) {
    //   packages.forEach(pkgItem => {
    //       if (pkgItem.status === 'delivered') {
    //         updatePkgAndOders(setPkgs, pkgItem, 'delivered');
    //       } else if (pkgItem.status === 'ready'|| pkgItem.status === "inqueue" ) {
    //         updatePkgAndOders(setPkgs, pkgItem, 'active');
    //       } else if (pkgItem.status === 'declined') {
    //         updatePkgAndOders(setPkgs, pkgItem, 'declined');
    //       }
    //     })
    // }

    // if (orders.length !== 0) {
    //   orders.forEach(pkgItem => {
    //     if (pkg.status === 'delivered') {
    //       updatePkgAndOders(setOrdercart, pkgItem, 'delivered');
    //     } else if (pkgItem.status === 'ready') {
    //       updatePkgAndOders(setOrdercart, pkgItem, 'active');
    //     } else if (pkgItem.status === 'declined') {
    //       updatePkgAndOders(setOrdercart, pkgItem, 'declined');
    //     }
    //   })
    // }

    setPkgsview(prev => pkgs.active)
    console.log('these active pkgs 1 ===>', pkgs.active.length) //----------------------------------------
    console.log('these active pkgs 2 ===>', pkgsview.length) //----------------------------------------

    setOrdersview(prev => ordercart.active);    
    console.log('these active orders 3 ===>', ordercart.active.length) //----------------------------------------
    console.log('these active orders 4 ===>', ordersview.length) //----------------------------------------
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
    // updatePkgAndOders
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



//-----------------------------------------------------------------------------------------------------------------------------

import { useState, useEffect } from "react";

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


// client-side
import  io  from "socket.io-client";

const URL = "http://localhost:3001";



const App = () => {

  const [conn, setConn ] = useState('');
  useEffect(() => {

    const socket = io(URL, {
      withCredentials: false,
    });

  }, []);

  const [hview, setHview] = useState({v: 'home', hvtracker: []})
  
  const user_init = {user: [{}], packages: [{}], orders:[{}]};

  const [user, setUser] = useState({...user_init});
  const [error, setError] = useState([]);
  const [pkg, setPkg] = useState({});

  // for differentiated view of packages in packages and orders
  const [ordercart, setOrdercart] = useState({delivered:[], active:[], declined:[] }); 
  const [pkgs, setPkgs] = useState({delivered:[], active:[], declined:[]});

  //for pages in current view
  const [pkgsview, setPkgsview] = useState([]);
  const [ordersview, setOrdersview] = useState([]);


  const sortUser = (data) => {

    let pkgList = {delivered:[], active:[], declined:[] };
    let ordList = {delivered:[], active:[], declined:[] };

    const updateList = (object, element, status) => {
      object[status] = [...object[status], element];
    }

    if (data.packages.length !== 0) {
      for (let pkg of data.packages) {
        if (pkg.status === 'delivered') {
          updateList(pkgList, pkg, 'delivered')
        } else if (pkg.status === 'inqueue' || pkg.status === 'ready') {
          updateList(pkgList, pkg, 'active')
        } else if (pkg.status === 'declined') {
          updateList(pkgList, pkg, 'declined')
        }
      }
      setPkgs(prev => ({...prev, ...pkgList}))
      pkgList = {delivered:[], active:[], declined:[] };
    }

    if (data.orders.length !== 0) {
      for (let ord of data.orders) {
        if (ord.status === 'delivered') {
          updateList(ordList, ord, 'delivered')
        } else if (ord.status === 'inqueue' || ord.status === 'ready') {
          updateList(ordList, ord, 'active')
        } else if (ord.status === 'declined') {
          updateList(ordList, ord, 'declined')
        }
      }
      setOrdercart(prev => ({...prev, ...ordList}))
      ordList = {delivered:[], active:[], declined:[] };
    }

    setUser(prev => ({...prev, ...data}))
    
    setTimeout(() => {
      console.log('this # active ==>', pkgs.active.length) //----------------------------------------------------------
      console.log('these pkgs ==>', JSON.stringify(pkgs)) //-------------------------------------
      console.log('this user ==>', JSON.stringify(user)) //------------------------------------------------------
    }, 1000)
        

    setPkgsview(prev => ([...prev, ...pkgs.active]))
    // console.log('these active pkgs 1 ===>', pkgs.active.length) //----------------------------------------
    // console.log('these active pkgs 2 ===>', pkgsview.length) //----------------------------------------

    setOrdersview(prev => ([...prev, ...ordercart.active]));    
    // console.log('these active orders 3 ===>', ordercart.active.length) //----------------------------------------
    // console.log('these active orders 4 ===>', ordersview.length) //----------------------------------------
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
    ordersview, setOrdersview
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