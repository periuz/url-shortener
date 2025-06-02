const { DataTypes } = require('sequelize');
const sequelize = require('../services/sequelize');

const Url = sequelize.define('Url', {
  originalUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shortUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

Url.sync();

module.exports = Url;
