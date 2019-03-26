import React from "react";
import { Link } from "react-router-dom";

import Avatar from "./Avatar";

export default function Advertisement({ add, user }) {
  const { firstName, lastName } = user;
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
        <span className="card-title">{add.title}</span>
        <p>{add.content}</p>
      </div>
      <div className="card-action">
        <Link to="/" className="blue-text">
          Save
        </Link>
        <Link to="/" className="blue-text">
          Message
        </Link>
      </div>
    </div>
  );
}
