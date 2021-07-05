const axios = require('axios');

const get = async (url, options = {}) => {
  return await axios.get(url);
};

const http = {
  get: get,
};

export default http;
