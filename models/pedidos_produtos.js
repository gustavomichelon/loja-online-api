const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Pedidos_Produtos = sequelize.define('pedidos_produtos', {
  pedido_id: Sequelize.INTEGER,
  produto_id: Sequelize.INTEGER,
  preco: Sequelize.DOUBLE,
  quantidade: Sequelize.DOUBLE,
});

module.exports = Pedidos_Produtos;
