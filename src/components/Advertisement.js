import React from "react";
import { Link } from "react-router-dom";

export default function Advertisement({ add }) {
  return (
    <div className="card hoverable">
      <div className="card-content">
        <Link to="/" className="btn btn-floating purple lighten-3">
          NN
        </Link>
        <span className="posted-by grey-text">{add.author}, 12 sep 2018</span>
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
