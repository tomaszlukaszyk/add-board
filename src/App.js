import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import CreateAddForm from "./components/CreateAddForm";

class App extends Component {
  getComponent(isProtected, component) {
    const { auth } = this.props;

    if (isProtected) {
      return auth.isEmpty ? SignInForm : component;
    } else {
      return auth.isEmpty ? component : Dashboard;
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              component={this.getComponent(true, Dashboard)}
            />
            <Route
              path="/signin"
              component={this.getComponent(false, SignInForm)}
            />
            <Route
              path="/signup"
              component={this.getComponent(false, SignUpForm)}
            />
            <Route
              path="/create-add"
              component={this.getComponent(true, CreateAddForm)}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(App);
