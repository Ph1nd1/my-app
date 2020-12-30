import React, { Component } from "react";
import { head } from "./charityList";
import charities from "./list";

export class Profile extends Component {
  render() {
    return (
      <div className="charProf">
        <div className="head" id="head" value={head}>
          {head}
        </div>
        <div className="summary">
          {charities
            .filter((person) => person.name.match(head))
            .map((filteredPerson) => (
              <p>{filteredPerson.summary}</p>
            ))}
        </div>
        <div className="contact">
          {charities
            .filter((person) => person.name.match(head))
            .map((filteredPerson) => (
              <p>{filteredPerson.contact}</p>
            ))}
        </div>
      </div>
    );
  }
}

export default Profile;
