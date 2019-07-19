import axios from './api';

const upload = async (body = {}) => {
  console.log(body);
  try {
    const data = await axios.post(`upload`, body);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const imagesApi = {
  upload,
};

export default imagesApi;
