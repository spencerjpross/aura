const User = require('./User');
const Journal = require('./Journal');
const Mood = require('./Mood');
const Suggestions = require('./Suggestions');

User.hasMany(Journal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Journal.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Mood.hasMany(Suggestions, {
    foreignKey: 'mood_id',
    onDelete: 'CASCADE'
});

User.hasMany(Mood, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


module.exports = {
    User,
    Mood,
    Journal,
    Suggestions,
};