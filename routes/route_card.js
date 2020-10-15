const utils = require('../utils/utils');

let route_card = [
  {
    method: 'GET',
    path: '/card/getCardComments',
    options: {
      tags: ['api', 'card'],
      description: '帖子接口',
    },
    handler: async (req, res) => {
      try {
        let responseObj = await utils.getCardComments(req.query.cardId);
        return res.response(responseObj).code(200);
      } catch (e) {
        console.log(e);
        let responseObj = new utils.ResponseObj(0, e.message);
        return res.response(responseObj).code(200);
      }
    },
  },
];
module.exports = { route_card };
