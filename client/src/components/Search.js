import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';

import geoApi from '../utils/geoApi';

const Search = ({ history }) => {
  const [terms, setTerms] = useState('');
  const [items, setItems] = useState([]);
  const [type, setType] = useState('acheter');

  const onSearch = e => {
    setTerms(e.target.value);
    if (e.target.value.length > 2)
      geoApi.communes(e.target.value).then(({ data }) => setItems(data));
  };

  const onClick = e => {
    e.preventDefault();
    history.push(`/${type}/${terms}`);
  };

  return (
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <form className="container">
          <div>
            <label className="title" htmlFor="search">
              Recherche de bien
            </label>
          </div>
          <br />
          <div className="select">
            <select value={type} onChange={e => setType(e.target.value)}>
              <option value="acheter">Acheter</option>
              <option value="louer">Louer</option>
            </select>
          </div>
          <Autocomplete
            inputProps={{ id: 'search', className: 'input' }}
            getItemValue={item => item.nom}
            items={items}
            renderItem={(item, isHighlighted) => (
              <div
                key={item.code}
                style={{ background: isHighlighted ? 'lightgray' : 'black' }}
              >
                {item.nom}
              </div>
            )}
            value={terms}
            onChange={onSearch}
            onSelect={val => setTerms(val)}
            autoHighlight
          />
          <button className="button" onClick={onClick}>
            Rechercher
          </button>
          <div hidden>
            {items.map(item => (
              <p key={item.code}>{item.nom}</p>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Search;
