import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movies from "./Movies";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Players from "./players";
ReactDOM.render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,
  <Players subreddit="reactjs" />,
  document.getElementById("root")
);
serviceWorker.unregister();
