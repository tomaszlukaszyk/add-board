import React from "react";
import { Link } from "react-router-dom";

export default function Advertisement() {
  return (
    <div className="card hoverable">
      <div className="card-content">
        <Link className="btn btn-floating purple lighten-3">NN</Link>
        <span className="posted-by grey-text">Author Name, 12 sep 2018</span>
      </div>
      <div className="card-action">
        <span className="card-title">Title of add</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe beatae
          dicta explicabo dignissimos, inventore facilis iste, maxime nam
          asperiores delectus repellendus? Fugit qui ea magnam tempore
          repellendus iusto sit expedita.
        </p>
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
