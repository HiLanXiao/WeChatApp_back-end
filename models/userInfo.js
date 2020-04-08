"use strict";
module.exports = (sequelize, DataTypes) => {
  const userInfo = sequelize.define(
    "userInfo",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: {
            tableName: "users"
          },
          key: "userId"
        }
      },
      nickName: DataTypes.STRING,
      imageUrl: DataTypes.STRING
    },
    {
      tableName: "userInfo"
    }
  );
  userInfo.associate = function(models) {
    // associations can be defined here
  };
  return userInfo;
};
