import React, { useState } from 'react';
import Select from 'react-select';

import goodApi from '../utils/authApi';

const NewGood = () => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [room, setRoom] = useState('');
  const [bedroom, setBedromm] = useState('');
  const [square_meters, setSquareMeters] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');
  const [id_user, setIDUser] = useState('');

  const statusGoods = [
    { label: 'Vendre', value: 0 },
    { label: 'Louer', value: 1 },
  ];

  const nombers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const onSubmit = e => {
    setIDUser(1);
    e.preventDefault();
    goodApi
      .post({
        title,
        address,
        zipCode,
        city,
        description,
        price,
        room,
        bedroom,
        square_meters,
        status,
        type,
        id_user,
      })
      .then(() => (window.location.href = '/signIn'));
  };

  return (
    <form>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <div className="field">
                <label className="label">Titre</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Adresse</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    onChange={e => setAddress(e.target.value)}
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
                <label className="label">Code Postal</label>
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    onChange={e => setZipcode(e.target.value)}
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
                <label className="label">Ville</label>
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    onChange={e => setCity(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Description</label>
                <p className="control has-icons-left">
                  <textarea
                    className="input"
                    type="text"
                    onChange={e => setDescription(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Prix</label>
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    onChange={e => setPrice(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Pieces</label>
                <div class="select is-primary">
                  <select>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <p className="control has-icons-left">
                  <Select
                    onChange={e => setStatus(e.target.value)}
                    options={statusGoods}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Ville</label>
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    onChange={e => setCity(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Ville</label>
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    onChange={e => setCity(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <p className="control is-pulled-right">
                  <button className="button is-success" onClick={onSubmit}>
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

export default NewGood;
