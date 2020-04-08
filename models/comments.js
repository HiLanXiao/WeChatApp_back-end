"use strict";
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define(
    "comments",
    {
      commentId: {
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
      whetherCommentCard: DataTypes.BOOLEAN,
      content: DataTypes.TEXT("tiny"),
      replyUserId: DataTypes.INTEGER,
      replyCardOrCommentId: DataTypes.INTEGER,
      commentSupportCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      commentCommentCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {
      tableName: "comments"
    }
  );
  comments.associate = function(models) {
    // associations can be defined here
  };
  return comments;
};
