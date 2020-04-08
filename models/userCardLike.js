"use strict";
module.exports = (sequelize, DataTypes) => {
  const userCardLikes = sequelize.define(
    "userCardLikes",
    {
      likeId: {
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
      }
    },
    {
      tableName: "userCardLikes"
    }
  );
  userCardLikes.associate = function(models) {
    // associations can be defined here
  };
  return userCardLikes;
};
