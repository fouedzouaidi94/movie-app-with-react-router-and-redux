import React from "react";
import Rating from "./Rating";
import { connect } from "react-redux";

function DescriptionMovie({ match, moviesList }) {
  const film = moviesList.filter(
    movie => movie.id === parseInt(match.params.id)
  );
  return (
    <div>
      {film.map((movie, i) => (
        <div className="container-description" key={i}>

          <div className="description">
            <img src={movie.img} alt=""></img>
            <div className="caption-description">
              <h2>{movie.name}</h2>
              <Rating animated={false} rate={movie.rate} size={"20px"} />
              <h6>Release : {movie.year} </h6>
              <h6>Genre : {movie.genre} </h6>
              <h6>Runtime : {movie.runtime} </h6>
              <p>{movie.description}</p>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return { moviesList: state.Movies.moviesList };
};

export default connect(mapStateToProps)(DescriptionMovie);
