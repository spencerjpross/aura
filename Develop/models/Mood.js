const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mood extends Model {}

Mood.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        mood_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'mood',
    }
);

module.exports = Mood;