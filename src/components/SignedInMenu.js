import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../actions/authActions";

function SignedInMenu(props) {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={props.signOut}>
            Sign out
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating purple lighten-3">
            NN
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  null,
  mapDispatchToProps
)(SignedInMenu);
