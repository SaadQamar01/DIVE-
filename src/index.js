import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import indexRoutes from "routes/index.jsx";
import Root from './Root.jsx'
import "assets/scss/material-kit-react.css?v=1.1.0";

var hist = createBrowserHistory();

ReactDOM.render(
<Root/>,
  document.getElementById("root")
);
