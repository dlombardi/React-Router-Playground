import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link} from 'react-router';

import App from "./components/App";

Let RouterContainer = React.createClass({
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

ReactDom.render(
  <Router>
    <Route component={RouterContainer}>
      <Route path="/" component={App} />
    </Route>
  </Router>,
  document.getElementById("react-root")
);
