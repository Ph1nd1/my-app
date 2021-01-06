import React, { Component } from 'react';
// import charities from './list';
import {Link } from "react-router-dom";

export class Landing extends Component {
    // state={
    //     value:'',
    //     show:''
    //  }

     
    //  handleChange=(e)=>{

    //     // this.setState({value:e.target.value})
        
    //      if(this.setState({value:e.target.value}) === ""){
    //          this.setState({value:null})
    //      } else{this.setState({value:e.target.value})}
        
    //   }
    
    render() {

      return (
      <div className="charity">
        <div className="title">Giving Needs</div>
        <div className="slogan">Giving back is a tap away</div>
        <div className="btnDiv">
            <Link to="/Charities">
                <button className="btn" variant="warning">Find a Charity</button>
            </Link> 
        </div> 
      </div>)
    }
  }

export default Landing;
//person.name == this.state.value