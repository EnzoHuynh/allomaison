import axios from './api';

const post = async (body = {}) => {
  try {
    const data = await axios.post(`goods`, body);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const getGoods = async id => {
  try {
    const data = await axios.get(`goods/user/${id}`);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const getByCity = async city => {
  try {
    const data = await axios.get(`goods/city/${city}`);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const goodApi = {
  post,
  getByCity,
  getGoods,
};

export default goodApi;
