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
import './App.css';


const App = () => {
  
  const user_init = {user: [{}], packages: [{}], orders:[{}]};

  const [hview, setHview] = useState({v: 'home', hvtracker: []})
  const [user, setUser] = useState({...user_init})
  const [error, setError] = useState('')

  const hv_handler = (view) => {
    setHview(prev => ({...prev, v: view }))
  }

  const errorHandler = (errorMessage) => {

    setError(() => [<p key={'1'}>`${errorMessage}`</p>])
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
    udata:{...user}
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

        {hview.v === "signIn" && <SignIn {...props}/>}
        {hview.v === "signUp" && <SignUp {...props}/>}
        {hview.v === "customerHome" && <CustomerHome {...props}/>}
        {hview.v === "shipperHome" && <ShipperHome {...props}/>}
        {hview.v === "packagePage" && <Package {...props}/>}
        {hview.v === "postPackage" && <PostPackage {...props}/>}
      </section>



    </div>
  );
}

export default App;
