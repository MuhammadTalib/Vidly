import Like from "./Like";
import { paginate } from "./utils/paginate";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  raiseSort = path => {
    console.log("raisesort");
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, onDelete, currentPage, pageSize, onSort } = this.props;
    const movie = paginate(movies, currentPage, pageSize);

    return (
      <table className="table">
        <thead>
          <tr>
            <th
              scope="col"
              onClick={() => this.raiseSort("title")}
              style={{ cursor: "pointer" }}
            >
              Title
            </th>
            <th
              scope="col"
              onClick={() => this.raiseSort("genre.name")}
              style={{ cursor: "pointer" }}
            >
              Genre
            </th>
            <th
              scope="col"
              onClick={() => this.raiseSort("numberInStock")}
              style={{ cursor: "pointer" }}
            >
              Stock
            </th>
            <th
              onClick={() => this.raiseSort("numberInStock")}
              style={{ cursor: "pointer" }}
            >
              Rate
            </th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {movie.map(movie => (
            <tr key={movie._id}>
              <td>
                <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
              </td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={"true"} />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    onDelete(movie);
                  }}
                >
                  Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
