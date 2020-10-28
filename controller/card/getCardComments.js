import { db as models } from '../../models';
import { timeConvert } from '../../utils/utils';

const getCardComments = async (req, res) => {
  const cardId = req.query.cardId;
  let responseObj = await new Promise(async (resolve, reject) => {
    let payload = {},
      cards = await models.cards.findAll({
        where: {
          cardId: cardId,
        },
      }),
      comments = await models.comments.findAll({
        where: {
          cardId: cardId,
        },
      });
    if (!cards.length) {
      reject(new Error('帖子不存在'));
    } else {
    }
    if (!comments.length) {
      reject(new Error('评论不存在'));
    } else {
      for (let comment of comments) {
      }
      payload = comments[0];
      payload.dataValues.createdAt = timeConvert(payload.createdAt);
      // TODO: 显然这里没写完= =
      resolve();
    }
  }).catch((e) => {
    return new ResponseObj(0, e.message);
  });
  return res.response(responseObj).code(200);
};

export default getCardComments;
