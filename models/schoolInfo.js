module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "schoolInfo",
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
      university: DataTypes.STRING,
      college: DataTypes.STRING,
      major: DataTypes.STRING,
      gradeIndex: DataTypes.INTEGER,
      degreeIndex: DataTypes.INTEGER,
    },
    {
      tableName: "schoolInfo"
    }
  );
