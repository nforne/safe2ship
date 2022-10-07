import React from "react";
import './scrollup.css';


export default function Scrollup(props) {

  const clickHandler = () => {
    Window.scroll({
      top: 1,
      left: 1,
      behavior: 'smooth'
    });
  }
   
   return (
    <div className="scrollup">
      <hr />
      <div className="col-md-3 col-sm-4" onClick={() => clickHandler()}>
        <i  id="scrollup" className="bi bi-arrow-up-circle fa-10x" ></i>
      </div>

    </div>
   );
 }
