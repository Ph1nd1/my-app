import React, { Component } from 'react';
import {Link } from "react-router-dom";

export class Landing extends Component {
    render() {

      return (
      <div className="charity">
        <div className="title">Giving Needs</div>
        <div className="slogan">Giving back is a tap away</div>
        <div className="btnDiv">
            <Link to="/Charities">
                <button className="btn" variant="warning">Find a Charity</button>
            </Link> 
        </div> 

        <div className="btnDiv2">
            <Link to="/Causes">
                <button className="btn" variant="warning">Find a Cause</button>
            </Link> 
        </div> 

        <div className="footer">Giving Needs - South Africa</div>
      </div>)
    }
  }

export default Landing;