"use strict";
module.exports = (sequelize, DataTypes) => {
  const userCommentLike = sequelize.define(
    "userCommentLike",
    {
      commentLikeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "users"
          },
          key: "userId"
        }
      },
      cardId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "cards"
          },
          key: "cardId"
        }
      },
      commentId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "comments"
          },
          key: "commentId"
        }
      }
    },
    {
      tableName: "userCommentLike"
    }
  );
  userCommentLike.associate = function(models) {
    // associations can be defined here
  };
  return userCommentLike;
};
