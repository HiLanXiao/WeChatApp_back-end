const ResponseObj = require("../utils/someObj");
const utils = require("../utils/utils");

let route_basic = [
  {
    method: "GET",
    path: "/login",
    options: {
      tags: ["api", "basic"],
      description: "登录接口"
    },
    handler: async (req, res) => {
      try {
        let responseObj = await utils.getAndSaveSessionId(req.query.code);
        return res.response(responseObj).code(200);
      } catch (e) {
        console.log(e);
        let responseObj = new ResponseObj(0, e.message);
        return res.response(responseObj).code(200);
      }
    }
  },
  {
    method: "GET",
    path: "/getCards",
    options: {
      tags: ["api", "basic"],
      description: "帖子接口"
    },
    handler: async (req, res) => {
      try {
        let responseObj = await utils.getCards(req.query.sessionId);
        return res.response(responseObj).code(200);
      } catch (e) {
        console.log(e);
        let responseObj = new ResponseObj(0, e.message);
        return res.response(responseObj).code(200);
      }
    }
  }
];
module.exports = { route_basic };
