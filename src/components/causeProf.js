import React, { Component } from "react";
import { causeHead } from "./causeList";
import charities from "./list";

export class CauseProf extends Component {
  render() {
    return (
      <div className="charProf">
        <div className="head" id="head" value={causeHead}>
          <p>{causeHead}</p> 
        </div>
        <div className="summary">
          {charities
            .filter((person) => person.name.match(causeHead))
            .map((filteredPerson) => (
              <p>{filteredPerson.summary}</p>
            ))}
        </div>
        <div className="contact"><p>Ways to help</p></div>
        <div className="contact">
          {charities
            .filter((person) => person.name.match(causeHead))
            .map((filteredPerson) => (
              <a target="_blank" href={filteredPerson.contact} >Lend a hand</a>
            ))}
        </div>
        <br/>
        <div className="contact">
          {charities
            .filter((person) => person.name.match(causeHead))
            .map((filteredPerson) => (
              <a target="_blank" href={filteredPerson.donate} >Donate</a>
            ))}
        </div>
      </div>
    );
  }
}

export default CauseProf;
