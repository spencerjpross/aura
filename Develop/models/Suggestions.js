const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
 class Suggestions extends Model {}

 Suggestions.init(
     {
         id: {
             type: DataTypes.INTEGER,
             allowNull: false,
             primaryKey: true,
             autoIncrement: true,
         },
         title: {
             type: DataTypes.STRING,
             allowNull: false,
         },
         mood_id: {
             type: DataTypes.INTEGER,
             references: {
                 model: 'mood',
                 key: 'id'
             },
         },
         
     },
     {
        sequelize,
        timestamps: false,
        freeTableNames: true,
        underscored: true,
        modelName: 'suggestions',
     }
 );

 module.exports = Suggestions;