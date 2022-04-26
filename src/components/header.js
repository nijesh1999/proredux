import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Header({ val }) {
  return (
    <div>
      <nav className="navbar navbar-light shadow-lg bg-light">
        <span className="navbar-brand mb-0 mx-3 h1">Covid-19 dashboard</span>
        <div className="side mx-2">
          <Link className="link head px-2 hover-shadow" to="/">
            Home
          </Link>
          <Link
            className="link head px-2 hover-shadow"
            to="/search"
            state={val}
          >
            Search
          </Link>
          <Link
            className="link head px-2 hover-shadow"
            to="/global"
            state={val}
          >
            Global
          </Link>
          <Link
            className="link head px-2 hover-shadow"
            to="/charts"
            state={val}
          >
            chart
          </Link>
        </div>
      </nav>
    </div>
  );
}
