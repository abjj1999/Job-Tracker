const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Application extends Model {}


Application.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        jobTitle: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        companyName: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        companyURL: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            isURL: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'user',
            key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'application'
    }   
)

module.exports = Application;