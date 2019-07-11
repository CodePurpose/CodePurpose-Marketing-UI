import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { withFirebase } from "./components/Firebase";
import Login from "./screens/login";
import Admin from "./screens/admin";
import Marketing from "./screens/marketing";

class App extends Component {
  state = {
    authUser: null
  };

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Marketing} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute
              exact
              path="/admin"
              component={Admin}
              authenticated={this.state.authUser}
            />
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
      authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
export default withFirebase(App);
