import { FaStar } from "react-icons/fa";
import React, { Component } from "react";
import { searchRating } from "../actions/actionMovie";
import { connect } from "react-redux";

class Rating extends Component {
    state={
        minRate:1,

    }

    changeRate=(newRate)=>{
    this.setState({
        minRate:newRate
    })
    this.props.searchRating(newRate)
}
  render() {
    return (
      <div>
        
        {[1,2,3,4,5].map((star, i) => {
          return star <= (this.props.rate?this.props.rate:this.state.minRate) ? (
            <FaStar
              key={i}
              className="star"
              color="rgb(255, 237, 118)"
              value={this.state.minRate}
              onClick={this.props.animated?() =>this.changeRate(star):null
            }
              size={this.props.size?this.props.size:"40px"}
            ></FaStar>
          ) : (
            <FaStar
              key={i}
              className="star"
              onClick={this.props.animated?() =>this.changeRate(star):null
              } size={this.props.size?this.props.size:"30px"}
            ></FaStar>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
    return{ searchRating:(payload)=>dispatch(searchRating(payload))
    }
}
export default connect(null,mapDispatchToProps)(Rating);
