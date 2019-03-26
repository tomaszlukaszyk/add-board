import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Avatar from "./Avatar";

function Advertisement({ ad, user, auth }) {
  const { firstName, lastName } = user;
  const ownerActions =
    auth.isEmpty || auth.uid !== ad.authorId ? null : (
      <React.Fragment>
        <Link to="/" className="blue-text">
          Edit
        </Link>
        <Link to="/" className="blue-text">
          Delete
        </Link>
      </React.Fragment>
    );
  return (
    <div className="card hoverable">
      <div className="card-content">
        <Link to="/">
          <Avatar profile={user} />
        </Link>
        <span className="posted-by grey-text">
          {`${firstName} ${lastName}`}, 12 sep 2018
        </span>
      </div>
      <div className="card-action">
        <span className="card-title">{ad.title}</span>
        <p>{ad.content}</p>
      </div>
      <div className="card-action">
        <Link to="/" className="blue-text">
          Comment
        </Link>
        {ownerActions}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(Advertisement);
