import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
class Movies extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    if (this.state.movies.length === 0) {
      return <h2>There is no Movies Available</h2>;
    }
    return (
      <React.Fragment>
        <h1 id="head">Movies</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Number In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
