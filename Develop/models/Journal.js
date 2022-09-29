const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Journal extends Model {}

Journal.init (
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true,   
        },
        topic: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTERGER,
            refrences: {
                model: 'user',
                key: 'id',
            },
        },
        mood_id: {
            type: DataTypes.INTERGER,
            refrences: {
                model: 'mood',
                key: 'id'
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'journal',
    }
);

module.exports = Journal;