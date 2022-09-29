const User = require('./User');
const Journal = require('./Journal');
const Mood = require('./Mood');


Journal.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Mood, {
    foreignKey: 'mood_id',
});

Mood.hasMany(Journal, {
    foreignKey: 'journal_id',
});

User.hasMany(Journal, {
    foreignKey: 'user_id',
});

module.exports = {
    User,
    Mood,
    Journal,
};