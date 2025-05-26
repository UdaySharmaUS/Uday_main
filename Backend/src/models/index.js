const sequelize = require('../../config/config.js');
const Compound = require('./compound.models.js');

sequelize.sync();

module.exports = { sequelize, Compound };
