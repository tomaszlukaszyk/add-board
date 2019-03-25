import React, { Component } from "react";
import { connect } from "react-redux";

import { signUp } from "../actions/authActions";

class SignUpForm extends Component {
  state = {
    firstName: "",
    lastName: "",
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
    this.props.signUp(this.state);
  };
  render() {
    return (
      <div className="container row">
        <form onSubmit={this.handleSubmit} className="col s12 m6 offset-m3">
          <h5>Sign up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn purple lighten-3 z-depth-0">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: newUser => dispatch(signUp(newUser))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);
