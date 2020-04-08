function timeConvert(time) {
  return time.getFullYear() + "年" + time.getMonth() + "月" + time.getDay() + "日";
}

class ResponseObj {
  constructor(status, message, payload) {
    this.status = status;
    this.message = message;
    this.payload = payload;
  }
}

module.exports = { ResponseObj, timeConvert };
