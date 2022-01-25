import React from "react";
import './home.css';

export default function Pending(props) {
   
   return (
    <div className="pending">
        <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <h1 className="text--semi-bold">{"Pending...."}</h1>
    </div>
   );
 }
