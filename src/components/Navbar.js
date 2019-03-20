import React from "react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo">
            AddBoard
          </Link>
          <SignedInMenu />
          <SignedOutMenu />
        </div>
      </nav>
    </div>
  );
}
