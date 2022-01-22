import React from 'react';

import Nav from './components/nav';
import Home from './components/home';


import './App.css';


const App = () => {
  let error = ""
  const errorHandler = (errorMessage) => {
    error = errorMessage;
    setTimeout(() => {
      error = "";
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
