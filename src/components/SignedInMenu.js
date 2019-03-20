import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedInMenu() {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Sign out</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating">
            NN
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
