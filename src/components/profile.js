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
            <p>Ways to help out</p>
            {charities
            .filter((person) => person.name.match(head))
            .map((filteredPerson) => (
              <a target="_blank" href={filteredPerson.contact} >Lend a hand</a>
            ))}
        </div>
        <br/>
        <div className="contact">
          {charities
            .filter((person) => person.name.match(head))
            .map((filteredPerson) => (
              <a target="_blank" href={filteredPerson.donate} >Donate</a>
            ))}
        </div>
      </div>
    );
  }
}

export default Profile;
