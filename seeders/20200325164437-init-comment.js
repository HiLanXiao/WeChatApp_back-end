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
    return queryInterface.bulkInsert("comments", [
      {
        commentId: 1,
        userId: 2,
        cardId: 1,
        whetherCommentCard: true,
        content: "wow，继续加油呀！",
        replyUserId: 1,
        replyCardOrCommentId: 1,
        commentSupportCount: 1,
        commentCommentCount: 1,
        createdAt: "2019-12-03 09:13:38",
        updatedAt: "2019-12-03 09:13:38"
      },
      {
        commentId: 2,
        userId: 2,
        cardId: 1,
        whetherCommentCard: false,
        content: "我们项目组也会好好加油的，嘿嘿嘿",
        replyUserId: 2,
        replyCardOrCommentId: 1,
        commentSupportCount: 0,
        commentCommentCount: 0,
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
    return queryInterface.bulkDelete("comments", null, {});
  }
};
