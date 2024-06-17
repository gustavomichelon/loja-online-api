const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('cliente', {
  nome: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  altura: Sequelize.DOUBLE,
  nascimento: Sequelize.DATE,
  cidade_id: Sequelize.INTEGER,
});

module.exports = Cliente;
