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
    <form>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="acheter">Acheter</option>
        <option value="louer">Louer</option>
      </select>
      <label htmlFor="search">Recherche</label>
      <Autocomplete
        inputProps={{ id: 'search' }}
        getItemValue={item => item.nom}
        items={items}
        renderItem={(item, isHighlighted) => (
          <div
            key={item.code}
            style={{ background: isHighlighted ? 'lightgray' : 'white' }}
          >
            {item.nom}
          </div>
        )}
        value={terms}
        onChange={onSearch}
        onSelect={val => setTerms(val)}
        autoHighlight
      />
      <button onClick={onClick}>Rechercher</button>
      <div>{items.map(item => <p key={item.code}>{item.nom}</p>)}</div>
    </form>
  );
};

export default Search;
