module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "cards",
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
      cardId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cardTitle: DataTypes.STRING,
      cardContent: DataTypes.TEXT("tiny"),
      cardSupportCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      cardCommentCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {
      tableName: "cards"
    }
  );
