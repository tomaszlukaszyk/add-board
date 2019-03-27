import React, { Component } from "react";
import { connect } from "react-redux";

import { addComment } from "../actions/adActions";

class AddComentForm extends Component {
  state = {
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { adId } = this.props;
    this.props.addComment({ comment: this.state, adId });
    this.setState({
      content: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h6>Add a comment:</h6>
        <div className="input-field">
          <label htmlFor="content">Your comment</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </div>
        <div className="input-field">
          <button className="btn purple lighten-3 z-depth-0">
            Add comment
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: comment => dispatch(addComment(comment))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddComentForm);
