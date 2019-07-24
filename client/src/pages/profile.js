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
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <h1 className="title is-5 has-text-centered">Profil</h1>
            <label>Email : {user.email}</label>
          </div>
          {goods &&
            goods.length &&
            goods.map(good => (
              <>
                <div>{good.title}</div>
                <div>{good.address}</div>
                <div>{good.city}</div>
                <div>{good.zipcode}</div>
                <div>{good.description}</div>
                <div>{good.price}</div>
                <div>{good.room}</div>
                <div>{good.bedroom}</div>
                <div>{good.square_meters}</div>
              </>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
