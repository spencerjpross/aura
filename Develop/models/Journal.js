const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Journal extends Model {}

Journal.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true,   
        },
        topic: {
            type: DataTypes.TEXT,
            allowNull: true,
        },       
        mood_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'mood',
                key: 'id'
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'journal',
    }
);

module.exports = Journal;