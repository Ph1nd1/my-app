import React, { Component } from "react";
import { Link } from "react-router-dom";
import charities from "./list";

let head = "";

export class CharityList extends Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({ value: e.currentTarget });
    head = e.currentTarget.text;
    console.log(head);
  };

  render() {
    return (
      <div className="list">
        <div className="head">Header</div>
        <div className="body">
          <ul>
            {charities.map((p) => (
              <li key={p.id} value={p.name}>
                <Link to="/Profile"  onClick={this.handleChange}>
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

export default CharityList;
export { head };
// <Link to={{ pathname: "http://www.google.com" }} target="_blank">link</Link>
//https://www.brandsouthafrica.com/south-africa-fast-facts/social-facts/south-african-charities-and-community-care
//http://www.charitysa.co.za/alphabetical-list-of-organisations
