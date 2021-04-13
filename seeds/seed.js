const sequelize = require('../config/connection');
const userData = require("./user");
const medsData = require("./meds");



// const { User, Meds } = require('../models');

// const userData = require('./user');
// const medsData = require('./meds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // await Meds.bulkCreate(medsData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  await userData();
  await medsData()

  process.exit(0);
};

seedDatabase();

