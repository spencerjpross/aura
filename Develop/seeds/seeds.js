const sequelize = require('../config/connection');
const { User, Journal, Mood } = require('../models');

const userData = require('./userData.json');
const journalData = require('./journalData.json');
const moodData = require('./moodData.json');
const suggestionData = require('./suggestionData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const journals = await Journal.bulkCreate(journalData);
    const moods = await Mood.bulkCreate(moodData);
    const suggestions = await Suggestion.bulkCreate(suggestionData);
    const users = await User.bulkCreate(userData);

    process.exit(0);
};

seedDatabase();