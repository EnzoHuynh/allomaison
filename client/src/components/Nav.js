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
          {!localStorage.getItem('jwt') ? (
            <>
              <Link to="/signUp" className="button is-primary">
                Inscription
              </Link>
              <Link to="/signIn" className="button is-light">
                Connexion
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="button is-primary">
                Profile
              </Link>
              <Link
                to="/logout"
                className="button is-danger"
                onClick={() => {
                  localStorage.removeItem('jwt');
                  window.location.href = '/';
                }}
              >
                Deconnexion
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
