const { route_basic } = require("./route_basic");
const { route_card } = require("./route_card");
const route = [...route_basic, ...route_card];
module.exports = { route };
