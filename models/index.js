const User = require('./User');
const Meds = require('./Meds');

// Driver.hasOne(License, {
//   foreignKey: 'driver_id',
//   onDelete: 'CASCADE',
// });

// License.belongsTo(Driver, {
//   foreignKey: 'driver_id',
// });

// Define a User as having many Meds, thus creating a foreign key in the `meds` table
User.hasMany(Meds, {
  foreignKey: 'med_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Meds side
Meds.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Meds };
