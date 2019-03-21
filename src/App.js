import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signin" component={SignInForm} />
            <Route path="/signup" component={SignUpForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
