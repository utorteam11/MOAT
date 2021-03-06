const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Issue extends Model {}

Issue.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    issue_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    issue_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Open",
      allowNull: false,
    },

    unit_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "unit",
        key: "id",
      },
    },
  },
  {
    // configurations for table
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "issue",
  }
);

module.exports = Issue;
