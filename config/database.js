const Sequelize = require('sequelize');

const sequelize = new Sequelize('loja_online_db', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
