import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SignInForm from "../components/SignInForm";
class Login extends Component {
  render() {
    return (
      <div>
        <SignInForm />{" "}
      </div>
    );
  }
}
export default withRouter(Login);
