import React, { Component } from "react";
import { Link } from "react-router-dom";
// import charities from "./list";
let causeArray = ['Refuge Charities', 'Education Charities', 'Shelter and Homeless Services', 'Food Banks, Food Pantries and Food Distribution','Health Charities', 'Arts, Culture and Humanities Charities' ];
let thisCause = '';

export class Causes extends Component {
    state = {
        value: "",
        show:''
      };
      handleChange = (e) => {
        this.setState({ value: e.currentTarget });
        thisCause = e.currentTarget.text;
        console.log(thisCause);
      };

    render() {
      return (
        <div className="causeList">
          <div className="header">Causes</div>

          <div className="content">
          <ul>
            { causeArray.map((p) => (
              <li key={p} value={p}>
                <Link className="linked" to="/Profile"  onClick={this.handleChange}>
                  {p}
                </Link>
              </li>
            ))} 
          </ul>
          </div>
        </div>
      );
    }
  }
  
  export default Causes;
  export { thisCause };