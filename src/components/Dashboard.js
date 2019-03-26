import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import Advertisement from "./Advertisement";

class Dashboard extends Component {
  render() {
    const { ads, users } = this.props;

    if (!ads || !users) {
      return <h5 className="section center-align">Loading...</h5>;
    }

    if (!ads.length) {
      return <h5 className="section center-align">No ads to display</h5>;
    }

    const adsList = ads.map(add => (
      <Advertisement key={add.id} add={add} user={users[add.authorId]} />
    ));
    return (
      <div className="dashboard container row">
        <div className="col s12 m6 offset-m3">{adsList}</div>
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

const mapStateToProps = state => {
  return {
    ads: state.firestore.ordered.ads,
    users: state.firestore.data.users
  };
};

// const mapDispatchToProps = {

// }

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "ads" }, { collection: "users" }])
)(Dashboard);
