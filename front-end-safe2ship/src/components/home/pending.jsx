import React from "react";
import './home.css';

export default function Pending(props) {
   
   return (
    <div className="pending">
        <img style={{width: '50%', height: '50%', }}
            className="App-logo"
            src="./logo.svg"
            alt="logo"
        />
        <h1 className="text--semi-bold">{"Pending...."}</h1>
    </div>
   );
 }
