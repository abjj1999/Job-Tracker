const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const moment = require('moment');
class Application extends Model {
    

}


Application.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        jobTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        companyName: {
            type: DataTypes.STRING,
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
        /*Status: {
            type: DataTypes.STRING,
            allowNull: false
        },*/
        notify_me: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
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