const Sequelize = require('sequelize')
const {username, password} = require("../config/constants.js") 
const sequelize = new Sequelize('compound_db', username, password, {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
})

module.exports = sequelize
  