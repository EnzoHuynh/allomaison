import React from 'react';

const signUp = () => (
  <>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="field">
              <label class="label">Nom</label>
              <div class="control">
                <input class="input" type="text" />
              </div>
            </div>

            <div class="field">
              <label class="label">Nom d'utilisateur</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <p class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <label class="label">Mot de passe</label>
              <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div class="field">
              <label class="label">Date de naissance</label>
              <p class="control has-icons-left">
                <input class="input" type="date" />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div class="field">
              <p class="control is-pulled-right">
                <button class="button is-success">Valider</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default signUp;
