import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import Like from "./Like";
import Pagination from "./pagination";
import { getGenres } from "./services/fakeGenreService";
import { paginate } from "./utils/paginate";
import ListGroup from "./ListGroup";
class Movies extends Component {
  state = {
    movies: [],
    pageSize: 3,
    currentPage: 0,
    genre: [],
    selected_genre: 0
  };
  componentDidMount() {
    const genre = [{ name: "All Genre" }, ...getGenres()];
    this.setState({ movies: getMovies(), genre: genre });
  }
  onDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handlegenreSelect = genre => {
    this.setState({ selected_genre: genre });
    console.log(genre);
  };
  render() {
    const count = this.state.movies.length;
    const { pageSize, currentPage, movies, selected_genre } = this.state;
    if (this.state.movies.length === 0) {
      return <h2>There is no Movies Available</h2>;
    }
    const filtered =
      selected_genre && selected_genre._id
        ? movies.filter(f => f.genre._id === this.state.selected_genre._id)
        : movies;
    const movie = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-1" />
        <div className="col-2">
          <ListGroup
            item={this.state.genre}
            selecteditem={this.state.selected_genre}
            ongenreselect={this.handlegenreSelect}
            textProperty="name"
            valueProperty="_id"
          />
        </div>
        <div className="col">
          <p>Showing {count} movies in database</p>
          <h1 id="head">Movies</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movie.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>
                    <Like liked={"true"} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        this.onDelete(movie);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
