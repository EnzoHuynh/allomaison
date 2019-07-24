import React, { useEffect, useState } from 'react';

import goodApi from '../../utils/goodApi';

const Detail = ({ match }) => {
  const [id] = useState(match.params.id);
  const [good, setGood] = useState(null);

  const fetchGood = () => goodApi.getGood(id).then(({ data }) => setGood(data));

  useEffect(() => {
    fetchGood();
  }, [id]);

  return good ? (
    <article className="card">
      {/* <div className="card-image">
        <figure className="image is-square">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div> */}
      <div className="card-content">
        <h1 className="title is-4">{good.title}</h1>
        <div className="content">{good.description}</div>
        <div className="content">
          Pièces {good.room} / Chambres {good.bedroom} / {good.square_meters}{' '}
          mètres carrés
        </div>
        <div className="content">
          {good.address} {good.city} {good.zipcode}
        </div>
        <div className="content">
          Prix {good.price}
          {good.type === 'louer' ? '€/mois' : '€'}
        </div>
      </div>
    </article>
  ) : (
    <></>
  );
};

export default Detail;
