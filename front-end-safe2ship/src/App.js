import React from 'react';
import { useState } from 'react';


import Nav from './components/nav';
import Home from './components/home';


import './App.css';


const App = () => {
  const [view, setView] = useState({v:'', vtracker: []})

  return (
    <div className="App">
      
      <Nav/>
      <hr className='line'/>
      <br></br>
      
        <div className='errmsgs'>
        </div>

      <hr/>
      <section className='main'>
        <Home/>
        
      </section>

    </div>
  );
}

export default App;
