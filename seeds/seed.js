const sequelize = require('../config/connection');
const { User } = require('../models');
const { Meds } = require('../models');

const userData = require('./user.json');
const medsData = require('./meds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Meds.bulkCreate(medsData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
