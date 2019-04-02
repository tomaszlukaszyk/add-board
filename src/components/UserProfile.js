import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import Advertisement from "./Advertisement";
import Avatar from "./Avatar";

function UserProfile({ ads, user }) {
  if (!ads || !user) {
    return <h5 className="section center-align">Loading...</h5>;
  }
  const postedAds = ads.map(ad => (
    <Link to={"/ad/" + ad.id} className="black-text">
      <Advertisement key={ad.id} ad={ad} adId={ad.id} user={user} />
    </Link>
  ));
  return (
    <div>
      <div className="dashboard container row">
        <div className="col s12 m6 offset-m3">
          <div className="center-align">
            <Avatar profile={user} big={true} />
            <h4>{`${user.firstName} ${user.lastName}`}</h4>
          </div>
          <h6>Posted ads:</h6>
          {postedAds}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null;
  const ads =
    state.firestore.ordered.ads &&
    state.firestore.ordered.ads.filter(ad => ad.authorId === id);
  return {
    ads,
    user
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "ads", orderBy: ["postedAt", "desc"] },
    { collection: "users" }
  ])
)(UserProfile);
