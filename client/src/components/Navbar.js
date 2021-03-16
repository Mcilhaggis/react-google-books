import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar transparent">
      <Link className="navbar-brand" to="/">
        Google Books
      </Link>
      <div>
        <ul className="nav">
          <li className="link ">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;