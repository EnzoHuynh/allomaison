import React, { useState, useEffect } from 'react';

import goodApi from '../utils/goodApi';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { goods, setGoods } = useState(null);

  const fetchGoods = () => {
    goodApi.getGoods(user.id).then(setGoods(goods));
  };

  console.log(fetchGoods);
  useEffect(() => {
    fetchGoods();
  }, [user.id]);

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
<<<<<<< HEAD
            <div className="box">
              <figure className="image is-128x128" style={{ margin: '0 auto' }}>
                <img
                  className="is-rounded"
                  src={
                    user && 'path_img' in user
                      ? user.path_img
                      : 'https://randomuser.me/api/portraits/women/79.jpg'
                  }
                />
              </figure>
            </div>
=======
            <h1 className="title is-5 has-text-centered">Profil</h1>
            <label>Email : {user.email}</label>
>>>>>>> 1d3aa163c49d6dee72f9d665344a41b4ecd4be46
          </div>
          {goods &&
            goods.map(goods => (
              <>
                <div>{goods.title}</div>
                <div>{goods.address}</div>
                <div>{goods.city}</div>
                <div>{goods.zipcode}</div>
                <div>{goods.description}</div>
                <div>{goods.price}</div>
                <div>{goods.room}</div>
                <div>{goods.bedroom}</div>
                <div>{goods.square_meters}</div>
              </>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
