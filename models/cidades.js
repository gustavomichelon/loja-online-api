const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Cidade = sequelize.define('cidade', {
  nome: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});

module.exports = Cidade;
