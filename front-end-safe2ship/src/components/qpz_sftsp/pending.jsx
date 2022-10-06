import React from "react";
import Logo1 from "../nav/logo.jpg";
import './home.css';

export default function Pending(props) {
   
//    return (
//     <div className="pending">
//         <div className="spinner-border text-info" role="status">
//             <span className="visually-hidden">Loading...</span>
//         </div>
//         <h1 className="text--semi-bold">{"Pending...."}</h1>
//     </div>
//    );

    return (
        <div className="pending">
            <center>
            <img style={{width: '25%', height: '25%', }} className="App-logo spinner-border text-info" role="status" src={Logo1} alt="logo"/>
            <br />
            <div style={{width: '25%', height: '25%', }}>
                <hr />
                <h1 className="text--semi-bold">{"Loading . . . . "}</h1>
                <hr />
            </div>
            </center>
        </div>
    );
 }
