import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../runinc_logo.svg';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light stick-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img className="min" src={logo} /></a>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
             <li className="nav-item">
              <Link to="/Events" className="nav-link">Events</Link>
            </li>
            <li className="nav-item">
              <Link to="/Shop" className="nav-link">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contactus" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div><div className="col-6">
        <input className="gule" type="text" placeholder="Search.." />
        <button className="btn-secondary">Search</button>
      </div>

    </nav>
  )
}

export default Navbar