"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("userCommentLikes", {
      commentLikeId: {
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
      commentId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "comments"
          },
          key: "commentId"
        }
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
    return queryInterface.dropTable("userCommentLikes");
  }
};
