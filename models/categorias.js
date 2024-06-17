const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('categoria', {
  nome: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
});

module.exports = Categoria;
