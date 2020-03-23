import "./header.css";
import React, { Component } from "react";
import {searchMovie} from '../actions/actionMovie'
import { connect } from "react-redux";
import Rating from './Rating'


class Header extends Component {

  search=(e)=>{
    this.props.searchMovie(e.target.value)
  }

  render() {
    return (
      <div className="header">
        <h1><span id="egy">EGY</span> <span id="best">BEST</span></h1>
        
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onChange={this.search}
          />
          <div className="rating">
            <Rating animated={true} />
          </div>

      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{ searchMovie:(payload)=>dispatch(searchMovie(payload))
  }

}
export default connect(null,mapDispatchToProps)(Header);
