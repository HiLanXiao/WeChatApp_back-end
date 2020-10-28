import { db as models } from '../../models';
import { timeConvert } from '../../utils/utils';

function getCardComments(cardId) {
  return new Promise(async (resolve, reject) => {
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
      resolve();
    }
  });
}

export default getCardComments;
