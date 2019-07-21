import React, { useState } from 'react';

import goodApi from '../utils/goodApi';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const getGoods = () => {
    // const [title, setTitle] = useState('');
    // const [adress, setAdress] = useState('');
    // const [zipcode, setZipcode] = useState('');
    // const [city, setCity] = useState('');
    // const [description, setDescription] = useState('');
    // const [price, setPrice] = useState('');
    // const [room, setRoom] = useState('');
    // const [bedroom, setBedroom] = useState('');
    // const [square_meters, setSquare_meters] = useState('');
    // const [status, setStatus] = useState('');
    // const [type, setType] = useState('');

    const goods = goodApi.getGoods().then(({ data }) => getItem(data));
    console.log(goods);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <h1 className="title is-5 has-text-centered">Profil</h1>
            <label>Email : {user.email}</label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
