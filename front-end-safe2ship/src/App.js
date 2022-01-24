import { useState } from "react";
import Package from "./pages/PackagePage";
import ShipperHome from "./pages/ShipperHome";
import CustomerHome from "./pages/CustomerHome";
import PostPackage from "./pages/PostPackage";
import Nav from "./components/nav";
import Home from "./components/home"


const App = () => {
  const [hview, setHview] = useState({v: 'home', hvtracker: []})

  const [error, setError] = useState('')

  const errorHandler = (errorMessage) => {

    setError(() => [<p key={'1'}>`${errorMessage}`</p>])
    setTimeout(() => {
      setError(() => [<p key={'2'}></p>]);
    }, 120000)
  }

  return (
    <div className="App">
      
      <Nav/>
      <hr className='line'/>
      <br></br>
      
        <div className='errmsgs'>
          {error}
        </div>

      <hr/>
      <section className='main'>
        <Home errorHandler={errorHandler}/>
        
      </section>

    </div>
  );
}

export default App;
