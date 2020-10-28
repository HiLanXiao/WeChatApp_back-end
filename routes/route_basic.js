const Joi = require('joi');
import { basicController } from '../controller/basic';
import { ResponseObj } from '../utils/utils';

export const route_basic = [
  {
    method: 'GET',
    path: '/login',
    options: {
      tags: ['api', 'basic'],
      description: '登录接口',
      validate: {
        query: Joi.object({
          code: Joi.string()
            .required()
            .example('jsakfsajkfh')
            .description('微信小程序登录所需的code'),
        }),
      },
      response: {
        status: {
          200: Joi.object({
            message: Joi.string().required().example('success').description('返回的相应消息'),
            status: Joi.number().integer().required().example(1).description('返回的请求状态'),
            payload: Joi.object({
              sessionId: Joi.string()
                .required()
                .example('sajjsabfhjashjkzhhjahfs')
                .description('加密后返回的 sessionId'),
            })
              .description('返回的数据')
              .label('login'),
          }).label('result'),
        },
      },
    },
    handler: basicController.login,
  },
  {
    method: 'GET',
    path: '/getCards',
    options: {
      tags: ['api', 'basic'],
      description: '拉取首页多个帖子接口',
      validate: {
        query: Joi.object({
          sessionId: Joi.string()
            .required()
            .example('mkkjkgfdnkznjhjfhdgnjzdf')
            .description('用户的sessionId'),
        }),
      },
      response: {
        status: {
          200: Joi.object({
            message: Joi.string().required().example('success').description('返回的相应消息'),
            status: Joi.number().required().integer().example(1).description('返回的请求状态'),
            payload: Joi.array()
              .items(
                Joi.object({
                  cardCommentCount: Joi.number()
                    .integer()
                    .required()
                    .example(2)
                    .description('帖子的评论数'),
                  cardContent: Joi.string()
                    .required()
                    .example('艹，最烦装逼的人了 --那英')
                    .description('帖子内容'),
                  cardId: Joi.number().integer().required().example(1).description('帖子的id'),
                  cardSupportCount: Joi.number()
                    .integer()
                    .required()
                    .example(1)
                    .description('帖子的点赞数'),
                  cardSupportWhether: Joi.boolean()
                    .required()
                    .example(false)
                    .description('该用户是否点过赞'),
                  cardTitle: Joi.string().required().example('那姐语录').description('帖子标题'),
                  createdAt: Joi.string()
                    .required()
                    .example('2019年11月2日')
                    .description('帖子创建时间'),
                  imageUrl: Joi.string()
                    .required()
                    .example('https://wx.qlogo.cn/mmopen')
                    .description('用户头像url'),
                  nickName: Joi.string().required().example('那英').description('用户昵称'),
                }),
              )
              .description('返回的数据')
              .label('getCards'),
          }).label('result'),
        },
      },
    },
    handler: basicController.getCards,
  },
];
