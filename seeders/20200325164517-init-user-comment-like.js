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
    return queryInterface.bulkInsert("userCommentLikes", [
      {
        commentLikeId: 1,
        userId: 1,
        cardId: 1,
        commentId: 1,
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
    return queryInterface.bulkDelete("userCommentLikes", null, {});
  }
};
