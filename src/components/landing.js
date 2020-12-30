import React, { Component } from 'react';
import charities from './list';
import {Link } from "react-router-dom";


export class Landing extends Component {
    state={
        value:null,
        show:''
     }
     handleChange=(e)=>{

        // this.setState({value:e.target.value})
        
         if(this.setState({value:e.target.value}) === ""){
             this.setState({value:null})
         } else{this.setState({value:e.target.value})}
        
      }
    
    render() {

      return (
      <div className="charity">
        <div className="btnDiv">
            <Link to="/Charities">
                <button className="btn" variant="warning">All Charities</button>
            </Link> 
        </div> 
        <div className="search">
            {/*Search Input*/}
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value={this.state.value} onChange={this.handleChange}
						id="search-input"
						placeholder="Search..."
					/>
					<i className="fa fa-search search-icon"/>
				</label>
        </div>
        <div>
      {charities.filter(person => person.name.match(this.state.value)).map(filteredPerson => (
        <li>
          {filteredPerson.name}
        </li>
      ))}
    </div>
      </div>)
    }
  }

export default Landing;
//person.name == this.state.value