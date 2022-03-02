/** @format */

import React from "react";
import "./Body.css";
import icon from "./IMG/icon-music.svg";

const Body = () => {
  return (
    <div className='Body'>
      <h1>Order Summary</h1>
      <p className='para'>
        You can now listen to million of songs,<br></br> audiobooks, and podcast
        on any device<br></br> anywhere you like
      </p>

      <div className='Body1'>
        <img id='musicicon' src={icon} alt='' />
        <p>
          <span id='annuel'>
            <b> Annual Plan</b>
          </span>
          <br></br>
          <span id='annual2'>$59.99/year</span>
        </p>

        <a id='change' href=''>
          <b>Change</b>
        </a>
      </div>
      <div className='clickbutton'>
        <h2 id='buttontext'>proceed to payment</h2>
      </div>
      <footer>
        <h2 id='footer'>Cancle Order</h2>
      </footer>
    </div>
  );
};

export default Body;
