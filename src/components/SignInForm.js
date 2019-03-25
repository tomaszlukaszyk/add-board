import React, { Component } from "react";
import { connect } from "react-redux";

import { signIn } from "../actions/authActions";

class SignInForm extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    return (
      <div className="container row">
        <form onSubmit={this.handleSubmit} className="col s12 m6 offset-m3">
          <h5>Sign in</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn purple lighten-3 z-depth-0">Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: credentials => dispatch(signIn(credentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignInForm);
