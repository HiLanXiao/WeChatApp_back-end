module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "personalInfo",
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "users"
          },
          key: "userId"
        }
      },
      name: DataTypes.STRING,
      telephone: DataTypes.STRING,
      email: DataTypes.STRING,
      personalSite: DataTypes.STRING,
      personalGit: DataTypes.STRING,
      introduction: DataTypes.TEXT("tiny")
    },
    {
      tableName: "personalInfo"
    }
  );
