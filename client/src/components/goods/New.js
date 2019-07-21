import React, { useState } from 'react';

import goodApi from '../../utils/goodApi';

const NewGood = () => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [room, setRoom] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [square_meters, setSquareMeters] = useState('');
  const [status, setStatus] = useState(1);
  const user = JSON.parse(window.localStorage.getItem('user'));
  const [id_user, setIDUser] = useState(user.id);
  const [type, setType] = useState('vendre');

  const onSubmit = e => {
    e.preventDefault();
    goodApi.post({
      title,
      address,
      zipcode,
      city,
      description,
      price,
      room,
      bedroom,
      square_meters,
      status,
      type,
      id_user,
    });
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
                    type="number"
                    onChange={e => setZipcode(parseInt(e.target.value), 10)}
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
                    type="number"
                    onChange={e => setPrice(parseInt(e.target.value), 10)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Pieces</label>
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="number"
                    onChange={e => setRoom(parseInt(e.target.value), 10)}
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
                <label className="label">Chambres</label>
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="number"
                    onChange={e => setBedroom(parseInt(e.target.value), 10)}
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
                <label className="label">Mètre carré</label>
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="number"
                    onChange={e =>
                      setSquareMeters(parseInt(e.target.value), 10)
                    }
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
                <label className="label">Type</label>
                <div class="select is-primary">
                  <select
                    id="type"
                    defaultValue="vendre"
                    onChange={e => setType(e.target.value)}
                    value={type}
                  >
                    <option value="vendre">Vendre</option>
                    <option value="louer">Louer</option>
                  </select>
                </div>
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
