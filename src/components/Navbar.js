import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

function Navbar({ auth }) {
  const menu = auth.isEmpty ? <SignedOutMenu /> : <SignedInMenu />;
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper light-blue darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            AdBoard
          </Link>
          {menu}
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(Navbar);
