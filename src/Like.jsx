import React, { Component } from "react";
class Like extends Component {
  state = {
    h: 0,
    heart: "fa fa-heart"
  };
  handlelike = () => {
    if (this.state.h === 0) {
      const h = 1;
      const heart = this.state.heart + "-o";
      this.setState({ heart, h });
    } else if (this.state.h === 1) {
      const h = 0;
      const heart = "fa fa-heart";
      this.setState({ heart, h });
    }
  };
  render() {
    return (
      <i
        className={this.state.heart}
        aria-hidden="true"
        onClick={() => this.handlelike()}
        style={{ cursor: "pointer" }}
      />
    );
  }
}

export default Like;
