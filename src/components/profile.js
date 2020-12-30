import React, { Component } from "react";
import { head } from "./charityList";
import charities from "./list";

export class Profile extends Component {
  render() {
    return (
      <div className="charProf">
        <div className="head" id="head" value={head}>
          <p>{head}</p> 
        </div>
        <div className="summary">
          {charities
            .filter((person) => person.name.match(head))
            .map((filteredPerson) => (
              <p>{filteredPerson.summary}</p>
            ))}
        </div>
        <div className="contact">
            <p>More details on</p>
          {charities
            .filter((person) => person.name.match(head))
            .map((filteredPerson) => (
              <a target="_blank" href={filteredPerson.contact} >{filteredPerson.name} Website</a>
            ))}
        </div>
      </div>
    );
  }
}

export default Profile;
