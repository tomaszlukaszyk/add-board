import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";

import { updateAd } from "../actions/adActions";

class EditAdForm extends Component {
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
    this.props.updateAd({ ad: this.state, adId: this.props.id });
    this.props.history.push("/");
  };
  updateState = () => {
    this.setState({
      title: this.props.ad.title,
      content: this.props.ad.content
    });
  };
  componentDidMount = () => {
    if (this.props.ad) {
      this.updateState();
    }
  };
  componentDidUpdate = prevProps => {
    if (this.props.ad !== prevProps.ad) {
      this.updateState();
    }
  };
  render() {
    return (
      <div className="container row">
        <form onSubmit={this.handleSubmit} className="col s12 m6 offset-m3">
          <h5>Edit ad</h5>
          <div className="input-field">
            <label htmlFor="title" className="active">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content" className="active">
              Content
            </label>
            <textarea
              id="content"
              className="materialize-textarea active"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn purple lighten-3 z-depth-0">Post</button>
            <Link to="/" className="btn purple lighten-3 z-depth-0 right">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const ads = state.firestore.data.ads;
  const ad = ads ? ads[id] : null;
  return {
    ad,
    id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAd: ad => dispatch(updateAd(ad))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "ads" }])
)(EditAdForm);
