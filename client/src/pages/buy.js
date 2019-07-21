import React, { useEffect, useState } from 'react';

import goodApi from '../utils/goodApi';

const Buy = ({ match }) => {
  const { terms } = match.params;
  const [cities, setCities] = useState(null);

  const fetchCities = () =>
    goodApi.getByCity(terms).then(({ data }) => setCities(data));

  useEffect(() => {
    fetchCities();
  }, [terms]);

  return (
    <ul className="columns">
      {cities &&
        cities.map(city => (
          <li
            key={city._id}
            className="card column is-half is-offset-one-quarter"
          >
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

export default Buy;
