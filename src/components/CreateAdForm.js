import React, { Component } from "react";
import { connect } from "react-redux";

import { createAd } from "../actions/adActions";

class CreateAdForm extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createAd(this.state);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container row">
        <form onSubmit={this.handleSubmit} className="col s12 m6 offset-m3">
          <h5>Post new ad</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn purple lighten-3 z-depth-0">Post</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAd: ad => dispatch(createAd(ad))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateAdForm);
