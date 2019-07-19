import React, { useState } from 'react';

import authApi from '../utils/authApi';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = e => {
    e.preventDefault();
    authApi.login({ email, password }).then(({ data }) => {
      localStorage.setItem('jwt', data.token);
      window.location.href = '/';
    });
  };

  return (
    <form>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <div className="field">
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
                <p className="control">
                  <button className="button is-success" onClick={onLogin}>
                    Connexion
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

export default SignIn;
