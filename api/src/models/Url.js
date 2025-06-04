const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Url = sequelize.define('Url', {
  shortId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  originalUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Url;
