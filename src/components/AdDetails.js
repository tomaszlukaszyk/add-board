import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import Advertisement from "./Advertisement";
import AddComentForm from "./AddComentForm";
import Comment from "./Comment";

function AdDetails({ ad, id, users }) {
  if (!ad || !users) {
    return <h5 className="section center-align">Loading...</h5>;
  }

  const comments =
    ad.comments && ad.comments.length ? (
      <ul className="collection">
        {ad.comments.map(comment => (
          <Comment comment={comment} profile={users[comment.authorId]} />
        ))}
      </ul>
    ) : (
      <p>No comments yet</p>
    );

  return (
    <div className="dashboard container row">
      <div className="col s12 m6 offset-m3">
        <Advertisement ad={ad} adId={id} user={users[ad.authorId]} />
        <AddComentForm adId={id} />
        <h6>Comments:</h6>
        {comments}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const ads = state.firestore.data.ads;
  const ad = ads ? ads[id] : null;
  return {
    ad,
    id,
    users: state.firestore.data.users
  };
};

const mapDispatchToProps = {};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "ads" }, { collection: "users" }])
)(AdDetails);
