const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('produto', {
  nome: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  preco: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  quantidade: Sequelize.DOUBLE,
  categoria_id: Sequelize.INTEGER,
});

module.exports = Produto;
