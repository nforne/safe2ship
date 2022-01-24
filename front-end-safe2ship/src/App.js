import React, { useState } from 'react';

import Nav from './components/nav';
import Home from './components/home';


import './App.css';


const App = () => {
  const [hview, setHview] = useState({v: 'home', hvtracker: []})
  const [error, setError] = useState('')
  const errorHandler = (errorMessage) => {
    setError(() => errorMessage)
    setTimeout(() => {
      setError(() => '');
    }, 120000)
  }

  return (
    <div className="App">
      
      <Nav/>
      <hr className='line'/>
      <br></br>
      
        <div className='errmsgs'>
          <p>`${error}`</p>
        </div>

      <hr/>
      <section className='main'>
        <Home errorHandler={errorHandler}/>
        
      </section>

    </div>
  );
}

export default App;
