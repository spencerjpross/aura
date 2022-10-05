const sequelize = require('../config/connection');
const { User, Suggestions, Journal, Mood } = require('../models');

const userData = require('./userData.json');
const journalData = require('./journalData.json');
const moodData = require('./moodData.json');
const suggestionData = require('./suggestionData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const mood of moodData) {
        const newMood = await Mood.create({
            ...mood,
        });
    }

    for (const suggestion of suggestionData) {
        const newSuggestion = await Suggestions.create({
            ...suggestion,
        })
    }

    for (const journal of journalData) {
        const newJournal = await Journal.create({
          ...journal,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
      }

    process.exit(0);
};

seedDatabase();