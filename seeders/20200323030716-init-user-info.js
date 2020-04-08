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
    return queryInterface.bulkInsert("userInfo", [
      {
        userId: 1,
        nickName: "张澜潇",
        imageUrl:
          "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epgnG5RAEBneYj28SDI1eyf67JCCYgkibwH0FF2cuJvgEicIlibzxWic6lBhUcmGTXzWDOG1CTJVMm8kA/132",
        createdAt: "2019-12-03 09:13:38",
        updatedAt: "2019-12-03 09:13:38"
      },
      {
        userId: 2,
        nickName: "何睿",
        imageUrl:
          "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKPPFbkWCFlygnhkGRpk7IcLibE2mn88gq7gOo28qpcwZGiczoia3Jp4ibyhwCRD3bussBXB3weJBdKDg/132",
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
    return queryInterface.bulkDelete("userInfo", null, {});
  }
};
