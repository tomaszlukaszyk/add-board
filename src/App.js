import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import CreateAdForm from "./components/CreateAdForm";
import AdDetails from "./components/AdDetails";
import EditAdForm from "./components/EditAdForm";
import UserProfile from "./components/UserProfile";

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
              path="/create-ad"
              component={this.getComponent(true, CreateAdForm)}
            />
            <Route
              path="/ad/:id"
              component={this.getComponent(true, AdDetails)}
            />
            <Route
              path="/edit-ad/:id"
              component={this.getComponent(true, EditAdForm)}
            />
            <Route
              path="/user/:id"
              component={this.getComponent(true, UserProfile)}
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
