import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import Avatar from "./Avatar";
import { deleteAd } from "../actions/adActions";

function Advertisement({ ad, adId, user, auth, deleteAd }) {
  if (!ad || !user) {
    return <h5 className="section center-align">Loading...</h5>;
  }
  const { firstName, lastName } = user;
  const ownerActions =
    auth.isEmpty || auth.uid !== ad.authorId ? null : (
      <div className="card-action">
        <Link to={"/edit-ad/" + adId} className="blue-text">
          Edit
        </Link>
        <Link to="/" className="blue-text" onClick={() => deleteAd(adId)}>
          Delete
        </Link>
      </div>
    );
  return (
    <div className="card hoverable">
      <div className="card-content">
        <Link to="/">
          <Avatar profile={user} />
        </Link>
        <span className="posted-by grey-text">
          {`${firstName} ${lastName}, ${moment(
            ad.postedAt.toDate()
          ).calendar()}`}
        </span>
      </div>
      <div className="card-action">
        <span className="card-title">{ad.title}</span>
        <p>{ad.content}</p>
      </div>
      {ownerActions}
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const mapDispatchToProps = dispatch => ({
  deleteAd: adId => dispatch(deleteAd(adId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Advertisement);
