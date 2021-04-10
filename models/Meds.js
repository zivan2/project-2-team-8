const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meds extends Model {}

Meds.init(
  {
    // Manually define the primary key
    med_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    medName: {
      type: DataTypes.STRING
    },
    dosage: {
      type: DataTypes.STRING
    },
    medRegimen: {
      type: DataTypes.STRING
    },
    medLength: {
      type: DataTypes.INTEGER
    },
    sideEffects: {
      type: DataTypes.STRING
    },
    medRefill: {
      type: DataTypes.BOOLEAN
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: 'meds'
  }
);

module.exports = Meds;
