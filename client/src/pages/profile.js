import React, { useState } from 'react';

import authApi from '../utils/authApi';

const Profile = () => {
  const [user, setUser] = useState('');

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
