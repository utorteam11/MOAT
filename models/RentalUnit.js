const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RentalUnit extends Model {};

RentalUnit.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        landlord_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'landlord',
                key: 'id'
            }
        },
        rent: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rent_due: {
            type: DataTypes.DATE,
            allowNull: false
        }

    },
    {
        // configurations for table
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'rental_unit'
    }
)