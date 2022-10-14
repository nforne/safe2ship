import { useState, useEffect } from "react";
import { ScrollTo } from "react-scroll-to";

import Nav from "./components/nav";
import Home from "./components/home"
import Pending from "./components/home/pending";
import Scrollup from "./components/scrollup";

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
  const [pkg, setPkg] = useState({});
  const [error, setError] = useState([]);
  const [errorstate, setErrorstate] = useState([]);

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
    setPkgsview(prev => ([...prev, ...pkgs.active]))
    setOrdersview(prev => ([...prev, ...ordercart.active]));
  }


  const hv_handler = (view) => {
    setHview(prev => ({...prev, v: view }))
  }

 const set = {timeout: ''};
 const errorHandler = (errorMessage) => {
   const timeoutHandler = (a) => { // a === 1 to set and a === 0 to unset the timeout
     if (a === 1) {
        set['timeout'] = setTimeout(() => {setError(() => []); setErrorstate(() => [])}, 10000);
      } else if (a === 0) {
        const { timeout } = set;
        clearTimeout(timeout);
      } 
    }

    if (!errorstate.includes(errorMessage)) {
      if (errorstate.length !== 0) timeoutHandler(0);
      setErrorstate((prev) => ([...prev, errorMessage]));
      setError((prev) => ([...prev, <p key={errorstate.length + 1}>{errorMessage}</p>]));
    } else if (errorstate.includes(errorMessage)) {
      timeoutHandler(0);
    }
    timeoutHandler(1)
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
      
      <hr className='H-line'/>
      

      {error.length > 0 &&  <div className='errmsgs'>{error}</div>}
      
      <ScrollTo>
        {({ scroll }) => error.length > 0 || hview.v === "home" ? scroll({ x: 1, y:1, smooth: true }): '' }
      </ScrollTo>
    
      <hr/>
      <section className='main'>
        {hview.v === 'pending' &&  <Pending/>}
        {hview.v === "home" && <Home  {...props} />}
        {hview.v === "profile" &&<Profile  {...user.user[0]} {...props} />}

        {hview.v === "signIn" && <SignIn {...props}/>}
        {hview.v === "signUp" && <SignUp {...props}/>}
        {hview.v === "customerHome" && <CustomerHome  {...props}/>}
        {hview.v === "shipperHome" && <ShipperHome  {...props}/>}
        {hview.v === "packagePage" && <Package {...props}/>}
        {hview.v === "postPackage" && <PostPackage {...props}/>}
      </section>
      <Scrollup/> 
    </div>
  );
}

export default App;
