const axios = require('axios');
const URL = "http://www.omdbapi.com/?";

module.exports = function fetch(title) {
	return axios.get(URL, {
      params: {
        t: title,
        r: "json"
      }
    })
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log(error);
  });
};
