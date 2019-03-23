import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Advertisement from "./Advertisement";

class Dashboard extends Component {
  render() {
    const ads = this.props.ads.map(add => (
      <Advertisement key={add.id} add={add} />
    ));
    return (
      <div className="dashboard container row">
        <div className="col s12 m6 offset-m3">{ads}</div>
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

const mapStateToProps = state => ({
  ads: state.addReducer.ads
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(Dashboard);
