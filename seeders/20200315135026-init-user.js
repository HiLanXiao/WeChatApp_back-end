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
    return queryInterface.bulkInsert("users", [
      {
        userId: 1,
        sessionId: "39703309e92e96cd4f04d6a85bd09c4d1af44b17",
        createdAt: "2019-12-03 09:13:38",
        updatedAt: "2019-12-03 09:13:38"
      },
      {
        userId: 2,
        sessionId: "test",
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
    return queryInterface.bulkDelete("users", null, {});
  }
};
