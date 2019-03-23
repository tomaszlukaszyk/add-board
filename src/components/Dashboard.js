import React, { Component } from "react";
import Advertisement from "./Advertisement";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container row">
        <div className="col s12 m6 offset-m3">
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
        </div>
        <div className="fixed-action-btn">
          <Link
            to="/create-add"
            className="btn-floating btn-large purple lighten-3"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}
