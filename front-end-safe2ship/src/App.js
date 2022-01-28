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
import './App.css'


// client-side
// import  io  from "socket.io-client";
import  io  from "socket.io-client";

const URL = "http://localhost:3001";




const App = () => {

  const [conn, setConn ] = useState('');
  useEffect(() => {
    
    // const socket = io(URL, {
    //   withCredentials: false,
    // });

    const socket = io(URL, {
      withCredentials: false,
    });

  }, []);

  const [hview, setHview] = useState({v: 'home', hvtracker: []})

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

  return (
    <div className="App">
      
      <Nav hv_handler={hv_handler}/>
      <hr className='line'/>
      <br></br>
      
        <div className='errmsgs'>
          {error}
        </div>

      <hr/>
      <section className='main'>
        {hview.v === 'pending' &&  <Pending/>}
        {hview.v === "home" &&<Home  hv_handler={hv_handler} errorHandler={errorHandler}/>}

        {hview.v === "signIn" && <SignIn hv_handler={hv_handler} errorHandler={errorHandler}/>}
        {hview.v === "signUp" && <SignUp hv_handler={hv_handler} errorHandler={errorHandler}/>}
        
      </section>

    </div>
  );
}

export default App;
