const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Property extends Model {}

Property.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    landlord_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "landlord",
        key: "id",
      },
    },

    unit_id: { 
      type: DataTypes.INTEGER,
      references: {
        model: "unit",
        key: "id",
      }
    }
  },
  {
    // configurations for table
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "property",
  }
);

module.exports = Property;
