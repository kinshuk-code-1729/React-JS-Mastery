import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">UMSA</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/About">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <Link to='/Users/Add' className="btn btn-outline-light">Add User</Link>
      </div>
    </nav>
  )
}

export default Navbar;