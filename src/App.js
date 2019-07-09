import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./screens/login";
import Admin from "./screens/admin";
import Marketing from "./screens/marketing";
import Firebase from "./lib/firebase";

function isAuthenticated() {
  // TODO make this evaluate something
  return true;
}

class App extends Component {
  render() {
    return (
      <div>
        <Firebase />
        <Router>
          <Switch>
            <Route exact path="/" component={Marketing} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/admin" component={Admin} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const PrivateRoute = ({
  component: Component,
  authenticated,
  redirectUrl,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
export default App;
