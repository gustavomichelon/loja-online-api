const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('pedido', {
  horario: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  cliente_id: Sequelize.INTEGER,
});

module.exports = Pedido;
