import React, { Component } from "react";
import { connect } from "react-redux";
import "./movies.css";
import Rating from "./Rating";
import {removeMovie}from '../actions/actionMovie'
import {Button} from 'react-bootstrap'
import AddModal from './AddModal'
import { Link } from 'react-router-dom'



class MovieCard extends Component {

filterMovies=()=>{
  return this.props.moviesList.filter(film=>film.name
    .toLowerCase()
    .trim()
    .includes(this.props.inputSearch.toLowerCase())&&film.rate>= this.props.ratingSearch)
}

  render() {
    return (
      <div className="movies-container">
        
        {this.filterMovies().map((film, i) => (
          <div className="card-container" key={i}>
            <Link to={`/descriptionMovie/${film.id}`}>
            <img className='img-movie' src={film.img} alt={film.name} />
            </Link>
            <div className="caption-movie">
              <Rating animated={false} rate={film.rate} size={"20px"} />
              <p>{film.name}</p>
              <div className='container-btn'>
                <Button variant="outline-warning" onClick={()=>this.props.removeMovie(film.id)}>Remove</Button>{' '}
                <AddModal modalType='Edit' film={film}></AddModal>
              </div>
            </div>
          </div>
        ))}
        
        <AddModal modalType='Add'></AddModal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    moviesList: state.Movies.moviesList,
    inputSearch:state.Movies.inputSearch,
    ratingSearch:state.Movies.ratingSearch,
  };
};

const mapDispatchToProps=(dispatch)=>{
  return{ removeMovie:(payload)=>dispatch(removeMovie(payload)), 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieCard);
