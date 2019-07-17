import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <h1 className="title is-4">AlloMaison</h1>
      </Link>
    </div>

    <div className="navbar-menu">
      <div className="navbar-start">
        <Link to="/acheter" className="navbar-item">
          Acheter
        </Link>
        <Link to="/louer" className="navbar-item">
          Louer
        </Link>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to="/signUp" className="button is-primary">
            Sign up
          </Link>
          <Link to="/signIn" className="button is-light">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;