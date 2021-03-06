import { db as models } from '../../models';
import { ResponseObj, timeConvert } from '../../utils/utils';

const getCards = async (req, res) => {
  const sessionId = req.query.sessionId;
  let responseObj = await new Promise(async (resolve, reject) => {
    let payload = [],
      userId,
      user = await models.users.findAll({
        where: {
          sessionId: sessionId,
        },
      });
    if (!user.length) {
      reject(new Error('用户不存在'));
    } else {
      userId = user[0].userId;
      for (let item of await models.cards.findAll()) {
        let cardSupportWhether = false,
          userInfo = await models.userInfo.findAll({
            where: {
              userId: item.userId,
            },
          }),
          userLikeCards = await models.userCardLikes.findAll({
            where: {
              userId: userId,
            },
          });
        for (let userLikeCard of userLikeCards) {
          if (userLikeCard.cardId === item.cardId) {
            cardSupportWhether = true;
          }
        }
        let payloadItem = {
          imageUrl: userInfo[0].imageUrl,
          nickName: userInfo[0].nickName,
          createdAt: timeConvert(item.createdAt),
          cardId: item.cardId,
          cardTitle: item.cardTitle,
          cardContent: item.cardContent,
          cardSupportCount: item.cardSupportCount,
          cardCommentCount: item.cardCommentCount,
          cardSupportWhether: cardSupportWhether,
        };
        payload.push(payloadItem);
      }
      resolve(new ResponseObj(1, 'success', payload));
    }
  }).catch((e) => {
    return new ResponseObj(0, e.message);
  });
  return res.response(responseObj).code(200);
};

export default getCards;
