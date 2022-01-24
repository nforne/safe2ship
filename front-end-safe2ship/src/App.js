import Package from "./pages/PackagePage";
import ShipperHome from "./pages/ShipperHome";
import CustomerHome from "./pages/CustomerHome";
import PostPackage from "./pages/PostPackage";


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
