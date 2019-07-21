import axios from './api';

const upload = async (body = {}) => {
  try {
    const data = await axios.post(`images/upload`, body);
    console.log('👉 Returned data:', data);
    return data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
};

const imageApi = {
  upload,
};

export default imageApi;
