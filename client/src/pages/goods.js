import React, { useEffect, useState } from 'react';

import goodApi from '../utils/goodApi';
import geoApi from '../utils/geoApi';

const Goods = ({ match }) => {
  const [terms, setTerms] = useState(match.params.terms);
  const [cities, setCities] = useState(null);

  const fetchCities = () => {
    const { path } = match;
    const acheter = new RegExp('/(acheter)/');

    goodApi
      .getByCityAndType(terms, acheter.test(path) ? 'acheter' : 'louer')
      .then(({ data }) => setCities(data));
  };

  useEffect(() => {
    if (!cities && !terms) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        geoApi
          .latLon(latitude, longitude)
          .then(({ data }) => setTerms(data[0].nom));
      });
    }
    fetchCities();
  }, [terms]);

  return (
    <ul className="container">
      {cities &&
        cities.map(city => (
          <li key={city._id} className="card">
            <div className="card-image">
              <figure className="image is-square">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="card-content">
              <h1 className="title is-4">{city.title}</h1>
              <div className="content">{city.description}</div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Goods;
