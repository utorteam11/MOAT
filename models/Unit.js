const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Unit extends Model {}

Unit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    unit_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    property_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "property",
        key: "id",
      },
    },
    rent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rent_due: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    unit_password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // configurations for table
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "unit",
  }
);

module.exports = Unit;
