import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedOutMenu() {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/signin">Sign in</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign up</NavLink>
        </li>
      </ul>
    </div>
  );
}
