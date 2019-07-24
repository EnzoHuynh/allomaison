import React, { useState, useEffect } from 'react';

import goodApi from '../utils/goodApi';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [goods, setGoods] = useState(null);

  const fetchGoods = () => {
    goodApi.getGoods(user.id).then(({ data }) => setGoods(data));
  };

  useEffect(() => {
    fetchGoods();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="">
          <div className="column is-6 is-offset-3">
            <h1 className="title is-5 has-text-centered">Profil</h1>
            <label>Email : {user.email}</label>
          </div>
          <h2 className="title is-5">
            <strong>Mes biens :</strong>
          </h2>
          {goods &&
            goods.map(good => (
              <>
                <div className="box">
                  <div className="columns">
                    <div className="column is-6">
                      <div>
                        <strong>Titre : </strong>
                        {good.title}
                      </div>
                      <div>
                        <strong>Adresse : </strong>
                        {good.address}
                      </div>
                      <div>
                        <strong>Ville : </strong>
                        {good.city}
                      </div>
                      <div>
                        <strong>Code Postal : </strong>
                        {good.zipcode}
                      </div>
                      <div>
                        <strong>Description : </strong>
                        {good.description}
                      </div>
                    </div>
                    <div className="column is-6">
                      <div>
                        <strong>Prix : </strong>
                        {good.price}€
                      </div>
                      <div>
                        <strong>Pièce : </strong>
                        {good.room}
                      </div>
                      <div>
                        <strong>Chambre : </strong>
                        {good.bedroom}
                      </div>
                      <div>
                        <strong>Superficie : </strong>
                        {good.square_meters}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
