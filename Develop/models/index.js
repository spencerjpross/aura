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

Mood.belongsTo(Journal, {
    foreignKey: 'mood_id',
});

User.hasMany(Journal, {
    foreignKey: 'journal_id',
});

module.exports = {
    User,
    Mood,
    Journal,
};