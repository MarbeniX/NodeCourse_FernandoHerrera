const { getAge } = require("../plugins/get-age.pluggin");
const { getUUID } = require("../plugins/get-uuid.pluggin");
const { httpClientPlugin } = require("../plugins/http-client.plugin");
const buildLogger = require("../plugins/logger.plugin");

module.exports = {
    getAge,
    getUUID,
    httpClientPlugin,
    buildLogger,
};
