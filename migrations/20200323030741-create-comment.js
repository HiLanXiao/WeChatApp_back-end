"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("comments", {
      commentId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users"
          },
          key: "userId"
        }
      },
      cardId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "cards"
          },
          key: "cardId"
        }
      },
      whetherCommentCard: Sequelize.BOOLEAN,
      content: Sequelize.TEXT("tiny"),
      replyUserId: Sequelize.INTEGER,
      replyCardOrCommentId: Sequelize.INTEGER,
      commentSupportCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      commentCommentCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("comments");
  }
};
