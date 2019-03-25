import React, { Component } from "react";
import { connect } from "react-redux";

import { createAdd } from "../actions/addActions";

class CreateAddForm extends Component {
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
    this.props.createAdd(this.state);
  };
  render() {
    return (
      <div className="container row">
        <form onSubmit={this.handleSubmit} className="col s12 m6 offset-m3">
          <h5>Post new add</h5>
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
    createAdd: add => dispatch(createAdd(add))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateAddForm);
