import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import Avatar from "./Avatar";
import { signOut } from "../actions/authActions";

function SignedInMenu({ profile, signOut }) {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={signOut}>
            Sign out
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <Avatar profile={profile} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  profile: state.firebase.profile
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInMenu);
