import React, { Component } from "react";
import { Link } from "react-router-dom";
import charities from "./list";
import { thisCause } from "./causes";

let causeHead = '';
export class CauseList extends Component {
    state = {
        value: "",
        show:''
      };
      handleChange = (e) => {
        this.setState({ value: e.currentTarget });
        causeHead = e.currentTarget.text;
        console.log(causeHead);
      };

    render() {
      return (
        <div className="causeList">
          <div className="header">{thisCause}</div>

          <div className="content">
          <ul>
          {charities
            .filter((person) => person.cause.match(thisCause))
            .map((filteredPerson) => (
                <li key={filteredPerson.id} value={filteredPerson.name}>
                <Link className="linked" to="/CauseProf" onClick={this.handleChange}>
                  {filteredPerson.name}
                </Link>
            </li>
            ))}
          </ul>
          </div>
          
        </div>
      );
    }
  }
  
  export default CauseList;
  export { causeHead };