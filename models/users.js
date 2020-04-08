module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "users",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sessionId: DataTypes.STRING
    },
    {
      tableName: "users"
    }
  );
