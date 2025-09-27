const axios = require("axios");

const httpClientPlugin = {
    get: async (url) => {
        const response = await axios.get(url);
        return response.data;
    },
    post: async (url, body) => {},
    put: async (url, body) => {},
    delete: async (url, body) => {},
};

module.exports = {
    httpClientPlugin,
};
