import React, { Component } from "react";
import { Link } from "react-router-dom";
import charities from "./list";

let head = "";

export class CharityList extends Component {
  state = {
    value: "",
    show:''
  };
  handleChange = (e) => {
    this.setState({ value: e.currentTarget });
    head = e.currentTarget.text;
    console.log(head);
  };

 handleChange2=(e)=>{
    this.setState({value:e.target.value});

  }

  render() {
    return (
      <div className="list">
        <div className="header">Charities</div>

        <div className="search">
            {/*Search Input*/}
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value={this.state.value} onChange={this.handleChange2}
						id="search-input"
						placeholder="Search..."
					/>
				</label>
        </div>

        <div className="content">
          <ul>
            {charities.filter(person => person.name.toLowerCase().match(this.state.value.toLowerCase())).map((p) => (
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

export default CharityList;
export { head };
// <Link to={{ pathname: "http://www.google.com" }} target="_blank">link</Link>
//https://www.brandsouthafrica.com/south-africa-fast-facts/social-facts/south-african-charities-and-community-care
//http://www.charitysa.co.za/alphabetical-list-of-organisations
