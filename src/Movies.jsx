import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import MoviesTable from "./MoviesTable";
import Pagination from "./pagination";
import _ from "lodash";
import { getGenres } from "./services/fakeGenreService";

import ListGroup from "./ListGroup";
class Movies extends Component {
  state = {
    movies: [],
    pageSize: 3,
    currentPage: 0,
    genre: [],
    selected_genre: 0,
    sortColumn: { path: "title", order: "asc" },
    sort: "asc"
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
    this.setState({ currentPage: 1 });
    this.setState({ selected_genre: genre });
  };
  handleSort = sortColum => {
    this.setState({ sortColumn: sortColum });
  };
  render() {
    const count = this.state.movies.length;
    const {
      pageSize,
      currentPage,
      movies,
      selected_genre,
      sortColumn
    } = this.state;
    if (this.state.movies.length === 0) {
      return <h2>There is no Movies Available</h2>;
    }
    const filtered =
      selected_genre && selected_genre._id
        ? movies.filter(f => f.genre._id === this.state.selected_genre._id)
        : movies;
    const sortedList = _.orderBy(
      filtered,
      [sortColumn.path],
      [sortColumn.order]
    );
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
          <MoviesTable
            movies={sortedList}
            onDelete={this.onDelete}
            currentPage={currentPage}
            pageSize={pageSize}
            onSort={this.handleSort}
            sortColumn={this.state.sortColumn}
          />
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
