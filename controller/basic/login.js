const axios = require('axios');
const crypto = require('crypto');
const { env } = process;
import { db as models } from '../../models';
import { ResponseObj } from '../../utils/utils';

const login = async (req, res) => {
  const code = req.query.code;
  let responseObj = await new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      params: {
        appid: env.APPID,
        secret: env.APPSECRET,
        js_code: code,
        grant_type: 'authorization_code',
      },
    }).then(async (ajaxResult) => {
      let data = ajaxResult.data;
      if (!data.openid || !data.session_key || data.errcode) {
        reject(new Error(data.errmsg || '返回数据字段不完整'));
      } else {
        let payload = {},
          sessionId;
        sessionId = crypto.createHash('sha1').update(data.openid, 'utf8').digest('hex');
        payload = { sessionId: sessionId };
        await models.users.findOrCreate({
          where: {
            sessionId: sessionId,
          },
        });
        resolve(new ResponseObj(1, 'success', payload));
      }
    });
  }).catch((e) => {
    console.log(e.message);
    return new ResponseObj(0, `缺少相应参数或微信登录接口出错`);
  });
  return res.response(responseObj).code(200);
};

export default login;
