"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("personalInfo", [
      {
        userId: "1",
        name: "张澜潇",
        telephone: "13541661319",
        email: "1256925921@qq.com",
        personalSite: "hilanxiao.top",
        personalGit: "2017221302019@std.uestc.edu.cn",
        introduction: "一只默默无闻的前端小菜鸡",
        createdAt: "2019-12-03 09:13:38",
        updatedAt: "2019-12-03 09:13:38"
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("personalInfo", null, {});
  }
};
