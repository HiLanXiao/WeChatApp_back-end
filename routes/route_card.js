const Joi = require('joi');
import { cardController } from '../controller/card';
import { ResponseObj } from '../utils/utils';

export const route_card = [
  {
    method: 'GET',
    path: '/card/getCardComments',
    options: {
      tags: ['api', 'card'],
      description: '拉取帖子评论接口',
      validate: {
        query: Joi.object({
          cardId: Joi.string().description('帖子的cardId'),
        }),
      },
    },
    handler: async (req, res) => {
      let responseObj = await cardController.getCardComments(req.query.cardId).catch((e) => {
        return new ResponseObj(0, e.message);
      });
      return res.response(responseObj).code(200);
    },
  },
];
