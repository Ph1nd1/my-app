import React, { Component } from "react";
// import { Link } from "react-router-dom";
import charities from "./list";
// import { thisCause } from "./causes";

export class CauseProfile extends Component {
    render() {
      return (
        <div className="causeList">
          <div className="header">Causes</div>

          <div className="content">
          <ul>
          { charities.filter(charity => charity.location.toLowerCase().match(this.state.value.toLowerCase())).map((p) => (
              <li key={p.id} value={p.name}>
                <Link className="linked" to="/Profile"  onClick={this.handleChange}>
                  {p.name}
                </Link>
              </li>
            ))} 
          </ul>
          </div>
        </div>
      );
    }
  }
  
  export default CauseProfile;