import React, { Component } from "react";
import axios from "axios";
class Players extends Component {
  state = {
    isLoaded: true,
    items: {},
    posts: []
  };
  componentDidMount() {
    axios.get(`https://www.balldontlie.io/api/v1/players`).then(res => {
      const posts = res.data.data;
      this.setState({ posts });
      console.log(posts);
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>{post.first_name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Players;
