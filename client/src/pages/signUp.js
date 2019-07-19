import React, { useState } from 'react';

import authApi from '../utils/authApi';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');

  const onRegister = e => {
    e.preventDefault();
    authApi
      .register({ name, username, email, password, dob })
      .then(() => (window.location.href = '/signIn'));
  };

  return (
    <form>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <div className="field">
                <label className="label">Nom</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    onChange={e => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Nom d'utilisateur</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    onChange={e => setUsername(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <label className="label">Mot de passe</label>
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Date de naissance</label>
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="date"
                    onChange={e => setDob(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <p className="control is-pulled-right">
                  <button className="button is-success" onClick={onRegister}>
                    Valider
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default SignUp;
