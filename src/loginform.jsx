import React, { Component } from "react";
class Loginform extends Component {
  state = {
    account: { username: "", password: "" },
    errors: null
  };
  username = React.createRef();
  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is Required";
    if (account.password.trim() === "")
      errors.password = "Password is Required";
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handlesubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    console.log(this.username.current.value);
  };
  componentDidMount() {
    this.username.current.focus();
  }
  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handlesubmit}>
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            <input
              onChange={this.handleChange}
              value={this.state.account.username}
              ref={this.username}
              name="username"
              id="username"
              type="text"
              className="form-control"
            />
            {this.state.errors && (
              <div className="alert alert-danger">
                {this.state.errors.username}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              value={this.state.account.password}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
            {this.state.errors && (
              <div className="alert alert-danger">
                {this.state.errors.password}
              </div>
            )}
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
export default Loginform;
