import axios from './api';

const communes = async (nom = '') => {
  try {
    const data = await axios.get(`https://geo.api.gouv.fr/communes?nom=${nom}`);
    // console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const latLon = async (lat, lon) => {
  try {
    const data = await axios.get(`https://geo.api.gouv.fr/communes?lat=${lat}&lon=${lon}`);
    // console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const geoApi = {
  communes,
  latLon,
};

export default geoApi;
